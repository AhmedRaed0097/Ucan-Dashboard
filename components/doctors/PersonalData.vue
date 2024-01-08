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
      <v-text-field
        v-model="doctorStore.form.personalData.passwordConfirmation"
        :append-inner-icon="visibleConfirmation ? 'mdi-eye-off' : 'mdi-eye'"
        :type="visibleConfirmation ? 'text' : 'password'"
        label="تأكيد كلمة المرور"
        variant="outlined"
        autocomplete="new-password"
        @click:append-inner="visibleConfirmation = !visibleConfirmation"
        :error="v$.passwordConfirmation.$errors.length > 0"
        @blur="v$.passwordConfirmation.$touch"
        :error-messages="v$.passwordConfirmation.$errors.map((e) => e.$message)"
      ></v-text-field>
    </v-col>
    <v-col cols="12" sm="6">
      <v-select
        v-model="doctorStore.form.personalData.doctorType"
        :items="joinTypes"
        label="نوع الانضمام"
        variant="outlined"
        autocomplete="new-password"
        :error="v$.doctorType.$errors.length > 0"
        @blur="v$.doctorType.$touch"
        :error-messages="v$.doctorType.$errors.map((e) => e.$message)"
      ></v-select>
    </v-col>
    <v-col cols="12" sm="6">
      <v-file-input
        v-model="doctorStore.form.personalData.avatar"
        accept="image/png, image/jpeg, image/bmp"
        placeholder="Pick an avatar"
        prepend-icon=""
        append-inner-icon="mdi-camera"
        label="الصورة"
        variant="outlined"
        :error="v$.avatar.$errors.length > 0"
        @blur="v$.avatar.$touch"
        :error-messages="v$.avatar.$errors.map((e) => e.$message)"
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
  sameAs$
} from '@/helpers/validators';

import { useDoctorStore } from '~~/stores/DoctorStore';
const emit = defineEmits(['success', 'error']);

const doctorStore = useDoctorStore();

const serverErrors = ref({});
const visible = ref(false);
const visibleConfirmation = ref(false);
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
  passwordConfirmation: {
      required$,
      // sameAs$: sameAs$(doctorStore.form.personalData.password),
    },
  doctorType: {
    required$,
  },
  avatar: {
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
    value: '1',
  },
  {
    title: 'الاردن',
    value: '2',
  },
  {
    title: 'مصر',
    value: '3',
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
    console.log('cc ',itemsCount.value);
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
