import { useStorage } from '@vueuse/core';

export const access_token = useStorage('access_token', () => null);
export const refresh_token = useStorage('refresh_token', () => null);
