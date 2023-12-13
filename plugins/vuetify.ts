import { createVuetify } from 'vuetify';
import '@mdi/font/css/materialdesignicons.css';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import PerfectScrollbar from 'vue3-perfect-scrollbar';
import VueApexCharts from 'vue3-apexcharts';
import VueTablerIcons from 'vue-tabler-icons';
import '@/assets/scss/style.scss';
import { LightTheme } from '@/theme/LightTheme';
import { DarkTheme } from '@/theme/DarkTheme';

import { ar } from 'vuetify/locale';

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      themes: {
        light: LightTheme,
        dark: DarkTheme,
      },
    },
    locale: {
      locale: 'ar', // Change to 'ar'
      messages: { ar },
    },
    defaults: {
      VBtn: {
        color: 'primary',
      },
      VCard: {
        rounded: 'lg',
      },
      VTextField: {
        color: 'primary',
        density: 'compact',
      },
      VTextarea: {
        color: 'primary',
        density: 'compact',
      },
      VFileInput: {
        color: 'primary',
        density: 'compact',
      },
      VSelect: {
        color: 'primary',
        density: 'compact',
        itemTitle: 'label',
        itemValue: 'value',
      },
    },
  });
  nuxtApp.vueApp.use(vuetify);
  nuxtApp.vueApp.use(PerfectScrollbar);
  nuxtApp.vueApp.use(VueApexCharts);
  nuxtApp.vueApp.use(VueTablerIcons);
});
