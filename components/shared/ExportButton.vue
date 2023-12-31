<!-- <template>
  <v-btn @click="exportData" block variant="outlined">تصدير</v-btn>
</template> -->

<!-- <script setup>
import exportFromJSON from 'export-from-json';

const props = defineProps({
  data: {
    type: Array,
    default: () => [],
  },
  exportType: {
    type: String,
    default: 'csv',
  },
  fileName: {
    type: String,
    default: 'default-name',
  },
});

function exportData() {
  if (props.data)
    exportFromJSON({
      data: props.data,
      fileName: props.fileName,
      exportType: props.exportType,
      withBOM: true,
    });
}
</script> -->

<template>
  <JsonExcel :data="props.data" :name="props.fileName" :type="props.exportType" :header="headers">
    <v-btn block variant="outlined">تصدير</v-btn>
  </JsonExcel>
</template>

<script setup>
import JsonExcel from 'vue-json-excel3';
const headers = reactive([
  'اسم الباقة',
  'المختص',
  'تاريخ الاشتراك',
  'الجلسات',
  'المنفذة',
  'المتبقية',
  'حالة الاشتراك',
]);
const props = defineProps({
  data: {
    type: Array,
    default: () => [],
  },
  exportType: {
    type: String,
    default: 'xlsx',
  },
  fileName: {
    type: String,
    default: 'default-name',
  },
});
</script>
