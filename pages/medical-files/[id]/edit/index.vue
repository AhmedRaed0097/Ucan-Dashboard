<template>
  <div>
    <h5 class="text-h5">تعديل الملف الطبي</h5>
    <v-card height="80vh" class="mt-4 pt-4 overflow-x-hidden overflow-y-auto">
      <form class="px-8 py-4">
        <v-row
          justify="space-around"
          class="tw-border-b tw-border-zinc-300 mb-6 pb-4"
        >
          <v-col cols="12">
            <h3 class="tw-text-lg">اسم العميل الثلاثي</h3>
          </v-col>
          <v-col cols="5">
            <v-text-field
              label="الاسم الاول"
              required
              variant="outlined"
            ></v-text-field>
          </v-col>
          <v-col cols="5">
            <v-text-field
              label="الاسم الاوسط"
              required
              variant="outlined"
            ></v-text-field>
          </v-col>
          <v-col cols="5">
            <v-text-field
              label="الاسم الاخير"
              required
              variant="outlined"
            ></v-text-field>
          </v-col>
          <v-col cols="5"> </v-col>
        </v-row>
        <v-row justify="space-around">
          <v-col cols="5">
            <v-text-field
              label="رقم الجوال"
              required
              variant="outlined"
            ></v-text-field>
          </v-col>

          <v-col cols="5">
            <v-text-field
              label="رقم الجوال"
              required
              variant="outlined"
            ></v-text-field>
          </v-col>

          <v-col cols="5">
            <!-- <p class="mt-n7">الجنس</p>
            <div class="d-flex tw-gap-3 mt-2">
              <v-btn
                :color="form.gender === 'MALE' ? 'primary' : '#FFF'"
                :variant="form.gender === 'MALE' ? 'flat' : 'tonal'"
                class="rounded-xl"
                >ذكر</v-btn
              >
              <v-btn color="#BDBDBD" variant="outlined" class="rounded-xl"
                >انثى</v-btn
              >
            </div> -->
            <v-select
              :items="gender"
              label="النوع"
              variant="outlined"
              autocomplete="new-password"
            ></v-select>
          </v-col>
          <v-col cols="5">
            <v-select
              :items="gender"
              label="الجنسية"
              variant="outlined"
              autocomplete="new-password"
            ></v-select>
          </v-col>
          <v-col cols="5">
            <v-text-field
              label="رقم الهوية"
              required
              variant="outlined"
            ></v-text-field>
          </v-col>
          <v-col cols="5">
            <v-text-field
              label="البريد الالكتروني"
              required
              variant="outlined"
            ></v-text-field>
          </v-col>

          <v-col cols="5" class="mb-5">
            <SharedDatePicker
              :maxDateToday="true"
              :max-date="dateBefore20Years"
              placeholder="تاريخ الميلاد"
            />
          </v-col>
          <v-col cols="5">
            <p class="tw-border tw-border-zinc-300 px-4 py-2 rounded-md">العمر : 23</p>
          </v-col>
          <v-col cols="5">
            <v-textarea
              label="سبب التعديل"
              required
              variant="outlined"
            ></v-textarea>
          </v-col>
          <v-col cols="5">
            <v-textarea label="ملاحظة" required variant="outlined"></v-textarea>
          </v-col>
        </v-row>
        <v-row justify="center" class="my-4">
          <v-col cols="4">
            <v-btn block>حفظ التعديل</v-btn>
          </v-col>
        </v-row>
      </form>
    </v-card>
  </div>
</template>
<script setup>
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
const form = ref({
  gender: 'MALE',
});

const data = reactive([
  {
    id: 1,
    label: 'رقم الملف',
    value: '1001',
  },
  {
    id: 2,
    label: 'الجوال',
    value: '0500000000',
  },
  {
    id: 3,
    label: 'الحنس',
    value: 'ذكر',
  },
  {
    id: 4,
    label: 'الجنسية',
    value: 'المملكة العربية السعودية',
  },
  {
    id: 5,
    label: 'رقم الهوية',
    value: '1010101010',
  },
  {
    id: 6,
    label: 'البريد الالكتروني',
    value: 'ahmed@gmail.com',
  },
  {
    id: 7,
    label: 'تاريخ الميلاد',
    value: '01-01-2000',
  },
  {
    id: 8,
    label: 'العر',
    value: '23',
  },
  {
    id: 9,
    label: 'انشئ بواسطة',
    value: 'سارة محمد',
  },
  {
    id: 10,
    label: 'تاريخ الانشاء',
    value: '20-08-2023',
  },
  {
    id: 11,
    label: 'عًدل بواسطة',
    value: 'رغد الزهراني',
  },
  {
    id: 12,
    label: 'تاريخ التعديل',
    value: '21-08-2023',
  },
  {
    id: 13,
    label: 'سبب التعديل',
    value: 'نص سبب التديل من قبل الموظف',
  },
  {
    id: 14,
    label: 'ملاحظة',
    value:
      'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. ',
  },
]);

const dateBefore20Years = computed(() => {
  const currentDate = new Date();
  const yearsToSubtract = 20;
  const yearsInMs = yearsToSubtract * 365 * 24 * 60 * 60 * 1000;
  const pastDate = new Date(currentDate.getTime() - yearsInMs);
  return pastDate.toISOString().slice(0, 10);
});
</script>
<style></style>
