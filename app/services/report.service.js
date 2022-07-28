import { fetchWrapper } from 'ba-app-helpers';
import config from 'config';

const baseUrl = `${config.apiUrl}/reports`;

export const reportsService = {
  getLogisticsAnalitico,
};

async function getLogisticsAnalitico() {
  return await fetchWrapper.get(`${baseUrl}/logistics-analitico`);
}
