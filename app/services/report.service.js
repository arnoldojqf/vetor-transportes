import { BehaviorSubject } from 'rxjs';

import config from 'config';
import { fetchWrapper, history } from 'ba-app-helpers';

const baseUrl = `${config.apiUrl}/reports`;

export const reportsService = {
    getLogisticsAnalitico,
};

function getLogisticsAnalitico() {
    return fetchWrapper.get(`${baseUrl}/logistics-analitico`);
}