<template>
  <v-row>
    <v-col cols="12" sm="6">
      <v-select
        v-model="doctorStore.form.consultantData.bookingPeriod"
        :items="durationStore.bookingPeriod"
        item-title="key"
        item-value="value"
        label="مدة الحجز (اختياري)"
        variant="outlined"
      ></v-select>
    </v-col>
    <v-col cols="12" sm="6">
      <v-select
        v-model="doctorStore.form.consultantData.bookType"
        :items="durationStore.bookingType"
        item-title="key"
        item-value="value"
        label="نوع الحجز (اختياري)"
        variant="outlined"
      ></v-select>
    </v-col>
    <v-col cols="12" sm="6">
      <v-select
      v-if="freeConsultationStore.freeConsultations"
        v-model="doctorStore.form.consultantData.freeConsultation"
        :items="freeConsultationStore.freeConsultations"
        item-title="key"
        item-value="value"
        label="استشارة مجانية (اختياري)"
        variant="outlined"
      ></v-select>
    </v-col>
    <v-col cols="12" sm="6">
      <v-select
      v-if="durationStore.maxBookingPeriod"
        v-model="doctorStore.form.consultantData.maximumBookingPeriod"
        :items="durationStore.maxBookingPeriod"
        item-title="key"
        item-value="value"
        label="اقصى مدة للحجز (اختياري)"
        variant="outlined"
      ></v-select>
    </v-col>
    <v-col cols="12" sm="6">
      <v-text-field
        v-model="doctorStore.form.consultantData.periodPrice"
        label="قيمة الجلسة"
        required
        variant="outlined"
        :error="v$.periodPrice.$errors.length > 0"
        @input="validate"
        :error-messages="v$.periodPrice.$errors.map((e) => e.$message)"
      ></v-text-field>
    </v-col>
  </v-row>
</template>
<script setup>
import { required$, digit$ } from '@/helpers/validators';
import { useDoctorStore } from '~~/stores/DoctorStore';

import { useDurationStore } from '~/stores/DurationStore';
import { useFreeConsultationStore } from '~/stores/FreeConsultationStore';
const emit = defineEmits(['success', 'error']);

const doctorStore = useDoctorStore();
const durationStore = useDurationStore();
const freeConsultationStore = useFreeConsultationStore();

const itemsCount = ref(0);

const duration = ref([
  {
    title: '30 دقيقة',
    value: '30',
  },
  {
    title: '45 دقيقة',
    value: '45',
  },
  {
    title: 'ساعة',
    value: '60',
  },
]);
const bookType = ref([
  {
    title: 'مجدول',
    value: 'schedule',
  },
  {
    title: 'مجدول وفوري',
    value: 'schedule_direct',
  },
]);
const freeConsultation = ref([
  {
    title: 'مجدول',
    value: 'schedule',
  },
  {
    title: 'مجدول وفوري',
    value: 'schedule_direct',
  },
]);
const serverErrors = ref({});

const maxDurations = ref(['اسبوعان', 'شهر']);

const rules = reactive({
  periodPrice: {
    required$,
    digit$,
  },
});

const { v$ } = useCustomVulidate(
  rules,
  doctorStore.form.consultantData,
  serverErrors
);

const validate = () => {
  console.log('from change');
  v$.value.periodPrice.$touch();
  if (!v$.value.$error) {
    emit('success');
  } else {
    emit('error');
  }
};
</script>
