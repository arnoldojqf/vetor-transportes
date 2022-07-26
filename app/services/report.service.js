import { BehaviorSubject } from 'rxjs';

import config from 'config';
import { fetchWrapper, history } from 'ba-app-helpers';

const baseUrl = `${config.apiUrl}/reports`;

export const reportsService = {
    getLogisticsAnalitico,
};

async function getLogisticsAnalitico() {
    return await fetchWrapper.get(`${baseUrl}/logistics-analitico`);
}