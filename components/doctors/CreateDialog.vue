<script setup>
const emit = defineEmits(['close']);

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
    <v-card class="rounded-lg pt-4">
      <v-btn
        class="close-dialog-btn"
        variant="text"
        icon
        dark
        @click="emit('close')"
      >
      <img width="20" src="~/assets/icons/close.svg" alt="">
      </v-btn>
      <v-card-title>
        <span class="text-h5 mr-4">اضافة طبيب جديد</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-stepper
            v-model="step"
            alt-labels
            hide-actions
            color="primary"
            :items="[
              'المعلومات الشخصية',
              'المعلومات المهنية',
              'إعدادات الاستشارة',
            ]"
          >
            <template v-slot:[`item.1`]>
              <DoctorsPersonalData @next="step++" />
            </template>

            <template v-slot:[`item.2`]>
              <DoctorsProfessionalData @next="step++" @prev="step--" />
            </template>
            <template v-slot:[`item.3`]>
              <DoctorsCounselingData @prev="step--" @close="emit('close')" />
            </template>
          </v-stepper>
        </v-container>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
