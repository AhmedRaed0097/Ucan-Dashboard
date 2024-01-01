<template>
  <v-card
    height="max-content"
    class="mt-4 py-4 overflow-x-hidden overflow-y-auto mx-auto"
  >
    <form class="px-8 py-4">
      <v-row justify-sm="space-around">
        <v-col cols="12" sm="6" md="5">
          <v-text-field
            v-model="form.firstName"
            label="الاسم الاول"
            required
            variant="outlined"
            :error="v$.firstName.$errors.length > 0"
            :error-messages="v$.firstName.$errors.map((e) => e.$message)"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="5">
          <v-text-field
            v-model="form.middleName"
            label="الاسم الاوسط"
            required
            variant="outlined"
            :error="v$.middleName.$errors.length > 0"
            :error-messages="v$.middleName.$errors.map((e) => e.$message)"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="5">
          <v-text-field
            v-model="form.lastName"
            label="الاسم الاخير"
            required
            variant="outlined"
            :error="v$.lastName.$errors.length > 0"
            :error-messages="v$.lastName.$errors.map((e) => e.$message)"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="5">
          <v-text-field
            v-model="form.phone"
            label="رقم الجوال"
            required
            variant="outlined"
            :error="v$.phone.$errors.length > 0"
            :error-messages="v$.phone.$errors.map((e) => e.$message)"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="5">
          <v-select
            v-model="form.gender"
            :items="gender"
            label="الجنس"
            variant="outlined"
            autocomplete="new-password"
            :error="v$.gender.$errors.length > 0"
            :error-messages="v$.gender.$errors.map((e) => e.$message)"
          ></v-select>
        </v-col>
        <v-col cols="12" sm="6" md="5">
          <v-select
            v-model="form.nationality"
            :items="gender"
            label="الجنسية"
            variant="outlined"
            autocomplete="new-password"
            :error="v$.nationality.$errors.length > 0"
            :error-messages="v$.nationality.$errors.map((e) => e.$message)"
          ></v-select>
        </v-col>
        <v-col cols="12" sm="6" md="5">
          <v-text-field
            v-model="form.idNumber"
            label="رقم الهوية"
            required
            variant="outlined"
            :error="v$.idNumber.$errors.length > 0"
            :error-messages="v$.idNumber.$errors.map((e) => e.$message)"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="5">
          <v-text-field
            v-model="form.email"
            label="البريد الالكتروني"
            required
            variant="outlined"
            :error="v$.email.$errors.length > 0"
            :error-messages="v$.email.$errors.map((e) => e.$message)"
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="6" md="5" class="mb-5">
          <SharedDatePicker
            v-model="form.birthDay"
            :maxDateToday="true"
            :max-date="dateBefore20Years"
            placeholder="تاريخ الميلاد"
            :error-message="v$.birthDay.$errors.map((e) => e.$message)[0]"
          />
        </v-col>
        <v-col cols="12" sm="6" md="5">
          <p class="tw-border tw-border-zinc-300 px-4 py-2 rounded-md">
            العمر : {{ form.age }}
          </p>
        </v-col>
        <v-col cols="12" sm="6" md="5" v-if="props.fileData">
          <v-textarea
            v-model="form.updateReason"
            label="سبب التعديل"
            required
            variant="outlined"
            :error="v$.updateReason.$errors.length > 0"
            :error-messages="v$.updateReason.$errors.map((e) => e.$message)"
          ></v-textarea>
        </v-col>
        <v-col cols="12" sm="6" md="5">
          <v-textarea
            v-model="form.note"
            label="ملاحظة"
            required
            variant="outlined"
            :error="v$.note.$errors.length > 0"
            :error-messages="v$.note.$errors.map((e) => e.$message)"
          ></v-textarea>
        </v-col>
      </v-row>
      <v-row justify="center" class="mt-8">
        <v-col cols="4">
          <v-btn @click="validate" block>حفظ</v-btn>
        </v-col>
      </v-row>
    </form>
  </v-card>
</template>

<script setup>
import { required$ } from '@/helpers/validators';

const props = defineProps({
  fileData: {
    type: Object,
    default: () => {},
  },
});

const serverErrors = ref({});
const form = ref({
  firstName: '',
  middleName: '',
  lastName: '',
  phone: '',
  gender: null,
  nationality: null,
  idNumber: '',
  email: '',
  birthDay: null,
  age: '',
  updateReason: '',
  note: '',
});

const gender = ref([
  {
    title: 'ذكر',
    value: 'male',
  },
  {
    title: 'الانثى',
    value: 'female',
  },
]);

const dateBefore20Years = computed(() => {
  const currentDate = new Date();
  const yearsToSubtract = 20;
  const yearsInMs = yearsToSubtract * 365 * 24 * 60 * 60 * 1000;
  const pastDate = new Date(currentDate.getTime() - yearsInMs);
  return pastDate.toISOString().slice(0, 10);
});
const rules = reactive({
  firstName: {
    required$,
  },
  middleName: {
    required$,
  },
  lastName: {
    required$,
  },
  phone: {
    required$,
  },
  gender: {
    required$,
  },
  nationality: {
    required$,
  },
  idNumber: {
    required$,
  },
  email: {
    required$,
  },
  birthDay: {
    required$,
  },
  updateReason: {
    required$,
  },
  note: {
    required$,
  },
});

const { v$ } = useCustomVulidate(rules, form.value, serverErrors);

watch(
  () => props.fileData,
  (newValue) => {
    form.value = newValue;
  },
  { deep: true }
);

watch(
  () => form.birthDay,
  (newValue) => {
    console.log('newValue', newValue);
    countAge(newValue);
  },
  { deep: true }
);

function countAge(selectedDate) {
  console.log('selectedDate1', selectedDate);
  selectedDate = new Date(selectedDate);
  console.log('selectedDate2', selectedDate);
  const ageDifferenceInMilliseconds = Date.now() - selectedDate.getTime();
  const ageInYears = Math.floor(
    ageDifferenceInMilliseconds / (1000 * 3600 * 24 * 365.2425)
  );
  return ageInYears;
}

function validate() {
  v$.value.$validate();
  console.log('v$.birthDay ',v$.value.birthDay);
}
</script>
