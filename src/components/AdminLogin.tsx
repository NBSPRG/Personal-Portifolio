import React, { useState } from 'react';
import { supabase } from '../lib/supabase';

interface AdminLoginProps {
  onLogin: () => void;
}

const AdminLogin: React.FC<AdminLoginProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password
      });

      if (error) throw error;
      onLogin();
    } catch (err) {
      setError('Invalid login credentials');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Admin Login</h2>
      
      {error && (
        <div className="mb-4 p-3 bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-300 rounded">
          {error}
        </div>
      )}

      <form onSubmit={handleLogin}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 dark:text-gray-300 mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-theme text-white py-2 px-4 rounded hover:opacity-90 transition-opacity disabled:opacity-50"
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;