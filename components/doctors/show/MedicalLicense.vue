<template>
  <div>
    <v-data-table class="border-table" :headers="headers" :items="info">
      <template #[`item.license`]="{}">
        <a href="#" class="text-primary hover:tw-underline"
          >اضغط لمشاهدة الملف</a
        >
      </template>

      <template #bottom></template>
    </v-data-table>
  </div>
</template>
<script setup>
const headers = ref([
  { key: 'id', title: '#', sortable: false },
  { key: 'entity', title: 'جهة الرخصة الطبية', sortable: false },
  { key: 'number', title: 'رقم الرخصة الطبية', sortable: false },
  { key: 'date', title: 'تاريخ الانتهاء' },
  { key: 'license', title: 'الرخصة الطبية', sortable: false },
]);

const info = ref([
  {
    id: 1,
    entity: 'Quia.	.',
    number: '844703',
    date: '2023-01-01	',
    license: '',
  },
]);
</script>
<style lang="scss"></style>
