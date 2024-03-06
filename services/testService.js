import api from '~/services/api';

export const testService = {
   sciences: (data) => api.get(`tests/sciences/`, data),
   specialists: (data) => api.get('tests/specialists/', data),
   subjects: (science_id) => api.get(`tests/subjects/?science_id=${science_id}`),
   classes: (data) => api.get('tests/classes/', data),
   testTypes: (payload) => {
      const url = payload ? `tests/test-types/?category_type=${payload}` : `tests/test-types/`;
      return api.get(url);
   },
   testHistory: (data) => api.get('tests/test-history/', data),
   examTests: (data) => api.get('tests/exam-tests/', data),
   researches: (data) => api.get('tests/researches/', data),
   researchesId: (research_id) => api.get(`tests/researches/${research_id}/`),
   specifications: (data) => api.get('tests/researches/specifications', data)
};
