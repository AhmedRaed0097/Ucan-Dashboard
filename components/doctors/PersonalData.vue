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
      <v-text-field
        label="رمز الدولة"
        required
        variant="outlined"
      ></v-text-field>
    </v-col>
    <v-col cols="12" sm="6">
      <v-text-field label="الجوال" required variant="outlined"></v-text-field>
    </v-col>
    <v-col cols="12" sm="6">
      <v-select :items="gender" label="النوع" variant="outlined"></v-select>
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
      <v-select
        :items="qualifications"
        label="المؤهل العلمي"
        variant="outlined"
      ></v-select>
    </v-col>
    <v-col cols="12" sm="6">
      <v-file-input
        accept="image/png, image/jpeg, image/bmp"
        placeholder="Pick an avatar"
        prepend-icon=""
        prepend-inner-icon="mdi-camera"
        label="الصورة"
        variant="outlined"
      ></v-file-input>
    </v-col>
  </v-row>
</template>
<script setup>
const visible = ref(false);
const gender = ref(['ذكر', 'انثى']);
const qualifications = ref(['بكلاريوس', 'ماجستير', 'دكتوراه']);

</script>
<style lang=""></style>
