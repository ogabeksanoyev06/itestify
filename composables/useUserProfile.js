import { ref } from 'vue';

export const useUserProfile = () => {
   const api = useApi();
   const user = ref({});
   const loading = ref(false);

   const { $toast } = useNuxtApp();

   const userProfile = async () => {
      loading.value = true;
      try {
         const response = await api.get('users/profile/');
         user.value = response;
         user.value.phone = response?.phone?.slice(3);
         user.value.region = response?.region?.id;
         user.value.district = response?.district?.id;
         user.value.school = response?.school?.id;
      } catch (error) {
         console.error(error);
      } finally {
         loading.value = false;
      }
   };

   const updateUserProfile = async () => {
      loading.value = true;
      const formData = new FormData();
      formData.append('first_name', user.value.first_name);
      formData.append('last_name', user.value.last_name);
      if (user.value.username !== null) {
         formData.append('username', user.value.username);
      }
      if (user.value.phone !== null) {
         formData.append('phone', '998' + user.value.phone);
      }
      if (user.value.father_name !== null) {
         formData.append('father_name', user.value.father_name);
      }
      if (user.value.birth_date !== null) {
         formData.append('birth_date', user.value.birth_date);
      }
      if (user.value.email !== null) {
         formData.append('email', user.value.email);
      }
      if (user.value.district !== null) {
         formData.append('district', user.value.district);
      }
      if (user.value.school !== null) {
         formData.append('school', user.value.school);
      }
      if (user.value.photo !== null) {
         formData.append('photo', user.value.photo);
      }
      formData.append('type', user.value.type);
      try {
         const response = await api.patch('users/profile/', formData);
         user.value = response;
         userProfile();
         $toast.success('Profile muvaffaqiyatli o`zgartirildi');
      } catch (error) {
         if (error.response && error.response.data) {
            const errorData = error.response.data;
            Object.keys(errorData).forEach((key) => {
               const errorMessage = `${key}: ${errorData[key].join(', ')}`;
               $toast.error(errorMessage);
            });
         } else if (error.message) {
            $toast.error(error.message);
         } else {
            $toast.error("Aniq xatolik haqida ma'lumot yo'q");
         }
      } finally {
         loading.value = false;
      }
   };

   return {
      user,
      loading,
      userProfile,
      updateUserProfile
   };
};
