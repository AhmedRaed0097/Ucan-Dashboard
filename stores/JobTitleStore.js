import { defineStore } from 'pinia';
import { useRuntimeConfig } from '#app';
import { useAuthStore } from '~~/stores/AuthStore';

export const useJobTitleStore = defineStore('jobTitle', {
  state: () => ({
    jobTitles: [],

    loading: false,
    serverErrors: {},
    responseData: null,
  }),
  actions: {
    async fetch() {
      const authStore = useAuthStore();
      this.loading = true;
      const { data: response, error } = await useFetch(
        `${
          useRuntimeConfig().public.baseUrl
        }/job-titles`,
        {
          method: 'GET',
          headers: authStore.auth.headers,
        }
      );
      this.loading = false;
      if (!error.value) {
        this.jobTitles = response.value.data;
      } else {
        this.serverErrors = error.value.data;
      }
    },
  },
});
