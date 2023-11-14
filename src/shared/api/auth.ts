import { createInstance } from './api-instance';
import { IAuthBody } from './types';

export const signUp = async (data: IAuthBody) => {
  const response = await createInstance({
    url: 'auth/sign-up',
    method: 'post',
    data,
  });

  return response;
};

export const signIn = async (data: IAuthBody) => {
  const response = await createInstance({
    url: 'auth/sign-in',
    method: 'post',
    data,
  });

  return response;
};

export const signOut = async () => {
  const response = await createInstance({
    url: 'auth/sign-out',
    method: 'post',
  });

  return response;
};

export const fetchSessionInfo = async () => {
  const response = await createInstance({
    url: 'auth/session',
    method: 'get',
  });

  return response;
};
