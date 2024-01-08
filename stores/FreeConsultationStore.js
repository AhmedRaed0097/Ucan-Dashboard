import { defineStore } from 'pinia';
import { useRuntimeConfig } from '#app';
import { useAuthStore } from '~~/stores/AuthStore';

export const useFreeConsultationStore = defineStore('freeConsultation', {
  state: () => ({
    freeConsultations: [],

    loading: false,
    serverErrors: {},
    responseData: null,
  }),
  actions: {
    async getFreeConsultation() {
      const authStore = useAuthStore();
      this.loading = true;
      const { data: response, error } = await useFetch(
        `${
          useRuntimeConfig().public.baseUrl
        }/free-consultation  `,
        {
          method: 'GET',
          headers: authStore.auth.headers,
        }
      );
      this.loading = false;
      if (!error.value) {
        this.freeConsultations = response.value.data;
      } else {
        this.serverErrors = error.value.data;
      }
    },
   
  },
});
