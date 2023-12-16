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
    fieldName: 'استشارة مجانية',
    fieldValue: 'لا يوجد بيانات لعرضه',
  },
  {
    fieldName: 'استقبال الطلبات',
    fieldValue: 'لا يوجد بيانات لعرضه',
  },
  {
    fieldName: 'نوع الحجز',
    fieldValue: 'لا يوجد بيانات لعرضه',
  },
  {
    fieldName: 'مدة الحجز',
    fieldValue: 'لا يوجد بيانات لعرضه',
  },
  {
    fieldName: 'أقصى مدة للحجز',
    fieldValue: 'لا يوجد بيانات لعرضه',
  },
  {
    fieldName: 'قيمة الجلسة',
    fieldValue: 'لا يوجد بيانات لعرضه',
  },
  {
    fieldName: 'قبول كوبونات الخصم',
    fieldValue: 'لا يوجد بيانات لعرضه',
  },
  {
    fieldName: 'نسبة يوكان',
    fieldValue: 'لا يوجد بيانات لعرضه',
  },
]);
</script>
<style lang="scss"></style>
