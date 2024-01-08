import { defineStore } from 'pinia';
import { useRuntimeConfig } from '#app';
import { useAuthStore } from '~~/stores/AuthStore';

export const useQualificationStore = defineStore('qualification', {
  state: () => ({
    qualifications: [],

    loading: false,
    serverErrors: {},
    responseData: null,
  }),
  actions: {
    async fetch() {
      const authStore = useAuthStore();
      const { data: response, error } = await useFetch(
        `${
          useRuntimeConfig().public.baseUrl
        }/qualifications`,
        {
          method: 'GET',
          headers: authStore.auth.headers,
        }
      );
      if (!error.value) {
        this.qualifications = response.value.data;
      } else {
        this.serverErrors = error.value.data;
      }
    },
  },
});
