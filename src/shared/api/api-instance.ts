import axios, { AxiosError, AxiosRequestConfig } from 'axios';

export const apiInstance = axios.create({
  baseURL: 'http://localhost:3001',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const createInstance = async <T>(
  config: AxiosRequestConfig,
  options?: AxiosRequestConfig,
): Promise<T> => {
  const response = await apiInstance({
    ...config,
    ...options,
  });

  return response.data as T;
};

export type BodyType<Data> = Data;

export type ErrorType<Error> = AxiosError<Error>;
