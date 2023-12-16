<script setup>
const search = ref('');

const headers = ref([
  { key: 'name', title: 'الاسم' },
  { key: 'email', title: 'البريد الالتكروني' },
  { key: 'age', title: 'الجوال' },
  { key: 'status', title: 'الحالة' },
  { title: 'الاجراء', key: 'actions', sortable: false, width: '150' },
]);
const dataTable = ref([
  {
    id: 1,
    name: 'علي أحمد',
    age: 502645629,
    status: true,
    email: 'ali.ahmad@email.com',
  },
  {
    id: 2,
    name: 'فاطمة محمد',
    age: 501245654,
    status: true,
    email: 'fatma.mohamed@email.com',
  },
  {
    id: 3,
    name: 'محمد خالد',
    age: 500985600,
    status: true,
    email: 'mohamed.khaled@email.com',
  },
  {
    id: 4,
    name: 'ريم عبدالرحمن',
    age: 506575678,
    status: false,
    email: 'reem.abdulrahman@email.com',
  },
  {
    id: 5,
    name: 'يوسف حسين',
    age: 501145644,
    status: true,
    city: 'الخرطوم',
    country: 'السودان',
    email: 'youssef.hussein@email.com',
  },
  {
    id: 6,
    name: 'ليلى مصطفى',
    age: 504325611,
    status: true,
    email: 'leila.mustafa@email.com',
  },
  {
    id: 7,
    name: 'حسن علي',
    age: 500005645,
    status: false,
    email: 'hasan.ali@email.com',
  },
  {
    id: 8,
    name: 'نورهان عبدالله',
    age: 502245632,
    status: true,
    email: 'norhan.abdullah@email.com',
  },
  {
    id: 9,
    name: 'أحمد مصطفى',
    age: 503335678,
    status: true,
    email: 'ahmed.mustafa@email.com',
  },
  {
    id: 10,
    name: 'فاطمة علي',
    age: 503242221,
    status: true,
    email: 'fatma.ali@email.com',
  },
  {
    id: 11,
    name: 'سامي حسين',
    age: 503245332,
    status: false,
    email: 'sami.hussein@email.com',
  },
  {
    id: 12,
    name: 'سلمى محمود',
    age: 501235678,
    status: true,
    email: 'salma.mahmoud@email.com',
  },
  {
    id: 13,
    name: 'ياسر أحمد',
    age: 509045678,
    status: true,
    email: 'yaser.ahmad@email.com',
  },
  {
    id: 14,
    name: 'نور علي',
    age: 503245998,
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
    <v-col cols="6" sm="4" md="2">
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
