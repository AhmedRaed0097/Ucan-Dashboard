<template>
  <div>
    <v-data-table class="border-table" :headers="headers" :items="info">
      <template #bottom></template>
    </v-data-table>
  </div>
</template>
<script setup>
const headers = ref([
  { key: 'id', title: '#', sortable: false },
  { key: 'entity', title: 'الجهة', sortable: false },
  { key: 'major', title: 'التخصص', sortable: false },
  { key: 'year', title: 'السنة', sortable: false },
]);

const info = ref([
  {
    id: 1,
    entity: 'Ea.',
    major: 'لا يوجد بيانات لعرضه',
    year: '2014',
  },
  {
    id: 2,
    entity: 'Sa.',
    major: 'لا يوجد بيانات لعرضه',
    year: '2009',
  },
  {
    id: 3,
    entity: 'Fa.',
    major: 'لا يوجد بيانات لعرضه',
    year: '2002',
  },
  {
    id: 4,
    entity: 'Na.',
    major: 'لا يوجد بيانات لعرضه',
    year: '2010',
  },
]);
</script>
<style lang="scss"></style>
