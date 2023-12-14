<template>
  <v-card class="overflow-y-auto pb-16" height="90vh">
    <v-tabs v-model="tab">
      <v-tab value="one">اعدادات الاستشارة</v-tab>
      <v-tab value="two">الجدول</v-tab>
      <v-tab value="three">الدراسة والتدريب</v-tab>
      <v-tab value="four">الرخصة الظبية</v-tab>
      <v-tab value="five">الشهادات</v-tab>
      <v-tab value="six">التقييمات</v-tab>
      <v-tab value="seven">معلومات البنك</v-tab>
    </v-tabs>

    <v-card-text>
      <v-window v-model="tab">
        <v-window-item value="one">
          <DoctorsShowConsultantData />
        </v-window-item>
        <v-window-item value="two">
          <DoctorsShowAppointmentsData />
        </v-window-item>
        <v-window-item value="three">
          <DoctorsShowStudyTrainingData />
        </v-window-item>
        <v-window-item value="four">
          <DoctorsShowMedicalLicense />
        </v-window-item>
        <v-window-item value="five">
          <DoctorsShowCertificates />
        </v-window-item>
        <v-window-item value="six">
          <DoctorsShowRates />
        </v-window-item>
        <v-window-item value="seven">
          <DoctorsShowBankData />
        </v-window-item>
      </v-window>
    </v-card-text>
  </v-card>
</template>
<script setup>
const tab = ref(null);
</script>
<style></style>
