import { defineStore } from 'pinia';
import { useRuntimeConfig } from '#app';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    loading: false,
    serverErrors: [],
    signUp: {
      id: '',
      countries: null,
    },
    signInData: {
      id: '',
    },
    auth: {
      user: null,
      isLoggedIn: false,
      headers: {
        accept: '*/*',
      },
    },
  }),

  actions: {
    async registration(payload) {
      const formData = new FormData();
      for (const key in payload) {
        if (key !== 'countryId') {
          formData.append(key, payload[key]);
        }
      }
      formData.append('countryId', payload.countryId.id);

      this.loading = true;
      const { data: response, error } = await useFetch(
        `${useRuntimeConfig().public.baseUrl}/register`,
        {
          method: 'POST',
          body: formData,
        }
      );

      this.responseData = response.value || error.value.data;
      setTimeout(() => {
        this.responseData = null;
        this.loading = false;
      }, 3000);

      if (!error.value) {
        navigateTo('/auth/signin');
      } else {
        this.loading = false;
        this.serverErrors = error.value.data.errors;
        return false;
      }

      this.loading = false;
    },
    async signIn(payload) {
      const formData = new FormData();
      this.loading = true;

      for (const key in payload) {
        formData.append(key, payload[key]);
      }
      const { data: response, error } = await useFetch(
        `${useRuntimeConfig().public.baseUrl}/login`,

        {
          method: 'POST',
          body: formData,
        }
      );
      this.loading = false;
      this.responseData = response.value || error.value.data;
      setTimeout(() => {
        this.responseData = null;
      }, 3000);

      if (!error.value) {
        if (response.value.statusCode === 301) {
          this.statuses = response.value;
        } else {
          const { setValue } = useLocalStorage();

          setValue('token', response.value.data.token); // Store Token in LocalStorage
          this.setHeaders(response.value.data.token);
          await this.getProfile();
          navigateTo('/');
        }
      } else {
        this.serverErrors = error.value.data.errors;
      }
    },
    async getProfile() {
      const { checkStatusCode } = useCheckRequestStatusCode();

      if (this.auth.headers.Authorization) {
        const { getValue } = useLocalStorage();

        const route = useRoute();
        this.loading = true;
        const waitingForRespond = getValue('waitingForRespond');
        const { data: response, error } = await useFetch(
          `${useRuntimeConfig().public.baseUrl}/profile`,
          {
            method: 'GET',
            headers: this.auth.headers,
          }
        );
        this.loading = false;
        if (!error.value) {
          this.auth.isLoggedIn = true;
          this.auth.user = response.value.data;
          if (!this.sessionTimer) {
            this.sessionTimer = response.value.data.sessionTimer;
          }

          if (
            waitingForRespond &&
            !response.value.data.sessionTimer &&
            (!this.pushNotificationData ||
              (this.pushNotificationData &&
                this.pushNotificationData.status === 'pending'))
          ) {
            this.getDirectSessionRequestNotificationData();
          }

          if (route.name === 'auth-signin') {
            return navigateTo({ path: '/' });
          }
        } else {
          if (error.value.data && error.value.data.status_code) {
            checkStatusCode(error.value.data.status_code);
          }
        }
      }
    },
    async signOut() {
      const sessionStore = useSessionStore();
      const { checkStatusCode } = useCheckRequestStatusCode();
      if (this.auth.headers.Authorization) {
        const { error } = await useFetch(
          `${useRuntimeConfig().public.baseUrl}/logout`,

          {
            method: 'POST',
            headers: this.auth.headers,
          }
        );
        if (!error.value) {
          const { removeValue } = useLocalStorage();
          removeValue('token');
          sessionStore.currentSessionId = null;
          this.auth.isLoggedIn = false;
          this.auth.headers = {};
          this.sessionTimer = null;
          setTimeout(() => {
            navigateTo({ path: '/' });
          }, 2000);
        } else {
          checkStatusCode(error.value.data.status_code);
        }
      }
    },
  },
});
