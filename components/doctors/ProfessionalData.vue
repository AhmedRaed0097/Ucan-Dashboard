<template>
  <v-row>
    <v-col cols="12" sm="6">
      <v-select
        :items="qualifications"
        label="المؤهل العلمي"
        variant="outlined"
      ></v-select>
    </v-col>

    <v-col cols="12" sm="6">
      <v-text-field label="سنوات الخبرة" required variant="outlined">
        <!--  -->
      </v-text-field>
    </v-col>
    <v-col cols="12" sm="6">
      <v-select  label="الفئة" variant="outlined"></v-select>
    </v-col>
    <v-col cols="12" sm="6">
      <v-select  label="التصنيف" variant="outlined"></v-select>
    </v-col>
    <v-col cols="12" sm="6">
      <v-select
        label="المسمى المهني"
        variant="outlined"
      ></v-select>
    </v-col>
    <v-col cols="12" sm="6">
      <v-textarea label="نبذة تعريفية" variant="outlined" />
    </v-col>
  </v-row>
</template>
<script setup>
const gender = ref(['ذكر', 'انثى']);
const qualifications = ref(['بكلاريوس', 'ماجستير', 'دكتوراه']);
</script>
<style lang=""></style>
