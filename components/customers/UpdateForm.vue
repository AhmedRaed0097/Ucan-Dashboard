<template>
  <form>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-text-field
            label="الاسم"
            required
            variant="outlined"
          ></v-text-field>
        </v-col>
      
        <v-col cols="12">
          <v-text-field
            label="البريد الالكتروني"
            required
            variant="outlined"
          ></v-text-field>
        </v-col>
      
        <v-col cols="12">
          <v-text-field
            label="الجوال"
            variant="outlined"
            autocomplete="new-password"
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-select
            :items="gender"
            label="النوع"
            variant="outlined"
            autocomplete="new-password"
          ></v-select>
        </v-col>
        <v-col cols="12">
          <v-btn variant="flat" class="ml-2">حفظ ورجوع</v-btn>
          <v-btn color="secondary" variant="flat">الغاء</v-btn>
        </v-col>

      </v-row>
    </v-container>
  </form>
</template>
<script setup>
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
<style></style>
