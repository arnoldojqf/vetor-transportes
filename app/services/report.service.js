import { fetchWrapper } from 'ba-app-helpers';

const baseUrl = 'http://ec2-18-134-129-75.eu-west-2.compute.amazonaws.com:4000/reports';

export const reportsService = {
  getLogisticsAnalitico,
};

async function getLogisticsAnalitico() {
  return await fetchWrapper.get(`${baseUrl}/logistics-analitico`);
}
