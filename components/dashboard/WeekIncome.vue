<script setup lang="ts">

import { computed } from 'vue';
import { useTheme } from 'vuetify';
const theme = useTheme();
const primary = theme.current.value.colors.primary;
const secondary = theme.current.value.colors.secondary;
const select = ref('الاسبوع الاول');
const items = ref(['الاسبوع الاول','الاسبوع الثاني', 'الاسبوع الثالث', 'الاسبوع الرابع']);
const chartOptions = computed(() => {
    return {

        series: [
            { name: 'Earnings this month:', data: [390, 300, 350, 390, 180, 355, 390] },
        ],
        chartOptions: {
            grid: {
                borderColor: 'rgba(0,0,0,0.1)',
                strokeDashArray: 3,
                xaxis: {
                    lines: {
                        show: false
                    }
                },
            },
            plotOptions: {
                bar: { horizontal: false, columnWidth: '15%', borderRadius: [8] },
            },
            colors: [primary, secondary],
            chart: {
                type: 'bar',
                height: 370,
                offsetX: -15,
                toolbar: { show: true },
                foreColor: '#adb0bb',
                fontFamily: 'inherit',
                sparkline: { enabled: false },
            },
            dataLabels: { enabled: false },
            markers: { size: 0 },
            legend: { show: false },
            xaxis: {
                type: 'category',
                categories: ['الأحد','الاثنين','الثلاثاء','الأربعاء','الخميس','الجمعة','السبت'],
                labels: {
                    style: { cssClass: 'grey--text lighten-2--text fill-color' },
                },
            },
            yaxis: {
                show: true,
                min: 0,
                max: 400,
                tickAmount: 4,
                labels: {
                    style: {
                        cssClass: 'grey--text lighten-2--text fill-color',
                    },
                },
            },
            stroke: {
                show: true,
                width: 3,
                lineCap: 'butt',
                colors: ['transparent'],
            },
            tooltip: { theme: 'light' },

            responsive: [
            {
                breakpoint: 600,
                options: {
                    plotOptions: {
                        bar: {
                            borderRadius: 3,
                        }
                    },
                }
            }
        ]

        },
    };
});
</script>
<template>
    <v-card elevation="10" class="withbg">
        <v-card-item>
            <div class="d-sm-flex align-center justify-space-between pt-sm-2">
                <div><v-card-title class="text-h5">دخل الاسبوع</v-card-title></div>
                <div class="my-sm-0 my-2">
                    <v-select v-model="select" :items="items" variant="outlined" 
                        hide-details></v-select>
                </div>
            </div>
            <div class="mt-6">
                <apexchart type="bar" height="370px" :options="chartOptions.chartOptions" :series="chartOptions.series">
                </apexchart>
            </div>
        </v-card-item>
    </v-card>
</template>