<template>
  <div>
    <v-data-table class="border-table" :headers="headers" :items="info">
      <template #[`item.certificateFile`]="{}">
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
  { key: 'certificateName', title: 'اسم الشهادة	', sortable: false },
  { key: 'certificateFile', title: 'الشهادة', sortable: false },
]);

const info = ref([
  {
    id: 1,
    certificateName: 'Quia.',
    certificate: '',
  },
]);
</script>
<style lang="scss"></style>
