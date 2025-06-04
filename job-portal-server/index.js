const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

require('dotenv').config();
const app = express();

const port = process.env.PORT || 5000;
//middleware
app.use(
  cors({
    origin: ['http://localhost:5173'],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
const logger = (req, res, next) => {
  console.log('Inside the logger');
  next();
};
const verifyToken = (req, res, next) => {
  const token = req?.cookies?.token;
  if (!token) {
    return res.status(401).send({ message: 'Unauthorized access' });
  }
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: 'UnAuthorized access' });
    }
    req.user = decoded;
    next();
  });
};

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.u7yariw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    //auth related api,jwt
    app.post('/jwt', async (req, res) => {
      const user = req.body;
      const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: '1h',
      });
      res
        .cookie('token', token, {
          httpOnly: true,
          secure: false,
        })
        .send({ success: true });
    });

    //job related API
    const jobCollection = client.db('jobPortal').collection('jobs');
    const jobApplicationCollection = client
      .db('jobPortal')
      .collection('job_applications');
    //get
    app.get('/jobs', async (req, res) => {
      //filtering
      const email = req.query.email;
      let query = {};
      if (email) {
        query = { hr_email: email };
      }
      const cursor = jobCollection.find(query);
      const result = await cursor.toArray();
      res.send(result);
    });
    //get single job
    app.get('/jobs/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await jobCollection.findOne(query);
      res.send(result);
    });
    app.post('/jobs', async (req, res) => {
      const jobs = req.body;
      const result = await jobCollection.insertOne(jobs);
      res.send(result);
    });

    // Job Applicaitons API
    app.post('/job-applications', async (req, res) => {
      const application = req.body;
      const result = await jobApplicationCollection.insertOne(application);
      res.send(result);
    });

    //get all data ,get one data
    const { ObjectId } = require('mongodb');

    app.get('/job-application', verifyToken, async (req, res) => {
      const email = req.query.email;
      if (req.user.email !== req.query.email) {
        return res.status(403).send({ message: 'Forbidden access' });
      }
      console.log('cookies', req.cookies);

      const result = await jobApplicationCollection
        .aggregate([
          {
            $match: { applicant_email: email },
          },
          {
            $addFields: {
              jobObjectId: {
                $convert: {
                  input: '$job_id',
                  to: 'objectId',
                  onError: null,
                  onNull: null,
                },
              },
            },
          },
          {
            $lookup: {
              from: 'jobs', // your jobs collection name
              localField: 'jobObjectId',
              foreignField: '_id',
              as: 'jobDetails',
            },
          },
          {
            $unwind: '$jobDetails',
          },
        ])
        .toArray();

      res.send(result);
    });

    //get id by job for recruiter.for a particular job how many application has come
    app.get('/job-applications/jobs/:job_id', async (req, res) => {
      const jobId = req.params.job_id;
      const query = { job_id: jobId };
      const result = await jobApplicationCollection.find(query).toArray();
      res.send(result);
    });
    app.patch('/job-applications/:id', async (req, res) => {
      const id = req.params.id;
      const data = req.body;
      const filter = { _id: new ObjectId(id) };
      const updateDoc = {
        $set: {
          status: data.status,
        },
      };
      const result = await jobApplicationCollection.updateOne(
        filter,
        updateDoc
      );
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    await client.db('admin').command({ ping: 1 });
    console.log(
      'Pinged your deployment. You successfully connected to MongoDB!'
    );
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
}
run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('Search your jobs');
});
app.listen(port, () => {
  console.log(`Server is listeing from ${port}`);
});
