import { createInstance } from './api-instance';
import { IAuthBody } from './types';

export const signUp = async (data: IAuthBody) => {
  try {
    const response = await createInstance({
      url: 'auth/sign-up',
      method: 'post',
      data,
    });

    return response;
  } catch (error) {
    console.log('error', error);
  }
};

export const signIn = async (data: IAuthBody) => {
  try {
    const response = await createInstance({
      url: 'auth/sign-in',
      method: 'post',
      data,
    });

    return response;
  } catch (error) {
    console.log('error', error);
  }
};

export const signOut = async () => {
  try {
    const response = await createInstance({
      url: 'auth/sign-out',
      method: 'post',
    });

    return response;
  } catch (error) {
    console.log('error', error);
  }
};

export const fetchSessionInfo = async () => {
  try {
    const response = await createInstance({
      url: 'auth/session',
      method: 'get',
    });

    return response;
  } catch (error) {
    console.log('error', error);
  }
};
