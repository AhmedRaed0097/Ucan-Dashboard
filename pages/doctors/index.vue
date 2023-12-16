<script setup>
const search = ref('');
const showDialog = ref(false);

const headers = ref([
  { key: 'name', title: 'الاسم' },
  { key: 'email', title: 'البريد الالتكروني' },
  { key: 'status', title: 'الحالة' },
  { key: 'qualification', title: 'المؤهل العلمي' },
  { key: 'phone', title: 'الجوال' },
  { key: 'sessions', title: 'عدد الجلسات' },
  { title: 'الاجراء', key: 'actions', sortable: false },
]);
const dataTable = ref([
  {
    id: 1,
    name: 'علي أحمد',
    phone: 502645629,
    status: true,
    sessions: 6,
    qualification: 'دكتوراه',
    email: 'ali.ahmad@email.com',
  },
  {
    id: 2,
    name: 'فاطمة محمد',
    phone: 501245654,
    status: true,
    sessions: 4,
    qualification: 'ماجستير',
    email: 'fatma.mohamed@email.com',
  },
  {
    id: 3,
    name: 'محمد خالد',
    phone: 500985600,
    status: true,
    sessions: 5,
    qualification: 'ماجستير',
    email: 'mohamed.khaled@email.com',
  },
  {
    id: 4,
    name: 'ريم عبدالرحمن',
    phone: 506575678,
    status: false,
    sessions: 6,
    qualification: 'دكتوراه',
    email: 'reem.abdulrahman@email.com',
  },
  {
    id: 5,
    name: 'يوسف حسين',
    phone: 501145644,
    status: true,
    sessions: 2,
    qualification: 'دكتوراه',
    email: 'youssef.hussein@email.com',
  },
  {
    id: 6,
    name: 'ليلى مصطفى',
    phone: 504325611,
    status: true,
    sessions: 3,
    qualification: 'ماجستير',
    email: 'leila.mustafa@email.com',
  },
  {
    id: 7,
    name: 'حسن علي',
    phone: 500005645,
    status: false,
    sessions: 1,
    qualification: 'دكتوراه',
    email: 'hasan.ali@email.com',
  },
  {
    id: 8,
    name: 'نورهان عبدالله',
    phone: 502245632,
    status: true,
    sessions: 7,
    qualification: 'ماجستير',
    email: 'norhan.abdullah@email.com',
  },
  {
    id: 9,
    name: 'أحمد مصطفى',
    phone: 503335678,
    status: true,
    sessions: 0,
    qualification: 'دكتوراه',
    email: 'ahmed.mustafa@email.com',
  },
  {
    id: 10,
    name: 'فاطمة علي',
    phone: 503242221,
    status: true,
    sessions: 12,
    qualification: 'ماجستير',
    email: 'fatma.ali@email.com',
  },
  {
    id: 11,
    name: 'سامي حسين',
    phone: 503245332,
    status: false,
    sessions: 9,
    qualification: 'دكتوراه',
    email: 'sami.hussein@email.com',
  },
  {
    id: 12,
    name: 'سلمى محمود',
    phone: 501235678,
    status: true,
    sessions: 3,
    qualification: 'ماجستير',
    email: 'salma.mahmoud@email.com',
  },
  {
    id: 13,
    name: 'ياسر أحمد',
    phone: 509045678,
    status: true,
    sessions: 0,
    qualification: 'ماجستير',
    email: 'yaser.ahmad@email.com',
  },
  {
    id: 14,
    name: 'نور علي',
    phone: 503245998,
    status: true,
    sessions: 2,
    qualification: 'ماجستير',
    email: 'nour.ali@email.com',
  },
]);
</script>
<template>
  <DoctorsCreateDialog :show="showDialog" @close="showDialog = false" />
  <h3
    class="tw-text-xl sm:tw-text-2xl md:tw-text-3xl 2xl:tw-text-4xl pl-7 mt-2 mb-8 mb-sm-0"
  >
    الاطباء
  </h3>

  <v-row justify="space-between"  class="mt-4 ml-sm-2">
    <v-col cols="12" sm="5" md="3">
      <v-btn @click="showDialog = true" height="39" color="primary" block>
        <template v-slot:prepend>
          <v-icon> mdi-plus </v-icon>
        </template>
        إنشاء طبيب جديد
      </v-btn>
    </v-col>
    <v-col cols="12" sm="5" md="3">
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
    <v-col cols="6" sm="4" md="2">
      <v-combobox
        label="المؤهل العلمي"
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
    <v-col cols="6" sm="4" md="2">
      <v-combobox
        label="المسمى الوظيفي"
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
    <v-col cols="6" sm="4" md="2">
      <v-combobox
        label="التصنيف"
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
    <v-col cols="6" sm="4" md="2">
      <v-combobox
        label="الفئة"
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
    <v-col cols="6" sm="4" md="2">
      <v-combobox
        label="حالة المستخدم"
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
    <v-col cols="6" sm="4" md="2">
      <v-combobox
        label="نوع الانضمام"
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
            <template v-slot:[`item.status`]="{ item }">
              <v-chip
                :color="item.status ? 'success' : 'error'"
                :text="item.status ? 'مفعل' : 'محظور'"
                class="text-uppercase"
                label
                size="small"
              ></v-chip>
            </template>

            <template v-slot:[`item.actions`]="{ item }">
              <div class="d-flex justify-space-between justify-md-start">
                <v-btn
                  :to="`/doctors/${item.id}/show`"
                  variant="text"
                  size="small"
                >
                  <v-icon size="x-small" color="primary" class="mr-1">
                    mdi-eye
                  </v-icon>
                  عرض
                </v-btn>
                <v-btn
                  :to="`/doctors/${item.id}/edit`"
                  variant="text"
                  size="small"
                >
                  <span class="mdi mdi-square-edit-outline"></span>

                  تعديل
                </v-btn>
              </div>
            </template>
          </v-data-table>
        </v-card-item>
      </v-card>
    </v-col>
  </v-row>
</template>
