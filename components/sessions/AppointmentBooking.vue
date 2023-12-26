<script setup>
import { required$, minLength$ } from '@/helpers/validators';
import { useSessionStore } from '~~/stores/SessionStore';

const emit = defineEmits(['close']);
const props = defineProps({
  formType: {
    type: String,
    default: 'add',
  },
  show: {
    type: Boolean,
    default: false,
  },
  appointmentData: {
    type: Object,
    default: () => null,
  },
});

const sessionStore = useSessionStore();

const serverErrors = ref({});
const dialog = ref(false);
const loading = ref(false);
const approvedStatus = ref(['مؤكد', 'غير مؤكد']);
const status = ref(['جاري', 'قادم', 'منتهي']);
const sessionDurations = ref(['30 دقيقة', '45 دقيقة', '60 دقيقة']);

const form = ref({
  patientName: '',
  doctorName: '',
  status: null,
  confirmationStatus: null,
  patientProfileNumber: 654654,
  date: '',
  from: null,
  to: null,
  note: '',
});

const rules = reactive({
  patientName: {
    required$,
    minLength$: minLength$(3),
  },
  confirmationStatus: {
    required$,
  },
  status: {
    required$,
  },
  note: {
    required$,
  },
  from: {
    required$,
  },
  to: {
    required$,
  },
});

const patientProfileNumber = ref(null);

const { v$ } = useCustomVulidate(rules, form.value, serverErrors);

const response = computed(() => {
  return sessionStore.responseData;
});

watch(
  () => props.show,
  (newValue) => {
    dialog.value = newValue;
    if (!props.show) {
      form.value = {
        patientName: '',
        doctorName: '',
        status: null,
        confirmationStatus: null,
        patientProfileNumber: 654654,
        date: '',
        from: null,
        to: null,
        note: '',
      };
    }
  },
  { deep: true }
);

watch(
  () => props.appointmentData,

  (newValue) => {
    if (newValue) {
      for (const key in form.value) {
        form.value[key] = newValue[key];
      }
    }
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

  <v-dialog v-model="dialog" persistent width="800" height="max-content">
    <v-card height="100%" class="rounded-lg py-4">
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
        <span v-if="formType === 'add'" class="text-h5 mr-4">حجز موعد</span>
        <span v-else class="text-h5 mr-4">تعديل موعد</span>
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12" sm="6">
            <v-select
              v-model="patientProfileNumber"
              :items="sessionDurations"
              label="اختيار عميل"
              variant="outlined"
              autocomplete="new-password"
              :disabled="formType !== 'add'"
            ></v-select>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="form.date"
              label="تاريخ الحجز"
              required
              variant="outlined"
              readonly
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="6">
            <v-text-field
              v-model="form.doctorName"
              label="اسم الطبيب"
              required
              variant="outlined"
              :error="v$.patientName.$errors.length > 0"
              @blur="v$.patientName.$touch"
              :error-messages="v$.patientName.$errors.map((e) => e.$message)"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="form.patientName"
              label="اسم المريض"
              required
              variant="outlined"
              :error="v$.patientName.$errors.length > 0"
              @blur="v$.patientName.$touch"
              :error-messages="v$.patientName.$errors.map((e) => e.$message)"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="form.patientProfileNumber"
              label="رقم ملف المريض"
              required
              variant="outlined"
              readonly
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <SharedTimePicker
              v-model="form.from"
              placeholder="من"
              :error="v$.from.$error"
              @blur="v$.from.$touch"
            />
            <span v-if="v$.from" class="tw-text-xs text-error">
              {{ v$.from ? v$.from.$errors.map((e) => e.$message)[0] : "" }}
            </span>
          </v-col>
          <v-col cols="12" sm="6">
            <SharedTimePicker
              v-model="form.to"
              placeholder="إلى"
              :error="v$.to.$error"
              @blur="v$.to.$touch"
            />
            <span v-if="v$.to" class="tw-text-xs text-error">
              {{ v$.to ? v$.to.$errors.map((e) => e.$message)[0] : "" }}
            </span>
          </v-col>

          <v-col cols="12" sm="6">
            <v-select
              v-model="form.confirmationStatus"
              :items="approvedStatus"
              label="حالة التاكيد"
              variant="outlined"
              autocomplete="new-password"
              :error="v$.confirmationStatus.$errors.length > 0"
              @blur="v$.confirmationStatus.$touch"
              :error-messages="
                v$.confirmationStatus.$errors.map((e) => e.$message)
              "
            ></v-select>
          </v-col>
          <v-col cols="12" sm="6">
            <v-select
              v-model="form.status"
              :items="status"
              label="الحالة "
              variant="outlined"
              autocomplete="new-password"
              :error="v$.status.$errors.length > 0"
              @blur="v$.status.$touch"
              :error-messages="v$.status.$errors.map((e) => e.$message)"
            ></v-select>
          </v-col>
          <v-col cols="12" sm="6">
            <v-checkbox color="primary" label="موعد مؤقت"></v-checkbox>
          </v-col>

          <v-col cols="12" sm="6">
            <v-textarea
              v-model="form.note"
              label="ملاحظة"
              variant="outlined"
              :error="v$.note.$errors.length > 0"
              @blur="v$.note.$touch"
              :error-messages="v$.note.$errors.map((e) => e.$message)"
            />
          </v-col>
          <v-col cols="12">
            <v-btn
              v-if="formType === 'add'"
              color="primary"
              elevation="10"
              @click="onSave"
              class="ml-4"
              >جديد</v-btn
            >

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
