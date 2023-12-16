<template>
  <div>
    <v-data-table class="border-table" :headers="headers" :items="info">
      <template #bottom></template>
    </v-data-table>
  </div>
</template>
<script setup>
const headers = ref([
  { key: 'fieldName', title: 'اسم الحقل', sortable: false },
  { key: 'fieldValue', title: 'قيمة الحقل', sortable: false },
]);

const info = ref([
  {
    fieldName: 'اسم الحساب',
    fieldValue: 'Teat sara',
  },
  {
    fieldName: 'اسم البنك',
    fieldValue: 'مصرف الانماء',
  },
  {
    fieldName: 'رقم الحساب',
    fieldValue: '123456789123456789121',
  },
  {
    fieldName: 'الايبان',
    fieldValue: 'Nd8383837362626262636677',
  },
]);
</script>
<style lang="scss"></style>
