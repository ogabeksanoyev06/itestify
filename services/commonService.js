import api from '~/services/api';

export const commonService = {
   districts: (region_id) => api.get(`common/districts/?region_id=${region_id}`),
   regions: (data) => api.get(`common/regions/`, data),
   schools: (district_id) => api.get(`common/schools/?district_id=${district_id}`),
   statistics: (data) => api.get(`common/statistics/`, data)
};
