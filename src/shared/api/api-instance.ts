import axios, { AxiosError, AxiosRequestConfig } from "axios";

export const apiInstance = axios.create({
  baseURL: process.env.NODE_ENV == 'development' ? "http://localhost:4200" : 'https://nestjs-crm.onrender.com',
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export const createInstance = <T>(
  config: AxiosRequestConfig,
  options?: AxiosRequestConfig,
): Promise<T> => {
  return (
    apiInstance({
      ...config,
      ...options,
    })
      .then((response) => response.data)

      // Handle array error messages: ['email-exists' , 'must-be-greater-8']
      .catch((error) => {
        if (error.response && error.response.data) {
          if (error.response.data.message) {
            const { message } = error.response.data;

            // If the error message is an array, return it
            if (Array.isArray(message)) {
              return Promise.reject(message);
            }

            // If it's a single string, wrap it in an array and return
            return Promise.reject([message]);
          } else if (error.response.data.type) {
            const { type } = error.response.data;

            // If the error type is an array, return it
            if (Array.isArray(type)) {
              return Promise.reject(type);
            }

            // If it's a single string, wrap it in an array and return
            return Promise.reject([type]);
          }
        }

        // If there's no specific error message, reject with a generic error
        return Promise.reject(["An error occurred"]);
      })
  );
};

export type BodyType<Data> = Data;

export type ErrorType<Error> = AxiosError<Error>;
