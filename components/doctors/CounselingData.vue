<template>
  <v-row>
    <v-col cols="12" sm="6">
      <v-select
        :items="duration"
        label="مدة الحجز"
        variant="outlined"
      ></v-select>
    </v-col>
    <v-col cols="12" sm="6">
      <v-select
        :items="bookType"
        label="نوع الحجز"
        variant="outlined"
      ></v-select>
    </v-col>
    <v-col cols="12" sm="6">
      <v-select
        :items="freeConsultation"
        label="استشارة مجانية"
        variant="outlined"
      ></v-select>
    </v-col>
    <v-col cols="12" sm="6">
      <v-select
        :items="qualifications"
        label="اقصى مدة للحجز"
        variant="outlined"
      ></v-select>
    </v-col>
    <v-col cols="12" sm="6">
      <v-text-field
        label="قيمة الجلسة"
        required
        variant="outlined"
      ></v-text-field>
    </v-col>
    <v-col cols="12" sm="6">
      <v-text-field
        label="نسبة يوكان"
        required
        variant="outlined"
      ></v-text-field>
    </v-col>
  </v-row>
</template>
<script setup>

const duration = ref([
  {
    label: '30 دقيقة',
    value: 30,
  },
  {
    label: '45 دقيقة',
    value: 45,
  },
  {
    label: 'ساعة',
    value: 60,
  },
]);
const bookType = ref([
  {
    label: 'مجدول',
    value: 'schedule',
  },
  {
    label: 'مجدول وفوري',
    value: 'schedule_direct',
  },
]);
const freeConsultation = ref([
  {
    label: 'مجدول',
    value: 'schedule',
  },
  {
    label: 'مجدول وفوري',
    value: 'schedule_direct',
  },
]);


const qualifications = ref(['بكلاريوس', 'ماجستير', 'دكتوراه']);
</script>
<style lang=""></style>
