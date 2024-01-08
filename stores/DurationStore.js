import { defineStore } from 'pinia';
import { useRuntimeConfig } from '#app';
import { useAuthStore } from '~~/stores/AuthStore';

export const useDurationStore = defineStore('duration', {
  state: () => ({
    bookingPeriod: [],
    maxBookingPeriod: [],
    bookingType: [],

    loading: false,
    serverErrors: {},
    responseData: null,
  }),
  actions: {
    async getBookingPeriod() {
      const authStore = useAuthStore();
      this.loading = true;
      const { data: response, error } = await useFetch(
        `${
          useRuntimeConfig().public.baseUrl
        }/booking-period  `,
        {
          method: 'GET',
          headers: authStore.auth.headers,
        }
      );
      this.loading = false;
      if (!error.value) {
        this.bookingPeriod = response.value.data;
      } else {
        this.serverErrors = error.value.data;
      }
    },
    async getMaxBookingPeriod() {
      const authStore = useAuthStore();
      this.loading = true;
      const { data: response, error } = await useFetch(
        `${
          useRuntimeConfig().public.baseUrl
        }/maximum-booking-period`,
        {
          method: 'GET',
          headers: authStore.auth.headers,
        }
      );
      this.loading = false;
      if (!error.value) {
        this.maxBookingPeriod = response.value.data;
      } else {
        this.serverErrors = error.value.data;
      }
    },
    async getBookingType() {
      const authStore = useAuthStore();
      this.loading = true;
      const { data: response, error } = await useFetch(
        `${
          useRuntimeConfig().public.baseUrl
        }/booking-type`,
        {
          method: 'GET',
          headers: authStore.auth.headers,
        }
      );
      this.loading = false;
      if (!error.value) {
        this.bookingType = response.value.data;
      } else {
        this.serverErrors = error.value.data;
      }
    },
  },
});
