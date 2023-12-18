<script setup>
import { useDoctorStore } from '~~/stores/DoctorStore';

import { Steppy } from 'vue3-steppy';

const doctorStore = useDoctorStore();
const emit = defineEmits(['close']);
const stepsText = reactive([
  {
    title: 'المعلومات الشخصية',
    iconSuccess: null,
    isValid: false,
  },
  {
    title: 'المعلومات المهنيؤية',
    iconSuccess: null,
    isValid: false,
  },
  {
    title: 'إعدادات الاستشارة',
    iconSuccess: null,
    isValid: false,
  },
]);
const dialog = ref(false);
const loading = ref(false);
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

const response = computed(() => {
  return doctorStore.responseData;
});
function onSuccess(index) {
  stepsText[index].isValid = true;
}

function onError(index) {
  stepsText[index].isValid = false;
}

const onSave = (c) => {
  console.log('SAVE', c);
  loading.value = true;
  doctorStore.responseData = {
    success: true,
    message: 'تم حفظ البيانات بنجاح',
  };
  setTimeout(() => {
    doctorStore.responseData = null;
    loading.value = false;
    emit('close');
    step.value = 1;
    doctorStore.resetForm();
  }, 3000);
};
</script>
<template>
  <SharedResponseAlert :response="response" />

  <v-dialog v-model="dialog" persistent width="800">
    <v-card elevation="0" class="rounded-lg pt-4">
      <v-btn
        elevation="0"
        class="close-dialog-btn"
        variant="text"
        icon
        @click="emit('close')"
      >
        <span class="mdi mdi-close"></span>
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
          :finalize="onSave"
          :loading="loading"
        >
          <template #1>
            <DoctorsPersonalData @success="onSuccess(0)" @error="onError(0)" />
          </template>
          <template #2>
            <DoctorsProfessionalData
              @success="onSuccess(1)"
              @error="onError(1)"
            />
          </template>
          <template #3>
            <DoctorsCounselingData
              @success="onSuccess(2)"
              @error="onError(2)"
            />
          </template>
        </Steppy>
        <!-- <v-btn @click="step++" color="primary">التالي</v-btn> -->
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
