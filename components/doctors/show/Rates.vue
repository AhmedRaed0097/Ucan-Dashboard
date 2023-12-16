<template>
  <v-row v-for="(rate, index) in ratesData" :key="rate.id"
  class="tw-border-b mb-2"
  >
    <v-col cols="9">
      <div>
        <h5 class="tw-text-xl text-primary">{{ rate.customerName }}</h5>
        <span class="create-at text-secondary">{{ rate.createdAt }}</span>
        <h5 class="tw-text-base">{{ rate.note }}</h5>
      </div>
    </v-col>
    <v-col cols="3" alignSelf="center">
      <v-rating
        :modelValue="rate.rate"
        color="warning"
        size="19"
        readonly
      ></v-rating>
    </v-col>

  </v-row>
</template>
<script setup>
const ratesData = ref([
  {
    id: 1,
    customerName: 'محمد عبدالله',
    note: 'مضبوط',
    createdAt: 'منذ 5 أشهر',
    rate: 4,
  },
  {
    id: 2,
    customerName: 'سالم احمد',
    note: 'ممتااااااااز 🤩',
    createdAt: 'منذ 4 أشهر',
    rate: 5,
  },
  {
    id: 3,
    customerName: 'نور خالد',
    note: 'ما حضر وقت الجلسه',
    createdAt: 'منذ 3 أشهر',
    rate: 1,
  },
  {
    id: 4,
    customerName: 'خالد عبدالله',
    note: 'جميل',
    createdAt: 'منذ 3 أشهر',
    rate: 1,
  },
]);
</script>
<style></style>
