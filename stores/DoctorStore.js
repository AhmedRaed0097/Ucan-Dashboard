import { defineStore } from 'pinia';
import { useRuntimeConfig } from '#app';
import { useAuthStore } from '~~/stores/AuthStore';

export const useDoctorStore = defineStore('doctor', {
  state: () => ({
    doctorData: {},
    doctors: {},
    form: {
      personalData: {
        name: '',
        email: '',
        countryCode: null,
        phone: '',
        gender: null,
        password: '',
        passwordConfirmation: '',
        doctorType: null,
        avatar: null,
      },
      professionalData: {
        qualificationId: null,
        expYears: null,
        subCategoryId: null,
        categoryId: null,
        jobTitleId: null,
        bio: null,
      },
      consultantData: {
        bookingPeriod: null,
        bookingType: null,
        freeConsultation: null,
        periodPrice: '',
        maximumBookingPeriod: null,
      },
    },
    loading: false,
    serverErrors: {},
    responseData: null,
  }),
  actions: {
    async fetch() {
      const authStore = useAuthStore();
      this.loading = true;
      const { data: response, error } = await useFetch(
        `${useRuntimeConfig().public.baseUrl}/doctors`,
        {
          method: 'GET',
          headers: authStore.auth.headers,
        }
      );
      this.loading = false;
      if (!error.value) {
        this.responseData = response.value;
        this.doctors = response.value.data;
      } else {
        this.responseData = {
          success: error.value.data.success,
          message: error.value.data.message,
        };
        this.serverErrors = error.value.data;
      }
      setTimeout(() => {
        this.responseData = null;
      }, 3000);
    },
    async store() {
      const authStore = useAuthStore();
      this.loading = true;
      const formData = new FormData();
      for (const key in this.form) {
        for (const nestedKey in this.form[key]) {
          formData.append(nestedKey, this.form[key][nestedKey]);
        }
      }

      const { data: response, error } = await useFetch(
        `${useRuntimeConfig().public.baseUrl}/doctors`,
        {
          method: 'POST',
          headers: authStore.auth.headers,
          body: formData,
        }
      );
      this.loading = false;
      if (!error.value) {
        this.doctors = response.value.data;
      } else {
        this.serverErrors = error.value.data;
      }
    },

    resetForm() {
      this.form = {
        personalData: {
          name: '',
          email: '',
          countryCode: null,
          phone: '',
          gender: null,
          password: '',
          passwordConfirmation: '',
          doctorType: null, //x
          avatar: null,
        },
        professionalData: {
          qualificationId: null,
          expYears: '',
          subCategoryId: null,
          categoryId: null,
          jobTitleId: null,
          bio: '',
        },
        consultantData: {
          bookingPeriod: null,
          bookingType: null,
          freeConsultation: null,
          periodPrice: '',
          maximumBookingPeriod: null,
        },
      };
    },
  },
});
