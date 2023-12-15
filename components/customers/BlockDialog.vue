<template>
  <div class="text-center">
    <v-btn @click="dialog = true" variant="outlined" size="small" color="error">
      <span class="mdi mdi-close-circle-outline"></span>

      حظر
    </v-btn>
    <v-dialog v-model="dialog" persistent width="auto"
      >”
      <v-card width="470">
        <v-card-text>
          <div class="d-flex flex-column align-center tw-gap-4">
            <img
              width="150"
              src="~/assets/icons/warning-circle.svg"
              alt="warning icon"
            />
            <span class="tw-text-xl tw-font-bold">تحذير</span>
            <span>هل انت متأكد؟</span>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn color="secondary" @click="dialog = false" variant="elevated"
            >الغاء</v-btn
          >
          <v-btn color="primary" variant="elevated" @click="dialog = false"
            >نعم</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script setup>
const dialog = ref(false);
</script>
