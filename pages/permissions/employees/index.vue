<script setup>
import { useDoctorStore } from '~~/stores/DoctorStore';

const doctorStore = useDoctorStore();

const search = ref('');
const showDialog = ref(false);

const headers = ref([
  { key: 'name', title: 'الاسم' },
  { key: 'age', title: 'العمر' },
  { key: 'city', title: 'المدينة' },
  { key: 'country', title: 'البلد' },
  { key: 'email', title: 'البريد الالتكروني' },
  { title: 'الاجراء', key: 'actions', sortable: false },
]);
const dataTable = ref([
  {
    id: 1,
    name: 'علي أحمد',
    age: 28,
    city: 'الرياض',
    country: 'المملكة العربية السعودية',
    email: 'ali.ahmad@email.com',
  },
  {
    id: 2,
    name: 'فاطمة محمد',
    age: 35,
    city: 'القاهرة',
    country: 'مصر',
    email: 'fatma.mohamed@email.com',
  },
  {
    id: 3,
    name: 'محمد خالد',
    age: 22,
    city: 'دبي',
    country: 'الإمارات العربية المتحدة',
    email: 'mohamed.khaled@email.com',
  },
  {
    id: 4,
    name: 'ريم عبدالرحمن',
    age: 25,
    city: 'جدة',
    country: 'المملكة العربية السعودية',
    email: 'reem.abdulrahman@email.com',
  },
  {
    id: 5,
    name: 'يوسف حسين',
    age: 31,
    city: 'الخرطوم',
    country: 'السودان',
    email: 'youssef.hussein@email.com',
  },
  {
    id: 6,
    name: 'ليلى مصطفى',
    age: 29,
    city: 'الإسكندرية',
    country: 'مصر',
    email: 'leila.mustafa@email.com',
  },
  {
    id: 7,
    name: 'حسن علي',
    age: 33,
    city: 'المدينة المنورة',
    country: 'المملكة العربية السعودية',
    email: 'hasan.ali@email.com',
  },
  {
    id: 8,
    name: 'نورهان عبدالله',
    age: 27,
    city: 'الدمام',
    country: 'المملكة العربية السعودية',
    email: 'norhan.abdullah@email.com',
  },
  {
    id: 9,
    name: 'أحمد مصطفى',
    age: 26,
    city: 'القاهرة',
    country: 'مصر',
    email: 'ahmed.mustafa@email.com',
  },
  {
    id: 10,
    name: 'فاطمة علي',
    age: 24,
    city: 'الرياض',
    country: 'المملكة العربية السعودية',
    email: 'fatma.ali@email.com',
  },
  {
    id: 11,
    name: 'سامي حسين',
    age: 30,
    city: 'الخرطوم',
    country: 'السودان',
    email: 'sami.hussein@email.com',
  },
  {
    id: 12,
    name: 'سلمى محمود',
    age: 32,
    city: 'دمشق',
    country: 'سوريا',
    email: 'salma.mahmoud@email.com',
  },
  {
    id: 13,
    name: 'ياسر أحمد',
    age: 29,
    city: 'جدة',
    country: 'المملكة العربية السعودية',
    email: 'yaser.ahmad@email.com',
  },
  {
    id: 14,
    name: 'نور علي',
    age: 28,
    city: 'المدينة المنورة',
    country: 'المملكة العربية السعودية',
    email: 'nour.ali@email.com',
  },
  {
    id: 15,
    name: 'لينا محمد',
    age: 26,
    city: 'الإسكندرية',
    country: 'مصر',
    email: 'leena.mohamed@email.com',
  },
  {
    id: 16,
    name: 'عبدالله يوسف',
    age: 34,
    city: 'الرياض',
    country: 'المملكة العربية السعودية',
    email: 'abdullah.youssef@email.com',
  },
  {
    id: 17,
    name: 'ريما حسين',
    age: 31,
    city: 'الدمام',
    country: 'المملكة العربية السعودية',
    email: 'reema.hussein@email.com',
  },
  {
    id: 18,
    name: 'عمر محمود',
    age: 27,
    city: 'بغداد',
    country: 'العراق',
    email: 'omar.mahmoud@email.com',
  },
  {
    id: 19,
    name: 'لمى أحمد',
    age: 30,
    city: 'القاهرة',
    country: 'مصر',
    email: 'lamia.ahmad@email.com',
  },
  {
    id: 20,
    name: 'محمد نور',
    age: 28,
    city: 'الرياض',
    country: 'المملكة العربية السعودية',
    email: 'mohamed.nour@email.com',
  },
]);
</script>
<template>
  <DoctorsCreateDialog :show="showDialog" @close="showDialog = false" />
  <h3 class="text-h4 pl-7 mt-2 mb-8 mb-sm-0">صلاحيات الموظفين</h3>

  <v-row justify="center" justify-sm="end" class="ml-sm-2">
    <v-col cols="12" sm="4" md="3">
      <v-text-field
          v-model="search"
          prepend-inner-icon="mdi-magnify"
          density="compact"
          label="بحث"
          single-line
          flat
          hide-details
          variant="solo-filled"
          clearable
        ></v-text-field>
    </v-col>
  </v-row>

  <v-row class="mt-4 pl-sm-5">
    <v-col cols="12" sm="4" md="2">
      <v-btn @click="showDialog = true" height="39" color="primary" block>
        <template v-slot:prepend>
          <v-icon> mdi-plus </v-icon>
        </template>
        إنشاء طبيب جديد
      </v-btn>
    </v-col>
    <v-col v-for="i in 5" :key="i" cols="6" sm="4" md="2">
      <v-combobox
        label="فلترة"
        :items="[
          'California',
          'Colorado',
          'Florida',
          'Georgia',
          'Texas',
          'Wyoming',
        ]"
        variant="outlined"
        density="compact"
        color="primary"
        hide-details
      ></v-combobox>
    </v-col>
  </v-row>
  <v-row>
    <v-col cols="12" md="12">
      <v-card elevation="10" class="withbg">
        <v-card-item class="pa-0">
          <v-data-table :headers="headers" :items="dataTable" :search="search">
            <template v-slot:[`item.actions`]="{ item }">
              <div class="d-flex justify-space-between">
                <v-btn
                  icon
                  :to="`/doctors/${item.id}`"
                  variant="text"
                  size="small"
                >
                  <span class="mdi mdi-square-edit-outline"></span>

                  تعديل
                </v-btn>
                <v-btn
                  icon
                  :to="`/doctors/${item.id}`"
                  variant="text"
                  size="small"
                >
                  <span class="mdi mdi-close-circle-outline"></span>

                  حذف
                </v-btn>
              </div>
            </template>
          </v-data-table>
        </v-card-item>
      </v-card>
    </v-col>
  </v-row>
</template>
