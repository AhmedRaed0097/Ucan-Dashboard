import { defineStore } from 'pinia';
import { useRuntimeConfig } from '#app';
import { useAuthStore } from '~~/stores/AuthStore';

export const useJobTitleStore = defineStore('jobTitle', {
  state: () => ({
    jobTitleData: {},

    loading: false,
    serverErrors: {},
    responseData: null,
  }),
  actions: {
    async fetch(payload) {
      const authStore = useAuthStore();
      this.loading = true;
      const { data: response, error } = await useFetch(
        `${
          useRuntimeConfig().public.baseUrl
        }/job-titles/index?page=${payload}&per_page=5`,
        {
          method: 'GET',
          headers: authStore.auth.headers,
        }
      );
      this.loading = false;
      if (!error.value) {
        this.jobTitleData = response.value.data;
      } else {
        this.serverErrors = error.value.data;
      }
    },
  },
});
