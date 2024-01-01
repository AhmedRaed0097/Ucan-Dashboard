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
        joinType: null,
        photo: null,
      },
      professionalData: {
        qualification: null,
        yearExperience: '',
        class: null,
        category: null,
        professionalTitle: null,
        biography: '',
      },
      consultantData: {
        duration: null,
        bookType: null,
        freeConsultation: null,
        sessionPrice: '',
        ucanPercentage: '',
        maxDuration: null,
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

    resetForm() {
      this.form = {
        personalData: {
          name: '',
          email: '',
          countryCode: null,
          phone: '',
          gender: null,
          password: '',
          joinType: null,
          photo: null,
        },
        professionalData: {
          qualification: null,
          yearExperience: '',
          class: null,
          category: null,
          professionalTitle: null,
          biography: '',
        },
        consultantData: {
          duration: null,
          bookType: null,
          freeConsultation: null,
          sessionPrice: '',
          ucanPercentage: '',
          maxDuration: null,
        },
      };
    },
  },
});
