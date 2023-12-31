<template>
  <div>
    <h5 class="text-h5">عرض الملف الطبي</h5>

    <v-row justify="space-around" class="my-sm-2">
      <v-col cols="12" sm="5" md="4">
        <v-card height="150" class="pl-2 pl-md-0">
          <div class="d-flex tw-gap-5 pr-4 align-center h-100">
            <img
              width="80"
              src="/images/users/avatar-1.jpg"
              height="35"
              alt="user"
              class="rounded-circle"
            />

            <div class="info">
              <h4 class="tw-text-2xl md:tw-text-2xl">محمد عبدالله</h4>
              <span class="text-secondary tw-text-md">حساب نشط </span>
            </div>
          </div>
        </v-card>
      </v-col>
      <v-col cols="12" sm="5" md="4">
        <v-card height="150" class="pl-2 pl-md-0">
          <div class="d-flex tw-gap-5 pr-4 align-center h-100">
            <img
              width="50"
              src="/assets/icons/wallet.svg"
              height="35"
              alt="wallet image"
              class="rounded-circle"
            />

            <div class="info">
              <h4 class="tw-text-2xl md:tw-text-2xl">رصيد المحفظة</h4>
              <span class="text-secondary tw-text-md">220 ريال </span>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <v-card height="64vh" class="mt-4 pt-4 overflow-x-hidden overflow-y-auto">
      <v-btn
        to="edit"
        color="primary"
        variant="text"
        class="position-absolute tw-top-2 tw-left-4"
        size="large"
        >تعديل الملف الطبي

        <template v-slot:append>
          <span class="mdi mdi-square-edit-outline tw-text-lg"></span>
        </template>
      </v-btn>
      <v-row justify-sm="center" v-for="obj in data" :key="obj.id" class="mt-4">
        <v-col cols="5" sm="4">
          <h3 class="md:tw-text-lg">{{ obj.label }}</h3>
        </v-col>
        <v-col cols="7" sm="4">
          <h3 class="md:tw-text-lg">{{ obj.value }}</h3>
        </v-col>
        <hr />
      </v-row>
      <v-row justify="center" class="mt-12 mb-4 pr-sm-4">
        <v-col cols="12" sm="3">
          <v-btn color="primary" variant="outlined" block>سجل المواعيد</v-btn>
        </v-col>
        <v-col cols="12" sm="3">
          <v-btn to="bundles" color="primary" variant="outlined" block
            >سجل الباقات</v-btn
          >
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>
<script setup>
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
      'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد...',
  },
]);
</script>
<style></style>
