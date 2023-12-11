<script setup lang="ts">
const dialog = ref(false);
</script>
<template>
  <v-dialog v-model="dialog" persistent width="800">
    <template v-slot:activator="{ props }">
      <v-btn height="39" color="primary" block v-bind="props">
        تعديل بيانات الطبيب
      </v-btn>
    </template>
    <DoctorsStepperForm />
  </v-dialog>
</template>
