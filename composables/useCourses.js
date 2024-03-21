import { ref } from 'vue';

export const useCourses = () => {
   const api = useApi();
   const { $toast } = useNuxtApp();

   const loading = ref(false);
   const activeCategory = ref(null);
   const courses = ref([]);
   const categories = ref([]);

   const getCategories = async () => {
      loading.value = true;
      try {
         const response = await api.get('courses/categories/');
         categories.value = response;
      } catch (error) {
         $toast.error(error.response.data.message);
      } finally {
         loading.value = false;
      }
   };

   const getCourses = async (id) => {
      loading.value = true;
      try {
         const response = await api.get(`courses/?cat_id=${id}`);
         courses.value = response;
      } catch (error) {
         $toast.error(error.response.data.message);
      } finally {
         loading.value = false;
      }
   };

   const setCategoryId = () => {
      if (categories.value.length > 0) {
         selectCategory(categories.value[0].id);
      }
   };

   const selectCategory = async (categoryId) => {
      activeCategory.value = categoryId;
      await getCourses(categoryId);
   };

   return { loading, categories, courses, getCategories, getCourses, activeCategory, setCategoryId, selectCategory };
};
