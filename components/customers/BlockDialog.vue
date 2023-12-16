<template>
  <div class="text-center">
    <v-btn width="70" @click="dialog = true" variant="outlined" size="small" color="error">
      <template #prepend>
        <span class="mdi mdi-close-circle-outline"></span>
      </template>
      حظر
    </v-btn>
    <v-dialog v-model="dialog" persistent class="max-[500px]:tw-w-full  max-[640px]:tw-w-8/12 sm:tw-w-2/3 md:tw-w-1/2 lg:tw-w-5/12 xl:tw-w-1/3 2xl:tw-w-1/4">
      <v-card>
        <v-card-text>
          <div class="d-flex flex-column align-center tw-gap-4">
            <img
              src="~/assets/icons/warning-circle.svg"
              alt="warning icon"
              class="tw-w-32"
            />
            <span class="tw-text-xl tw-font-bold">تحذير</span>
            <span>هل انت متأكد؟</span>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn color="secondary" @click="dialog = false" variant="elevated"
            >الغاء</v-btn
          >
          <v-btn color="primary" variant="elevated" @click="Save">نعم</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script setup>
const props = defineProps({
  customerId: {
    type: [String,Number],
  },
});
const dialog = ref(false);

const Save = () => {
  console.log('props ', props.customerId);
  dialog.value = false;
};
</script>
