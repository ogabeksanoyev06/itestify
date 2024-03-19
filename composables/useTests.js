import { ref } from 'vue';
import { useRouter } from 'vue-router';

export const useTests = () => {
   const api = useApi();
   const router = useRouter();
   const loading = ref(false);
   const boughtLoading = ref(false);
   const { $toast } = useNuxtApp();
   const sciences = ref([]);
   const subjects = ref([]);
   const classes = ref([]);
   const testTypes = ref([]);
   const testHistory = ref([]);
   const examTests = ref([]);
   const researches = ref([]);

   const getSciences = async (data) => {
      try {
         const response = await api.get('tests/sciences/', { params: data });
         sciences.value = response;
      } catch (error) {
         console.error('Error geting sciences:', error);
      }
   };

   const getSubjects = async (science_id) => {
      try {
         const response = await api.get(`tests/subjects/?science_id=${science_id}`);
         subjects.value = response;
      } catch (error) {
         console.error('Error geting subjects:', error);
      }
   };

   const getClasses = async (data) => {
      try {
         const response = await api.get('tests/classes/', data);
         classes.value = response;
      } catch (error) {
         console.error('Error geting classes:', error);
      }
   };

   const getTestTypes = async (payload) => {
      loading.value = true;
      try {
         const url = payload ? `tests/test-types/?category_type=${payload}` : `tests/test-types/`;
         const response = await api.get(url);
         testTypes.value = response;
      } catch (error) {
         console.error('Error geting test types:', error);
      } finally {
         loading.value = false;
      }
   };

   const getTestHistory = async (data) => {
      loading.value = true;
      try {
         const response = await api.get('tests/tests-history/', { params: data });
         testHistory.value = response;
      } catch (error) {
         console.error('Error geting test history:', error);
      } finally {
         loading.value = false;
      }
   };

   const getTestHistoryById = async (data) => {
      try {
         const response = await api.get(`tests/tests-history/${data.id}/?type=${data.type}`);
         testHistory.value = response;
      } catch (error) {
         console.error('Error geting test history by ID:', error);
      }
   };

   const getResearches = async (data) => {
      try {
         const response = await api.get('tests/researches/', { params: data });
         researches.value = response;
      } catch (error) {
         console.error('Error geting researches:', error);
      }
   };

   const getResearchById = async (research_id) => {
      try {
         const response = await api.get(`tests/researches/${research_id}/`);
         researches.value = response;
      } catch (error) {
         console.error('Error geting research by ID:', error);
      }
   };

   const buyExams = async (test_id, type) => {
      boughtLoading.value = true;
      try {
         const response = await api.post('tests/buy-exams/', {
            test_type: test_id
         });
         if (response.code === 200) {
            $toast.success(response.message);
            getTestTypes(type);
         }
      } catch (error) {
         error.response.data.message.non_field_errors?.forEach((errMsg) => {
            $toast.error(errMsg);
         });
         $toast.error(error.response.data.message);
      } finally {
         boughtLoading.value = false;
      }
   };

   const startSchoolTest = async (paramtersModel) => {
      loading.value = true;
      try {
         const response = await api.post('tests/school-tests/start/', paramtersModel);
         if (parseInt(response.code) === 500) {
            $toast.error(response.message);
         } else {
            router.push({ path: '/test' });
         }
      } catch (error) {
         $toast.error(error.response.data.message);
      } finally {
         loading.value = false;
      }
   };

   const startSciencesTest = async (paramtersModel) => {
      loading.value = true;
      try {
         const response = await api.post('tests/sciences-tests/start/', paramtersModel);
         if (parseInt(response.code) === 500) {
            $toast.error(response.message);
         } else {
            router.push({ path: '/test' });
         }
      } catch (error) {
         $toast.error(error.response.data.message);
         console.log(error.response);
      } finally {
         loading.value = false;
      }
   };

   const startResearchesTest = async (paramtersModel) => {
      loading.value = true;
      try {
         const response = await api.post(`tests/researches/test/start/`, paramtersModel);
         if (parseInt(response.code) === 500) {
            $toast.error(response.message);
         } else {
            router.push({ path: '/test' });
         }
      } catch (error) {
         $toast.error(error.response.data.message);
      } finally {
         loading.value = false;
      }
   };

   return {
      sciences,
      subjects,
      classes,
      testTypes,
      testHistory,
      examTests,
      researches,
      loading,
      boughtLoading,
      getSciences,
      getSubjects,
      getClasses,
      getTestTypes,
      getTestHistory,
      getTestHistoryById,
      getResearches,
      getResearchById,
      buyExams,
      startSchoolTest,
      startSciencesTest,
      startResearchesTest
   };
};
