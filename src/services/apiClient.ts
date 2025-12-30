import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
  timeout: 5000,
});

// Response Interceptor
apiClient.interceptors.response.use(
  (response) => {
    // Can transform the response here before it reaches your component
    return response;
  },
  (error) => {
    // Global error handling (e.g., logging to a service or alerting the user)
    console.error('API Error:', error.response?.status || error.message);
    return Promise.reject(error);
  }
);

export default apiClient;