import axios, { AxiosRequestConfig } from 'axios';
import { BASE_URL, HeadersType } from '~constants/config';
import errorInterceptor from '../interceptors/error';
import requestInterceptor from '../interceptors/request';
import responseInterceptor from '../interceptors/response';
import { deepClone, getTrue } from '~helpers';

const mainInstance = axios.create({
  baseURL: BASE_URL,
});

mainInstance.interceptors.response.use(responseInterceptor, errorInterceptor);
mainInstance.interceptors.request.use(requestInterceptor, errorInterceptor);

/**
 *
 * @param url
 * @param token
 * @param contentType
 * @returns
 */
export default function (url: string, token?: string, contentType: 'default' | 'urlEncoded' | 'form' = 'default') {
  const mainHeaders = {
    ...HeadersType[contentType],
    ...(getTrue(token) && { Authorization: `Bearer ${token}` }),
  };

  return {
    delete: (options?: AxiosRequestConfig) => {
      return mainInstance.delete(url, {
        headers: {
          ...(options && deepClone(options.headers)),
          ...mainHeaders,
        },
        ...deepClone(options),
      });
    },

    get: (options?: AxiosRequestConfig) => {
      return mainInstance.get(url, {
        headers: {
          ...(options && deepClone(options.headers)),
          ...mainHeaders,
        },
        ...deepClone(options),
      });
    },

    post: (body: any, options?: AxiosRequestConfig) => {
      return mainInstance.post(url, body, {
        headers: {
          ...(options && deepClone(options.headers)),
          ...mainHeaders,
        },
        ...deepClone(options),
      });
    },

    postForm: (body: any, options?: AxiosRequestConfig) => {
      return mainInstance.postForm(url, body, {
        headers: {
          ...(options && deepClone(options.headers)),
          ...mainHeaders,
        },
        ...deepClone(options),
      });
    },

    put: (body: any, options?: AxiosRequestConfig) => {
      return mainInstance.put(url, body, {
        headers: {
          ...(options && deepClone(options.headers)),
          ...mainHeaders,
        },
        ...deepClone(options),
      });
    },

    putForm: (body: any, options?: AxiosRequestConfig) => {
      return mainInstance.putForm(url, body, {
        headers: {
          ...(options && deepClone(options.headers)),
          ...mainHeaders,
        },
        ...deepClone(options),
      });
    },
  };
}
