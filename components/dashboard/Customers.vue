<script setup lang="ts">
import { computed } from 'vue';
import { useTheme } from 'vuetify';
const theme = useTheme();
const primary = theme.current.value.colors.primary;
const lightprimary = theme.current.value.colors.lightprimary;
const chartOptions = computed(() => {
  return {
    labels: ['العملاء الجدد', 'العملاء السابقين'],
    chart: {
      type: 'donut',
      fontFamily: 'inherit',
      foreColor: '#a1aab2',
      toolbar: {
        show: false,
      },
    },
    colors: [primary, lightprimary, '#F9F9FD'],
    plotOptions: {
      pie: {
        startAngle: 0,
        endAngle: 360,
        donut: {
          size: '75%',
          background: 'transparent',
        },
      },
    },
    stroke: {
      show: false,
    },

    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    tooltip: { theme: 'light', fillSeriesColor: false },
  };
});
const Chart = [360, 4000];
</script>
<template>
  <v-card elevation="10" class="withbg">
    <v-card-item>
      <div class="d-sm-flex align-center justify-space-between pt-sm-2">
        <v-card-title class="text-h5">العملاء</v-card-title>
      </div>
      <v-row>
        <v-col cols="7" sm="7">
          <div class="mt-6">
            <h3 class="tw-text-xl sm:tw-text-2xl md:tw-text-3xl lg:tw-text-4xl">4000</h3>
            <div class="mt-1">
              <v-avatar class="bg-lightsuccess text-success" size="25">
                <ArrowUpLeftIcon size="20" />
              </v-avatar>
              <span class="text-subtitle-1 ml-2 font-weight-bold">+9%</span>
              <span class="text-subtitle-1 text-muted ml-2">الشهر الماضي</span>
            </div>
          </div>
        </v-col>
        <v-col cols="5" sm="5" class="pl-lg-0">
          <div class="d-flex align-center flex-shrink-0">
            <apexchart
              class="pt-6"
              type="donut"
              height="145"
              :options="chartOptions"
              :series="Chart"
            >
            </apexchart>
          </div>
        </v-col>
      </v-row>
    </v-card-item>
  </v-card>
</template>
