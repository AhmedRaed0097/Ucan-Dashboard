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
        joinType: null, //x
        avatar: null,
      },
      professionalData: {
        qualificationId: null,
        expYears: '',
        subcategoryId: null,
        categoryId: null,
        jobTitleId: null,
        bio: '',
      },
      consultantData: {
        bookingPeriod: null,
        bookingType: null,
        freeConsultation: null,
        periodPrice: '',
        ucanPercentage: '', //x
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
        this.doctors = response.value.data;
      } else {
        this.serverErrors = error.value.data;
      }
    },
    async create() {
      const authStore = useAuthStore();
      this.loading = true;
      const formData = new FormData();
      for (const key in this.form) {
        formData.append(key, this.form[key]);
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
          joinType: null, //x
          avatar: null,
        },
        professionalData: {
          qualificationId: null,
          expYears: '',
          subcategoryId: null,
          categoryId: null,
          jobTitleId: null,
          bio: '',
        },
        consultantData: {
          bookingPeriod: null,
          bookingType: null,
          freeConsultation: null,
          periodPrice: '',
          ucanPercentage: '', //x
          maximumBookingPeriod: null,
        },
      };
    },
  },
});
