import { u as useApi } from './useApi-BcaOE1C1.mjs';
import { ref } from 'vue';

const useCommonData = () => {
  const api = useApi();
  const loading = ref(false);
  const regions = ref([]);
  const districts = ref([]);
  const schools = ref([]);
  const statistics = ref([]);
  const getDistricts = async (regionId) => {
    try {
      const response = await api.get(`common/districts/?region_id=${regionId}`);
      districts.value = response;
    } catch (error) {
      console.log(error);
    }
  };
  const getRegions = async (data) => {
    try {
      const response = await api.get("common/regions/", data);
      regions.value = response;
    } catch (error) {
      console.log(error);
    }
  };
  const getSchools = async (districtId) => {
    try {
      const response = await api.get(`common/schools/?district_id=${districtId}`);
      schools.value = response;
    } catch (error) {
      console.log(error);
    }
  };
  const getStatistics = async (data) => {
    loading.value = true;
    try {
      const response = await api.get("common/statistics/", data);
      statistics.value = response;
    } catch (error) {
      throw error;
    } finally {
      loading.value = false;
    }
  };
  return {
    getDistricts,
    getRegions,
    getSchools,
    getStatistics,
    regions,
    schools,
    districts,
    statistics
  };
};

export { useCommonData as u };
//# sourceMappingURL=useCommonData-DpGNGaik.mjs.map
