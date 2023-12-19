<template>
  <v-row>
    <v-col cols="12" sm="6">
      <v-text-field
        v-model="doctorStore.form.personalData.name"
        label="الاسم"
        required
        variant="outlined"
        :error="v$.name.$errors.length > 0"
        @blur="v$.name.$touch"
        :error-messages="v$.name.$errors.map((e) => e.$message)"
      ></v-text-field>
    </v-col>
    <v-col cols="12" sm="6">
      <v-text-field
        v-model="doctorStore.form.personalData.email"
        label="البريد الالكتروني"
        type="email"
        variant="outlined"
        :error="v$.email.$errors.length > 0"
        @blur="v$.email.$touch"
        :error-messages="v$.email.$errors.map((e) => e.$message)"
      ></v-text-field>
    </v-col>
    <v-col cols="12" sm="6">
      <v-select
        v-model="doctorStore.form.personalData.countryCode"
        :items="countryCodes"
        label="رمز الدولة"
        variant="outlined"
        :error="v$.countryCode.$errors.length > 0"
        @blur="v$.countryCode.$touch"
        :error-messages="v$.countryCode.$errors.map((e) => e.$message)"
      ></v-select>
    </v-col>
    <v-col cols="12" sm="6">
      <v-text-field
        v-model="doctorStore.form.personalData.phone"
        label="الجوال"
        variant="outlined"
        autocomplete="new-password"
        :error="v$.phone.$errors.length > 0"
        @blur="v$.phone.$touch"
        :error-messages="v$.phone.$errors.map((e) => e.$message)"
      ></v-text-field>
    </v-col>
    <v-col cols="12" sm="6">
      <v-select
        v-model="doctorStore.form.personalData.gender"
        :items="gender"
        label="النوع"
        variant="outlined"
        autocomplete="new-password"
        :error="v$.gender.$errors.length > 0"
        @blur="v$.gender.$touch"
        :error-messages="v$.gender.$errors.map((e) => e.$message)"
      ></v-select>
    </v-col>
    <v-col cols="12" sm="6">
      <v-text-field
        v-model="doctorStore.form.personalData.password"
        :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
        :type="visible ? 'text' : 'password'"
        label="ادخل كلمة المرور"
        variant="outlined"
        autocomplete="new-password"
        @click:append-inner="visible = !visible"
        :error="v$.password.$errors.length > 0"
        @blur="v$.password.$touch"
        :error-messages="v$.password.$errors.map((e) => e.$message)"
      ></v-text-field>
    </v-col>
    <v-col cols="12" sm="6">
      <v-select
        v-model="doctorStore.form.personalData.joinType"
        :items="joinTypes"
        label="نوع الانضمام"
        variant="outlined"
        autocomplete="new-password"
        :error="v$.joinType.$errors.length > 0"
        @blur="v$.joinType.$touch"
        :error-messages="v$.joinType.$errors.map((e) => e.$message)"
      ></v-select>
    </v-col>
    <v-col cols="12" sm="6">
      <v-file-input
        v-model="doctorStore.form.personalData.photo"
        accept="image/png, image/jpeg, image/bmp"
        placeholder="Pick an avatar"
        prepend-icon=""
        append-inner-icon="mdi-camera"
        label="الصورة"
        variant="outlined"
        :error="v$.photo.$errors.length > 0"
        @blur="v$.photo.$touch"
        :error-messages="v$.photo.$errors.map((e) => e.$message)"
      ></v-file-input>
    </v-col>
  </v-row>
</template>
<script setup>
import {
  required$,
  maxLength$,
  minLength$,
  email$,
  minPhoneLength$,
  digit$,
} from '@/helpers/validators';

import { useDoctorStore } from '~~/stores/DoctorStore';
const emit = defineEmits(['success', 'error']);

const doctorStore = useDoctorStore();

const serverErrors = ref({});
const visible = ref(false);
const itemsCount = ref(0);

const rules = reactive({
  name: {
    required$,
    minLength$: minLength$(3),
  },
  email: {
    required$,
    email$,
  },
  countryCode: {
    required$,
  },
  phone: {
    required$,
    digit$,
    minPhoneLength$: minPhoneLength$(7),
  },
  gender: {
    required$,
  },
  password: {
    required$,
    minLength$: minLength$(8),
    maxLength$: maxLength$(32),
  },
  joinType: {
    required$,
  },
  photo: {
    required$,
  },
});

const { v$ } = useCustomVulidate(
  rules,
  doctorStore.form.personalData,
  serverErrors
);

const countryCodes = ref([
  {
    title: 'السعودية',
    value: '+966',
  },
  {
    title: 'مصر',
    value: '+20',
  },
  {
    title: 'الاردن',
    value: '+962',
  },
]);
const gender = ref([
  {
    title: 'ذكر',
    value: 'male',
  },
  {
    title: 'الانثى',
    value: 'female',
  },
]);
const joinTypes = ref([
  {
    title: 'خارج المركز',
    value: 'outside',
  },
  {
    title: 'داخل المركز',
    value: 'inside',
  },
]);

watch(
  () => doctorStore.form.personalData,
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
