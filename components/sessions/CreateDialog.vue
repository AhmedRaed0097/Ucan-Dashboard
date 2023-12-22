<script setup>
import { required$, minLength$ } from '@/helpers/validators';
import { useSessionStore } from '~~/stores/SessionStore';

const emit = defineEmits(['close']);
const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
});

const sessionStore = useSessionStore();

const serverErrors = ref({});
const dialog = ref(false);
const loading = ref(false);
const sessionDurations = ref(['30 دقيقة', '45 دقيقة', '60 دقيقة']);

const rules = reactive({
  customerName: {
    required$,
    minLength$: minLength$(3),
  },
  doctorName: {
    required$,
    minLength$: minLength$(3),
  },
  sessionDate: {
    required$,
  },
  sessionDuration: {
    required$,
  },
  sessionPrice: {
    required$,
  },
  paymentMethod: {
    required$,
  },
  discount: {
    required$,
  },
  tax: {
    required$,
  },
});

const form = reactive({
  customerName: '',
  doctorName: '',
  sessionDate: '',
  sessionDuration: null,
  sessionPrice: '',
  paymentMethod: null,
  discount: '',
  tax: '',
  total: '',
});
const { v$ } = useCustomVulidate(rules, form, serverErrors);

const response = computed(() => {
  return sessionStore.responseData;
});

watch(
  () => props.show,
  (newValue) => {
    dialog.value = newValue;
  },
  { deep: true }
);
const onSave = () => {
  v$.value.$validate();
  if (!v$.value.$error) {
    loading.value = true;
    sessionStore.responseData = {
      success: true,
      message: 'تم حفظ البيانات بنجاح',
    };
    setTimeout(() => {
      sessionStore.responseData = null;
      loading.value = false;
      emit('close');
    }, 3000);
  }
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
        <span class="text-h5 mr-4">اضافة جلسة جديدة</span>
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="form.customerName"
              label="اسم العميل"
              required
              variant="outlined"
              :error="v$.customerName.$errors.length > 0"
              @blur="v$.customerName.$touch"
              :error-messages="v$.customerName.$errors.map((e) => e.$message)"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="form.doctorName"
              label="اسم الطبيب"
              required
              variant="outlined"
              :error="v$.doctorName.$errors.length > 0"
              @blur="v$.doctorName.$touch"
              :error-messages="v$.doctorName.$errors.map((e) => e.$message)"
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="6">
            <v-text-field
              v-model="form.sessionDate"
              label="موعد الجلسة"
              required
              variant="outlined"
              :error="v$.sessionDate.$errors.length > 0"
              @blur="v$.sessionDate.$touch"
              :error-messages="v$.sessionDate.$errors.map((e) => e.$message)"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-select
              v-model="form.sessionDuration"
              :items="sessionDurations"
              label="مدة الجلسة"
              variant="outlined"
              autocomplete="new-password"
              :error="v$.sessionDuration.$errors.length > 0"
              @blur="v$.sessionDuration.$touch"
              :error-messages="
                v$.sessionDuration.$errors.map((e) => e.$message)
              "
            ></v-select>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="form.sessionPrice"
              label="سعر الجلسة"
              required
              variant="outlined"
              :error="v$.sessionPrice.$errors.length > 0"
              @blur="v$.sessionPrice.$touch"
              :error-messages="v$.sessionPrice.$errors.map((e) => e.$message)"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="form.paymentMethod"
              label="طريقة الدفع"
              required
              variant="outlined"
              :error="v$.paymentMethod.$errors.length > 0"
              @blur="v$.paymentMethod.$touch"
              :error-messages="v$.paymentMethod.$errors.map((e) => e.$message)"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="form.discount"
              label="الخصم"
              required
              variant="outlined"
              :error="v$.discount.$errors.length > 0"
              @blur="v$.discount.$touch"
              :error-messages="v$.discount.$errors.map((e) => e.$message)"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="form.tax"
              label="الضريبة"
              required
              variant="outlined"
              :error="v$.tax.$errors.length > 0"
              @blur="v$.tax.$touch"
              :error-messages="v$.tax.$errors.map((e) => e.$message)"
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="6">
            <v-text-field
              v-model="form.total"
              label="المجموع"
              required
              variant="outlined"
            ></v-text-field>
          </v-col>
          <v-col cols="12" class="mb-4">
            <v-btn color="primary" elevation="10" @click="onSave" class="ml-4"
              >حفظ</v-btn
            >
            <v-btn color="secondary" elevation="10" @click="emit('close')"
              >الغاء</v-btn
            >
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
