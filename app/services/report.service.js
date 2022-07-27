import { fetchWrapper } from 'ba-app-helpers';

const baseUrl = `${process.env.API_HOST}:${process.env.API_PORT}/reports`;

export const reportsService = {
  getLogisticsAnalitico,
};

async function getLogisticsAnalitico() {
  return await fetchWrapper.get(`${baseUrl}/logistics-analitico`);
}
