import { defineStore } from 'pinia';
import { useRuntimeConfig } from '#app';
import { useAuthStore } from '~~/stores/AuthStore';

export const useSubCategoryStore = defineStore('subCategory', {
  state: () => ({
    subCategoryData: {},

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
        }/sub-categories/index?page=${payload}&per_page=5`,
        {
          method: 'GET',
          headers: authStore.auth.headers,
        }
      );
      this.loading = false;
      if (!error.value) {
        this.subCategoryData = response.value.data;
      } else {
        this.serverErrors = error.value.data;
      }
    },
  },
});
