<script setup>
const search = ref('');

const headers = ref([
  { key: 'name', title: 'الاسم' },
  { key: 'email', title: 'البريد الالتكروني' },
  { key: 'status', title: 'الحالة' },
  { key: 'phone', title: 'الجوال' },
  { key: 'sessions', title: 'عدد الجلسات' },
  { key: 'wallet', title: 'رصيد المحفظة' },
  { title: 'الاجراء', key: 'actions', sortable: false, width: '150' },
]);
const dataTable = ref([
  {
    id: 1,
    name: 'علي أحمد',
    phone: 502645629,
    sessions: 3,
    wallet:200,
    status: true,
    email: 'ali.ahmad@email.com',
  },
  {
    id: 2,
    name: 'فاطمة محمد',
    phone: 501245654,
    sessions: 2,
    wallet:150,
    status: true,
    email: 'fatma.mohamed@email.com',
  },
  {
    id: 3,
    name: 'محمد خالد',
    phone: 500985600,
    sessions: 6,
    wallet:400,
    status: true,
    email: 'mohamed.khaled@email.com',
  },
  {
    id: 4,
    name: 'ريم عبدالرحمن',
    phone: 506575678,
    sessions: 1,
    wallet:120,
    status: false,
    email: 'reem.abdulrahman@email.com',
  },
  {
    id: 5,
    name: 'يوسف حسين',
    phone: 501145644,
    sessions: 4,
    wallet:200,
    status: true,
    city: 'الخرطوم',
    country: 'السودان',
    email: 'youssef.hussein@email.com',
  },
  {
    id: 6,
    name: 'ليلى مصطفى',
    phone: 504325611,
    sessions: 3,
    wallet:300,
    status: true,
    email: 'leila.mustafa@email.com',
  },
  {
    id: 7,
    name: 'حسن علي',
    phone: 500005645,
    sessions: 2,
    wallet:80,
    status: false,
    email: 'hasan.ali@email.com',
  },
  {
    id: 8,
    name: 'نورهان عبدالله',
    phone: 502245632,
    sessions: 5,
    wallet:900,
    status: true,
    email: 'norhan.abdullah@email.com',
  },
  {
    id: 9,
    name: 'أحمد مصطفى',
    phone: 503335678,
    sessions: 7,
    wallet:400,
    status: true,
    email: 'ahmed.mustafa@email.com',
  },
  {
    id: 10,
    name: 'فاطمة علي',
    phone: 503242221,
    sessions: 8,
    wallet:74,
    status: true,
    email: 'fatma.ali@email.com',
  },
  {
    id: 11,
    name: 'سامي حسين',
    phone: 503245332,
    sessions: 6,
    wallet:42,
    status: false,
    email: 'sami.hussein@email.com',
  },
  {
    id: 12,
    name: 'سلمى محمود',
    phone: 501235678,
    sessions: 4,
    wallet:500,
    status: true,
    email: 'salma.mahmoud@email.com',
  },
  {
    id: 13,
    name: 'ياسر أحمد',
    phone: 509045678,
    sessions: 6,
    wallet:300,
    status: true,
    email: 'yaser.ahmad@email.com',
  },
  {
    id: 14,
    name: 'نور علي',
    phone: 503245998,
    sessions: 2,
    wallet:85,
    status: true,
    email: 'nour.ali@email.com',
  },
]);
</script>
<template>
  <h3
    class="tw-text-xl sm:tw-text-2xl md:tw-text-3xl 2xl:tw-text-4xl pl-7 mt-2 mb-8 mb-sm-0"
  >
    العملاء
  </h3>

  <v-row justify="space-between" class="mt-4">
    <v-col cols="12" sm="4" md="2" order="2" order-sm="1">
      <v-combobox
        label="حالة العميل"
        :items="['مفعل', 'محظور']"
        variant="outlined"
        density="compact"
        color="primary"
        hide-details
        class="tw-text-md"
      ></v-combobox>
    </v-col>
    <v-col cols="12" sm="5" md="3" order="1" order-sm="2">
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
              <div class="d-flex justify-space-between">
                <v-btn
                  :to="`/customers/${item.id}/show`"
                  variant="text"
                  size="small"
                  class="ml-3 ml-sm-0"
                >
                  <template #prepend>
                    <v-icon size="x-small" color="primary" class="mr-1">
                      mdi-eye
                    </v-icon>
                  </template>
                  عرض
                </v-btn>
                <v-btn
                  :to="`/customers/${item.id}/edit`"
                  variant="text"
                  size="small"
                >
                  <template #prepend>
                    <span class="mdi mdi-square-edit-outline"></span>
                  </template>

                  تعديل
                </v-btn>
                <CustomersBlockDialog :customerId="item.id" />
              </div>
            </template>
          </v-data-table>
        </v-card-item>
      </v-card>
    </v-col>
  </v-row>
</template>
