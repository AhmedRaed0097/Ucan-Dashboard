<template>
  <v-row>
    <v-col cols="12" sm="6">
      <v-select
        v-model="doctorStore.form.professionalData.qualification"
        :items="qualifications"
        label="المؤهل العلمي"
        variant="outlined"
        :error="v$.qualification.$errors.length > 0"
        @change="v$.qualification.$touch"
        @blur="v$.qualification.$touch"
        :error-messages="v$.qualification.$errors.map((e) => e.$message)"
      ></v-select>
    </v-col>

    <v-col cols="12" sm="6">
      <v-text-field
        v-model="doctorStore.form.professionalData.yearExperience"
        label="سنوات الخبرة"
        required
        variant="outlined"
        :error="v$.yearExperience.$errors.length > 0"
        @change="v$.yearExperience.$touch"
        @blur="v$.yearExperience.$touch"
        :error-messages="v$.yearExperience.$errors.map((e) => e.$message)"
      >
        <!--  -->
      </v-text-field>
    </v-col>
    <v-col cols="12" sm="6">
      <v-select
        v-model="doctorStore.form.professionalData.class"
        :items="classes"
        label="الفئة"
        variant="outlined"
        :error="v$.class.$errors.length > 0"
        @change="v$.class.$touch"
        @blur="v$.class.$touch"
        :error-messages="v$.class.$errors.map((e) => e.$message)"
      ></v-select>
    </v-col>
    <v-col cols="12" sm="6">
      <v-select
        v-model="doctorStore.form.professionalData.category"
        :items="categories"
        label="التصنيف"
        variant="outlined"
        :error="v$.category.$errors.length > 0"
        @change="v$.category.$touch"
        @blur="v$.category.$touch"
        :error-messages="v$.category.$errors.map((e) => e.$message)"
      ></v-select>
    </v-col>
    <v-col cols="12" sm="6">
      <v-text-field
        v-model="doctorStore.form.professionalData.professionalTitle"
        label="المسمى المهني"
        required
        variant="outlined"
        :error="v$.professionalTitle.$errors.length > 0"
        @blur="v$.professionalTitle.$touch"
        :error-messages="v$.professionalTitle.$errors.map((e) => e.$message)"
      >
        <!--  -->
      </v-text-field>
    </v-col>
    <v-col cols="12" sm="6">
      <v-textarea
        v-model="doctorStore.form.professionalData.biography"
        label="نبذة تعريفية"
        variant="outlined"
        :error="v$.biography.$errors.length > 0"
        @blur="v$.biography.$touch"
        :error-messages="v$.biography.$errors.map((e) => e.$message)"
      />
    </v-col>
  </v-row>
</template>
<script setup>
import {
  required$,
  digit$,
  maxLength$,
  minLength$,
} from '@/helpers/validators';

import { useDoctorStore } from '~~/stores/DoctorStore';
const emit = defineEmits(['success', 'error']);

const doctorStore = useDoctorStore();

const serverErrors = ref({});

const itemsCount = ref(0);

const qualifications = ref(['بكلاريوس', 'ماجستير', 'دكتوراه']);
const classes = ref(['طبيب', 'مختص', 'اختبار']);
const categories = ref(['باطني', 'نفسي']);

const rules = reactive({
  qualification: {
    required$,
  },
  yearExperience: {
    required$,
    digit$,
  },
  class: {
    required$,
  },
  category: {
    required$,
  },
  professionalTitle: {
    required$,
  },
  biography: {
    required$,
    minLength$: minLength$(3),
    maxLength$: maxLength$(255),
  },
});

const { v$ } = useCustomVulidate(
  rules,
  doctorStore.form.professionalData,
  serverErrors
);

watch(
  () => doctorStore.form.professionalData,
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
