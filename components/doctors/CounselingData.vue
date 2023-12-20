<template>
  <v-row>
    <v-col cols="12" sm="6">
      <v-select
        v-model="doctorStore.form.consultantData.duration"
        :items="duration"
        label="مدة الحجز"
        variant="outlined"
      ></v-select>
    </v-col>
    <v-col cols="12" sm="6">
      <v-select
        v-model="doctorStore.form.consultantData.bookType"
        :items="bookType"
        label="نوع الحجز"
        variant="outlined"
      ></v-select>
    </v-col>
    <v-col cols="12" sm="6">
      <v-select
        v-model="doctorStore.form.consultantData.freeConsultation"
        :items="freeConsultation"
        label="استشارة مجانية"
        variant="outlined"
      ></v-select>
    </v-col>
    <v-col cols="12" sm="6">
      <v-select
        v-model="doctorStore.form.consultantData.maxDuration"
        :items="maxDurations"
        label="اقصى مدة للحجز"
        variant="outlined"
      ></v-select>
    </v-col>
    <v-col cols="12" sm="6">
      <v-text-field
        v-model="doctorStore.form.consultantData.sessionCost"
        label="قيمة الجلسة"
        required
        variant="outlined"
        :error="v$.sessionCost.$errors.length > 0"
        @input="validate"
        :error-messages="v$.sessionCost.$errors.map((e) => e.$message)"
      ></v-text-field>
    </v-col>
    <v-col cols="12" sm="6">
      <v-text-field
        v-model="doctorStore.form.consultantData.ucanPercentage"
        label="نسبة يوكان"
        required
        variant="outlined"
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
  sessionCost: {
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
  v$.value.sessionCost.$touch();
  if (!v$.value.$error) {
    emit('success');
  } else {
    emit('error');
  }
};
</script>
