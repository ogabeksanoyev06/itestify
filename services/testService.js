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
   testHistory: (data) => api.get('tests/tests-history/', data),
   testHistoryId: (data) => api.get(`tests/tests-history/${data.id}/?type=${data.type}`),

   examTests: (data) => api.get('tests/exam-tests/', data),

   researches: (data) => api.get('tests/researches/', data),

   researchesId: (research_id) => api.get(`tests/researches/${research_id}/`),

   specifications: (data) => api.get('tests/researches/specifications', data),

   buyExams: (data) => api.post('tests/buy-exams/', data),
   activeTests: (data) => api.get(`tests/active-tests/`, data),
   scienseTestDone: (data) => api.post('tests/science-test/done/', data),
   getTestLiveTime: (data) => api.post('tests/get-test-live-time/', data),

   schoolTest: (data) => api.post('tests/school-tests/start/', data),
   sciencesTest: (data) => api.post('tests/sciences-tests/start/', data)
};
