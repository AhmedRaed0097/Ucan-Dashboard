<template>
  <v-row>
    <v-col cols="12" sm="6">
      <v-select
        v-if="qualificationStore.qualifications"
        v-model="doctorStore.form.professionalData.qualificationId"
        :items="qualificationStore.qualifications"
        item-title="nameAr"
        item-value="id"
        label="المؤهل العلمي"
        variant="outlined"
        :error="v$.qualificationId.$errors.length > 0"
        @blur="v$.qualificationId.$touch"
        :error-messages="v$.qualificationId.$errors.map((e) => e.$message)"
      ></v-select>
    </v-col>

    <v-col cols="12" sm="6">
      <v-text-field
        v-model="doctorStore.form.professionalData.expYears"
        label="سنوات الخبرة"
        required
        variant="outlined"
        :error="v$.expYears.$errors.length > 0"
        @blur="v$.expYears.$touch"
        :error-messages="v$.expYears.$errors.map((e) => e.$message)"
      >
        <!--  -->
      </v-text-field>
    </v-col>
    <v-col cols="12" sm="6">
      <v-select
        v-if="categoryStore.subCategories"
        v-model="doctorStore.form.professionalData.subCategoryId"
        :items="categoryStore.subCategories"
        item-title="nameAr"
        item-value="id"
        label="الفئة"
        variant="outlined"
        :error="v$.subCategoryId.$errors.length > 0"
        @blur="v$.subCategoryId.$touch"
        :error-messages="v$.subCategoryId.$errors.map((e) => e.$message)"
      ></v-select>
    </v-col>
    <v-col cols="12" sm="6">
      <v-select
        v-if="categoryStore.categories"
        v-model="doctorStore.form.professionalData.categoryId"
        :items="categoryStore.categories"
        item-title="nameAr"
        item-value="id"
        label="التصنيف"
        variant="outlined"
        :error="v$.categoryId.$errors.length > 0"
        @blur="v$.categoryId.$touch"
        :error-messages="v$.categoryId.$errors.map((e) => e.$message)"
      ></v-select>
    </v-col>
    <v-col cols="12" sm="6">
      <v-select
        v-if="jobTitleStore.jobTitles"
        v-model="doctorStore.form.professionalData.jobTitleId"
        :items="jobTitleStore.jobTitles"
        item-title="nameAr"
        item-value="id"
        label="المسمى المهني"
        variant="outlined"
        :error="v$.jobTitleId.$errors.length > 0"
        @blur="v$.jobTitleId.$touch"
        :error-messages="v$.jobTitleId.$errors.map((e) => e.$message)"
      ></v-select>
    </v-col>
    <v-col cols="12" sm="6">
      <v-text-field
        v-model="doctorStore.form.professionalData.priority"
        label="الاولوية"
        required
        variant="outlined"
        :error="v$.priority.$errors.length > 0"
        @blur="v$.priority.$touch"
        :error-messages="v$.priority.$errors.map((e) => e.$message)"
      >
        <!--  -->
      </v-text-field>
    </v-col>
    <v-col cols="12" sm="6">
      <v-textarea
        v-model="doctorStore.form.professionalData.bio"
        label="نبذة تعريفية"
        variant="outlined"
        :error="v$.bio.$errors.length > 0"
        @blur="v$.bio.$touch"
        :error-messages="v$.bio.$errors.map((e) => e.$message)"
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
  between$,
} from '@/helpers/validators';

import { useDoctorStore } from '~~/stores/DoctorStore';
import { useQualificationStore } from '~/stores/QualificationStore';
import { useCategoryStore } from '~/stores/CategoryStore';
import { useJobTitleStore } from '~~/stores/JobTitleStore';
const emit = defineEmits(['success', 'error']);

const doctorStore = useDoctorStore();
const qualificationStore = useQualificationStore();
const categoryStore = useCategoryStore();
const jobTitleStore = useJobTitleStore();

const serverErrors = ref({});

const itemsCount = ref(0);

const rules = reactive({
  qualificationId: {
    required$,
  },
  expYears: {
    required$,
    digit$,
  },
  subCategoryId: {
    required$,
  },
  categoryId: {
    required$,
  },
  jobTitleId: {
    required$,
  },
  priority: {
    required$,
    digit$,
    between$: between$(1, 100),
  },
  bio: {
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
      if (!value) {
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
