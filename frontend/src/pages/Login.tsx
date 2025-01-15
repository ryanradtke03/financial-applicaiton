import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { Button, Input } from '../components/ui';

// Define form input types
type LoginFormInputs = {
  email: string;
  password: string;
};

// Validation schema using Yup
const loginSchema = yup.object({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

const Login = () => {
  const [loading, setLoading] = useState(false);

  // Initialize react-hook-form with validation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: yupResolver(loginSchema),
  });

  // Submit handler
  const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
    setLoading(true);
    console.log('Submitting:', data); // Replace with API call
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500)); // Mock delay
      alert(`Logged in with: ${data.email}`);
    } catch (error) {
      console.error('Login failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
        <h1 className="text-brand mb-6 text-center text-2xl font-bold">
          Login
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Input
            label="Email"
            type="email"
            placeholder="Enter your email"
            {...register('email')}
            error={errors.email?.message}
          />
          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            {...register('password')}
            error={errors.password?.message}
          />
          <Button size="md" variant="primary" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </Button>
        </form>
        <p className="mt-4 text-center text-sm">
          Don't have an account?{' '}
          <a href="/register" className="text-brand hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
