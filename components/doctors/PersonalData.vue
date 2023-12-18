<template>
  <v-row>
    <v-col cols="12" sm="6">
      <v-text-field
        v-model="doctorStore.form.name"
        label="الاسم"
        required
        variant="outlined"
      ></v-text-field>
    </v-col>
    <v-col cols="12" sm="6">
      <v-text-field
        v-model="doctorStore.form.email"
        label="البريد الالكتروني"
        required
        variant="outlined"
      ></v-text-field>
    </v-col>
    <v-col cols="12" sm="6">
      <v-select
        v-model="doctorStore.form.countryCode"
        :items="countryCodes"
        label="رمز الدولة"
        variant="outlined"
      ></v-select>
    </v-col>
    <v-col cols="12" sm="6">
      <v-text-field
        v-model="doctorStore.form.phone"
        label="الجوال"
        variant="outlined"
        autocomplete="new-password"
      ></v-text-field>
    </v-col>
    <v-col cols="12" sm="6">
      <v-select
        v-model="doctorStore.form.gender"
        :items="gender"
        label="النوع"
        variant="outlined"
        autocomplete="new-password"
      ></v-select>
    </v-col>
    <v-col cols="12" sm="6">
      <v-text-field
        v-model="doctorStore.form.password"
        :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
        :type="visible ? 'text' : 'password'"
        label="ادخل كلمة المرور"
        variant="outlined"
        autocomplete="new-password"
        @click:append-inner="visible = !visible"
      ></v-text-field>
    </v-col>
    <v-col cols="12" sm="6">
      <v-file-input
        v-model="doctorStore.form.photo"
        accept="image/png, image/jpeg, image/bmp"
        placeholder="Pick an avatar"
        prepend-icon=""
        append-inner-icon="mdi-camera"
        label="الصورة"
        variant="outlined"
      ></v-file-input>
    </v-col>
  </v-row>
</template>
<script setup>
import { useDoctorStore } from '~~/stores/DoctorStore';

const doctorStore = useDoctorStore();


const visible = ref(false);


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
</script>
