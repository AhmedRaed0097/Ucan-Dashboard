<template>
  <v-row>
    <v-col cols="12" sm="6">
      <v-select
        v-model="doctorStore.form.consultantData.duration"
        :items="duration"
        label="مدة الحجز"
        variant="outlined"
        :error="v$.duration.$errors.length > 0"
        @change="v$.duration.$touch"
        @blur="v$.duration.$touch"
        :error-messages="v$.duration.$errors.map((e) => e.$message)"
      ></v-select>
    </v-col>
    <v-col cols="12" sm="6">
      <v-select
        v-model="doctorStore.form.consultantData.bookType"
        :items="bookType"
        label="نوع الحجز"
        variant="outlined"
        :error="v$.bookType.$errors.length > 0"
        @change="v$.bookType.$touch"
        @blur="v$.bookType.$touch"
        :error-messages="v$.bookType.$errors.map((e) => e.$message)"
      ></v-select>
    </v-col>
    <v-col cols="12" sm="6">
      <v-select
        v-model="doctorStore.form.consultantData.freeConsultation"
        :items="freeConsultation"
        label="استشارة مجانية"
        variant="outlined"
        :error="v$.freeConsultation.$errors.length > 0"
        @change="v$.freeConsultation.$touch"
        @blur="v$.freeConsultation.$touch"
        :error-messages="v$.freeConsultation.$errors.map((e) => e.$message)"
      ></v-select>
    </v-col>
    <v-col cols="12" sm="6">
      <v-select
        v-model="doctorStore.form.consultantData.maxDuration"
        :items="maxDurations"
        label="اقصى مدة للحجز"
        variant="outlined"
        :error="v$.maxDuration.$errors.length > 0"
        @change="v$.maxDuration.$touch"
        @blur="v$.maxDuration.$touch"
        :error-messages="v$.maxDuration.$errors.map((e) => e.$message)"
      ></v-select>
    </v-col>
    <v-col cols="12" sm="6">
      <v-text-field
        v-model="doctorStore.form.consultantData.sessionCost"
        label="قيمة الجلسة"
        required
        variant="outlined"
        :error="v$.sessionCost.$errors.length > 0"
        @change="v$.sessionCost.$touch"
        @blur="v$.sessionCost.$touch"
        :error-messages="v$.sessionCost.$errors.map((e) => e.$message)"
      ></v-text-field>
    </v-col>
    <v-col cols="12" sm="6">
      <v-text-field
        v-model="doctorStore.form.consultantData.ucanPercentage"
        label="نسبة يوكان"
        required
        variant="outlined"
        :error="v$.ucanPercentage.$errors.length > 0"
        @change="v$.ucanPercentage.$touch"
        @blur="v$.ucanPercentage.$touch"
        :error-messages="v$.ucanPercentage.$errors.map((e) => e.$message)"
      ></v-text-field>
    </v-col>
  </v-row>
</template>
<script setup>
import { required$, digit$ } from '@/helpers/validators';
import { useDoctorStore } from '~~/stores/DoctorStore';
const emit = defineEmits(['success', 'error']);

const doctorStore = useDoctorStore();

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
  duration: {
    required$,
  },
  bookType: {
    required$,
  },
  freeConsultation: {
    required$,
  },
  sessionCost: {
    required$,
    digit$,
  },
  maxDuration: {
    required$,
  },
  ucanPercentage: {
    required$,
    digit$,
  },
});

const { v$ } = useCustomVulidate(
  rules,
  doctorStore.form.consultantData,
  serverErrors
);

watch(
  () => doctorStore.form.consultantData,
  (newValue) => {
    itemsCount.value = 0;
    Object.values(newValue).forEach((value) => {
      if (!value || !value.length) {
        itemsCount.value++;
      }
    });
    if (itemsCount.value === 0) {
      v$.value.$validate();
      if (!v$.value.$error) {
        emit('success');
      }
    } else {
      emit('error');
    }
  },
  { deep: true }
);
</script>
