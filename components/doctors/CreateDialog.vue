<script setup>
import { Steppy } from 'vue3-steppy';

const emit = defineEmits(['close']);
const stepsText = ref([
  {
    title: 'المعلومات الشخصية',
    iconSuccess: null,
    isValid: true,
  },
  {
    title: 'المعلومات المهنيؤية',
    iconSuccess: null,
    isValid: true,
  },
  {
    title: 'إعدادات الاستشارة',
    iconSuccess: null,
    isValid: true,
  },
]);
const dialog = ref(false);
const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
});

const step = ref(1);

watch(
  () => props.show,
  (newValue) => {
    dialog.value = newValue;
  },
  { deep: true }
);
</script>
<template>
  <v-dialog v-model="dialog" persistent width="800">
    <v-card elevation="0" class="rounded-lg pt-4">
      <v-btn
        class="close-dialog-btn"
        variant="text"
        icon
        dark
        @click="emit('close')"
      >
        <img width="20" src="~/assets/icons/close.svg" alt="" />
      </v-btn>
      <v-card-title>
        <span class="text-h5 mr-4">اضافة طبيب جديد</span>
      </v-card-title>
      <v-card-text>
        <Steppy
          v-model:step="step"
          nextText="التالي"
          backText="السابق"
          doneText="حفظ"
          primaryColor1="#81B199"
          :circleSize="35"
          class="text-sm"
          :tabs="stepsText"
        >
          <template #1>
            <DoctorsPersonalData />
          </template>
          <template #2>
            <DoctorsProfessionalData />
          </template>
          <template #3>
            <DoctorsCounselingData />
          </template>
        </Steppy>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
