<template>
  <v-row>
    <v-col cols="12" sm="6">
      <v-text-field label="الاسم" required variant="outlined"></v-text-field>
    </v-col>
    <v-col cols="12" sm="6">
      <v-text-field
        label="البريد الالكتروني"
        required
        variant="outlined"
      ></v-text-field>
    </v-col>
    <v-col cols="12" sm="6">
      <v-select
        :items="countryCodes"
        label="رمز الدولة"
        variant="outlined"
      ></v-select>
    </v-col>
    <v-col cols="12" sm="6">
      <v-text-field
        label="الجوال"
        variant="outlined"
        autocomplete="new-password"
      ></v-text-field>
    </v-col>
    <v-col cols="12" sm="6">
      <v-select :items="gender" label="النوع" variant="outlined" autocomplete="new-password"></v-select>
    </v-col>
    <v-col cols="12" sm="6">
      <v-text-field
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