import axios from 'axios';

const DEFAULT_CONFIG = {
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/vnd.github.v3+json',
    Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
  },
};

const axiosInstance = axios.create(DEFAULT_CONFIG);

axiosInstance.interceptors.request.use(
  config => config,
  () => ({ message: '런타임 에러가 발생했습니다.' })
);

axiosInstance.interceptors.response.use(
  config => config,
  error => error.response
);

const issueAPI = {
  async getIssues(queryParams = {}) {
    axiosInstance.defaults.params = queryParams;
    const res = await axiosInstance.get('/issues');
    return res;
  },

  async getIssue(issueNumber, queryParams = {}) {
    axiosInstance.defaults.params = queryParams;
    const res = await axiosInstance.get(`/issues/${issueNumber}`);
    return res;
  },
};

export default issueAPI;
