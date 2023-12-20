<script setup>
const search = ref('');
const showDialog = ref(false);

const headers = ref([
  { key: 'name', title: 'الاسم' },
  { key: 'email', title: 'البريد الالتكروني' },
  { key: 'status', title: 'الحالة' },
  { key: 'qualification', title: 'المؤهل العلمي' },
  { key: 'phone', title: 'الجوال' },
  { key: 'rate', title: 'التقييم' },
  { key: 'sessions', title: 'عدد الجلسات' },
  { title: 'الاجراء', key: 'actions', sortable: false },
]);
const dataTable = ref([
  {
    id: 1,
    name: 'علي أحمد',
    phone: 502645629,
    rate: 4,
    status: 'active',
    sessions: 6,
    qualification: 'دكتوراه',
    email: 'ali.ahmad@email.com',
  },
  {
    id: 2,
    name: 'فاطمة محمد',
    phone: 501245654,
    rate: 5,
    status: 'pending',
    sessions: 4,
    qualification: 'ماجستير',
    email: 'fatma.mohamed@email.com',
  },
  {
    id: 3,
    name: 'محمد خالد',
    phone: 500985600,
    rate: 3.5,
    status: 'active',
    sessions: 5,
    qualification: 'ماجستير',
    email: 'mohamed.khaled@email.com',
  },
  {
    id: 4,
    name: 'ريم عبدالرحمن',
    phone: 506575678,
    rate: 4.5,
    status: 'inactive',
    sessions: 6,
    qualification: 'دكتوراه',
    email: 'reem.abdulrahman@email.com',
  },
  {
    id: 5,
    name: 'يوسف حسين',
    phone: 501145644,
    rate: 3,
    status: 'active',
    sessions: 2,
    qualification: 'دكتوراه',
    email: 'youssef.hussein@email.com',
  },
  {
    id: 6,
    name: 'ليلى مصطفى',
    phone: 504325611,
    rate: 5,
    status: 'active',
    sessions: 3,
    qualification: 'ماجستير',
    email: 'leila.mustafa@email.com',
  },
  {
    id: 7,
    name: 'حسن علي',
    phone: 500005645,
    rate: 3,
    status: 'inactive',
    sessions: 1,
    qualification: 'دكتوراه',
    email: 'hasan.ali@email.com',
  },
  {
    id: 8,
    name: 'نورهان عبدالله',
    phone: 502245632,
    rate: 4,
    status: 'active',
    sessions: 7,
    qualification: 'ماجستير',
    email: 'norhan.abdullah@email.com',
  },
  {
    id: 9,
    name: 'أحمد مصطفى',
    phone: 503335678,
    rate: 5,
    status: 'active',
    sessions: 0,
    qualification: 'دكتوراه',
    email: 'ahmed.mustafa@email.com',
  },
  {
    id: 10,
    name: 'فاطمة علي',
    phone: 503242221,
    rate: 4,
    status: 'pending',
    sessions: 12,
    qualification: 'ماجستير',
    email: 'fatma.ali@email.com',
  },
  {
    id: 11,
    name: 'سامي حسين',
    phone: 503245332,
    rate: 3,
    status: 'inactive',
    sessions: 9,
    qualification: 'دكتوراه',
    email: 'sami.hussein@email.com',
  },
  {
    id: 12,
    name: 'سلمى محمود',
    phone: 501235678,
    rate: 2,
    status: 'pending',
    sessions: 3,
    qualification: 'ماجستير',
    email: 'salma.mahmoud@email.com',
  },
  {
    id: 13,
    name: 'ياسر أحمد',
    phone: 509045678,
    rate: 4,
    status: 'active',
    sessions: 0,
    qualification: 'ماجستير',
    email: 'yaser.ahmad@email.com',
  },
  {
    id: 14,
    name: 'نور علي',
    phone: 503245998,
    rate: 1,
    status: 'active',
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
  <v-row justify="space-around" class="my-sm-2">
    <v-col cols="12" sm="5" md="4">
      <v-card height="150" class="pl-2 pl-md-0">
        <div class="d-flex justify-space-around align-center h-100">
          <img
            width="80"
            src="/images/users/avatar-1.jpg"
            height="35"
            alt="user"
            class="rounded-circle"
          />

          <div class="info">
            <h4 class="tw-text-2xl md:tw-text-3xl">احمد رائد</h4>
            <span class="text-secondary">الاعلى استشارات </span>
          </div>
        </div>
      </v-card>
    </v-col>
    <v-col cols="12" sm="5" md="4">
      <v-card height="150" class="pl-2 pl-md-0">
        <div class="d-flex justify-space-around align-center h-100">
          <img
            width="80"
            src="/images/users/avatar-1.jpg"
            height="35"
            alt="user"
            class="rounded-circle"
          />

          <div class="info">
            <h4 class="tw-text-2xl md:tw-text-3xl">عبدالله محمد</h4>
            <span class="text-secondary">الاعلى تقييم </span>
          </div>
        </div>
      </v-card>
    </v-col>
  </v-row>
  <v-row justify="space-between" class="mt-4 ml-sm-2">
    <v-col cols="12" sm="5" md="3">
      <v-btn
        elevation="10"
        @click="showDialog = true"
        height="39"
        color="primary"
        block
      >
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

  <v-row class="mt-4">
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
          <v-data-table
            :headers="headers"
            :items="dataTable"
            :search="search"
            items-per-page="5"
          >
            <template v-slot:[`item.status`]="{ item }">
              <v-chip
                v-if="item.status === 'active' || item.status === 'inactive'"
                :color="item.status === 'active' ? 'success' : 'error'"
                :text="item.status === 'active' ? 'مفعل' : 'محظور'"
                class="tw-w-16 justify-center"
                label
                size="small"
              ></v-chip>
              <v-chip
                v-else
                color="info"
                text="لم يرسل للمراجعة"
                class="tw-w-26 justify-center"
                label
                size="small"
              ></v-chip>
            </template>
            <template v-slot:[`item.rate`]="{ item }">
              <v-rating
                :modelValue="item.rate"
                color="warning"
                size="15"
                readonly
              ></v-rating>
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
