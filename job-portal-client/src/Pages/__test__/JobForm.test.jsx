import { render, screen } from '@testing-library/react';
import JobForm from '../JobForm';

test('renders job form inputs and button', () => {
  render(<JobForm />);

  // Check if input fields are rendered
  expect(screen.getByPlaceholderText(/Job Title/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/Company/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/Location/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/Salary/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/Job Description/i)).toBeInTheDocument();

  // Check if submit button is rendered
  expect(screen.getByText(/Add Job/i)).toBeInTheDocument();
});
