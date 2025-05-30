import React from 'react';
import job1 from '../../assets/jobs/job1.png'; // Replace with actual icons

const categories = [
  { title: 'Marketing & Sale', jobs: 1526, icon: job1 },
  { title: 'Customer Help', jobs: 185, icon: job1 },
  { title: 'Finance', jobs: 168, icon: job1 },
  { title: 'Software', jobs: 1856, icon: job1 },
  { title: 'Human Resource', jobs: 165, icon: job1 },
];

const Category = () => {
  return (
    <div className="py-10 max-w-7xl mx-auto px-4">
      <h1 className="text-center text-2xl font-semibold mb-2">Browse By Category</h1>
      <p className="text-center text-gray-500 mb-10">Find the job that's perfect for you</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {categories.map((category, idx) => (
          <div
            key={idx}
            className="flex items-center gap-4 border rounded-xl p-4 hover:shadow-lg transition duration-200"
          >
            <img src={category.icon} alt="job" className="w-12 h-12 object-contain" />
            <div>
              <h2 className="text-lg font-semibold text-gray-900">{category.title}</h2>
              <p className="text-sm text-gray-500">{category.jobs} Jobs Available</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
