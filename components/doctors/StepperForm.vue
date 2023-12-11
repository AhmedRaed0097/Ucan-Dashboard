<template>
  <v-card class="rounded-lg pt-4">
    <v-card-title>
      <span class="text-h5 mr-4">اضافة طبيب جديد</span>
    </v-card-title>
    <v-card-text>
      <v-container>
        <v-form>
          <v-stepper
            v-model="step"
            prev-text="السابق"
            next-text="التالي"
            @click:next="step++"
            @click:prev="step--"
            alt-labels
            color="primary"
            :items="[
              'المعلومات الشخصية',
              'المعلومات المهنية',
              'إعدادات الاستشارة',
            ]"
          >
            <template v-slot:[`item.1`]>
              <DoctorsPersonalData />
            </template>

            <template v-slot:[`item.2`]>
              <DoctorsProfessionalData />
            </template>
            <template v-slot:[`item.3`]>
              <DoctorsCounselingData />
            </template>
          </v-stepper>
        </v-form>
      </v-container>
    </v-card-text>
  </v-card>
</template>
<script setup>
const step = ref(1);
</script>
<style></style>
