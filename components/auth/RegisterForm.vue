<script setup lang="ts"></script>

<template>
  <v-row class="d-flex mb-3">
    <v-col cols="12">
      <v-label class="font-weight-bold mb-1">الاسم</v-label>
      <v-text-field
        variant="outlined"
        hide-details
        color="primary"
      ></v-text-field>
    </v-col>
    <v-col cols="12">
      <v-label class="font-weight-bold mb-1">البريد الالكتروني</v-label>
      <v-text-field
        variant="outlined"
        type="email"
        hide-details
        color="primary"
      ></v-text-field>
    </v-col>
    <v-col cols="12">
      <v-label class="font-weight-bold mb-1">كلمة المرور</v-label>
      <v-text-field
        variant="outlined"
        type="password"
        hide-details
        color="primary"
      ></v-text-field>
    </v-col>
    <v-col cols="12">
      <v-btn to="/" color="primary" size="large" block flat>انشاء حساب</v-btn>
    </v-col>
  </v-row>
</template>
