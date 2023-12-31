import { defineStore } from 'pinia';
import { useRuntimeConfig } from '#app';
import { useAuthStore } from '~~/stores/AuthStore';

export const useCategoryStore = defineStore('category', {
  state: () => ({
    categories: [],
    subCategories: [],
    loading: false,
    serverErrors: {},
    responseData: null,
  }),
  actions: {
    async getCategories() {
      const authStore = useAuthStore();
      this.loading = true;
      const { data: response, error } = await useFetch(
        `${
          useRuntimeConfig().public.baseUrl
        }/categories`,
        {
          method: 'GET',
          headers: authStore.auth.headers,
        }
      );
      this.loading = false;
      if (!error.value) {
        this.categories = response.value.data;
      } else {
        this.serverErrors = error.value.data;
      }
    },
    async getSubCategories() {
      const authStore = useAuthStore();
      this.loading = true;
      const { data: response, error } = await useFetch(
        `${useRuntimeConfig().public.baseUrl}/sub-categories`,
        {
          method: 'GET',
          headers: authStore.auth.headers,
        }
      );
      this.loading = false;
      if (!error.value) {
        this.subCategories = response.value.data;
      } else {
        this.serverErrors = error.value.data;
      }
    },
  },
});
