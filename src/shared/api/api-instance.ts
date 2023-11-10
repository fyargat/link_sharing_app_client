import axios, { AxiosError, AxiosRequestConfig } from 'axios';

export const apiInstance = axios.create({
  baseURL: 'http://localhost:3001',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const createInstance = async (
  config: AxiosRequestConfig,
  options?: AxiosRequestConfig,
) => {
  const data = await apiInstance({
    ...config,
    ...options,
  });

  console.log('data', data);

  return data;
};

export type BodyType<Data> = Data;

export type ErrorType<Error> = AxiosError<Error>;
