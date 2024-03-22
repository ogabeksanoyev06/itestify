import { u as useApi } from './useApi-BcaOE1C1.mjs';
import { u as useCookie, b as useRouter, g as useNuxtApp } from './server.mjs';
import { ref, computed } from 'vue';

const useAuth = () => {
  const api = useApi();
  const { $toast } = useNuxtApp();
  const accessToken = useCookie("access_token");
  const refreshToken = useCookie("refresh_token");
  const router = useRouter();
  const loading = ref(false);
  const login = async (form) => {
    loading.value = true;
    try {
      const response = await api.post("users/login/", form);
      accessToken.value = response.access;
      refreshToken.value = response.refresh;
      router.push("/");
      $toast.success("Tizimga muvaffaqiyatli kirdingiz!");
    } catch (error) {
      $toast.error(error.response.data.detail || "Login xatoligi");
    } finally {
      loading.value = false;
    }
  };
  const register = async (user, selectedUserType) => {
    var _a, _b;
    loading.value = true;
    try {
      const response = await api.post("users/register/", {
        phone: "998" + user.phone,
        first_name: user.firstname,
        last_name: user.lastname,
        username: user.username,
        password: user.password,
        type: selectedUserType
      });
      if (response && parseInt(response.code) === 201) {
        router.push("/auth/login");
        $toast.success("Ro'yxatdan muvaffaqiyatli o'tdingiz!");
      }
    } catch (error) {
      $toast.error(((_b = (_a = error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || "Ro\u2018yxatdan o\u2018tish xatosi");
    } finally {
      loading.value = false;
    }
  };
  const resetPassword = async (form) => {
    loading.value = true;
    try {
      const response = await api.post("users/reset-password/", form);
      if (response.code === 200) {
        $toast.success("Parol muvaffaqiyatli o'zgartirildi");
      }
    } catch (error) {
      $toast.error(error.response.data.detail || "Xatolik yuz berdi");
    } finally {
      loading.value = false;
    }
  };
  const isAuthenticated = computed(() => {
    return !!accessToken.value && !!refreshToken.value;
  });
  const logout = () => {
    accessToken.value = null;
    refreshToken.value = null;
    router.push("/");
    $toast.success("Tizimdan chiqdingiz");
  };
  return { login, register, resetPassword, logout, isAuthenticated };
};

export { useAuth as u };
//# sourceMappingURL=useAuth-CsntCOQI.mjs.map
