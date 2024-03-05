import api from '~/services/api';

export const profileService = {
   user: () => api.get(`users/profile/`),
   updateProfile: (data) => api.patch('users/profile/', data),
   districts: (region_id) => api.get(`common/districts/?region_id=${region_id}`),
   regions: () => api.get(`common/regions/`),
   schools: (district_id) => api.get(`common/schools/?district_id=${district_id}`)
};
