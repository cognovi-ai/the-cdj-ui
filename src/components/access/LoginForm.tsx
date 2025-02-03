// TODO: Replace the error message with FlashComponent for global error handling
'use client';

import { Box, Container } from '@mui/material';
import { LoginBody, LoginResponse, endpoints } from '../../hooks/api/accessApi';
import React, { FormEvent, useCallback, useState } from 'react';
import Button from '../../components/atoms/Button';
import Checkbox from '../../components/atoms/Checkbox';
import Cookies from 'js-cookie';
import Input from '../../components/atoms/Input';
import Link from '../../components/atoms/Link';
import Text from '../../components/atoms/Text';
import { useAccess } from '../../hooks/useAccess';
import { useJournal } from '../../contexts/useJournal';
import { useRouter } from 'next/navigation';

/**
 * LoginForm Component
 * Handles user authentication by capturing email, password, and optional remember me preference.
 * @returns The login form UI for user sign-in.
 */
const LoginForm: React.FC = () => {
  const router = useRouter();
  const { request } = useAccess();
  const { setJournalId, setJournalTitle } = useJournal();
  const [formData, setFormData] = useState<LoginBody>({ email: '', password: '', remember: false });
  const [error, setError] = useState<string | null>(null);

  /**
 * Handles form input changes.
 * Updates the formData state based on the input field's name and value.
 * Supports both text inputs and checkboxes.
 * @param  e - The change event triggered by the input field.
 */
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  }, []);

  /**
 * Handles form submission for user login.
 * Prevents default form submission, sends login request, and handles authentication token management.
 * On success, stores the token in cookies (if 'remember me' is selected) and redirects the user.
 * @param e - The form submission event.
 * @returns A promise that resolves when the login process is complete.
 */
  const handleSubmit = useCallback(async (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      const response: LoginResponse = await request(endpoints.login(formData));

      if (response?.journalId) setJournalId(response.journalId);
      if (response?.journalTitle) setJournalTitle(response.journalTitle);

      if (response?.token) {
        Cookies.set('authToken', response.token, {
          ...(formData.remember ? { expires: 30 } : {}),
          path: '/',
          secure: true,
          sameSite: 'Strict',
        });
      }

      router.push('/index');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred.');
    }
  }, [formData, request, setJournalId, setJournalTitle, router]);

  return (
    <Container
      maxWidth="sm"
      sx={{
        p: 4,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          width: '100%',
          p: 4,
          backgroundColor: '#1a1a1a',
          borderRadius: '8px',
          textAlign: 'center',
        }}
      >
        <Text variant="h4" sx={{ fontWeight: 'bold', mb: 2 }} align="center" color="textPrimary">
          Sign In
        </Text>

        <form onSubmit={handleSubmit}>
          <Box display="flex" flexDirection="column" gap={2} width="100%">
            <Input
              fullWidth
              label="Email"
              name="email"
              id="email"
              onChange={handleChange}
              required
              value={formData.email}
              aria-label="email"
            />

            <Input
              fullWidth
              label="Password"
              name="password"
              id="password"
              onChange={handleChange}
              required
              type="password"
              value={formData.password}
              hideInput
            />

            <Checkbox
              label="Remember me"
              name="remember"
              checked={formData.remember}
              onChange={handleChange}
              color="primary"
            />
            {error && (
              <Text color="error" variant="body2">
                {error}
              </Text>
            )}
            <Button fullWidth label="Sign In" size="large" type="submit" sx={{ textTransform: 'none' }} />
          </Box>
        </form>

        <Box mt={2} display="flex" justifyContent="space-between" alignItems="center" flexWrap="wrap" gap={2}>
          <Link color="primary" href="/forgot-password" variant="body2">Forgot password?</Link>
          <Text variant="body2">
            Don't have an account?{' '}
            <Link color="primary" href="/register" underline="always" variant="body2">
              Sign Up
            </Link>
          </Text>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginForm;