<script setup>
const search = ref('');
const headers = ref([
  { key: 'id', title: 'رقم الملف' },
  { key: 'name', title: 'الاسم' },
  { key: 'phone', title: 'الجوال' },
  { key: 'createdAt', title: 'تاريخ الانشاء' },
  { key: 'status', title: 'حالة الملف' },
  { title: 'الاجراء', key: 'actions', sortable: false, width: '150' },
]);
const dataTable = ref([
  {
    id: 1,
    name: 'علي أحمد',
    phone: 502645629,
    createdAt: '16 ديسمبر 2023, 17:50',
    status: true,
  },
  {
    id: 2,
    name: 'فاطمة محمد',
    phone: 501245654,
    createdAt: '16 ديسمبر 2023, 17:50',
    status: true,
  },
  {
    id: 3,
    name: 'محمد خالد',
    phone: 500985600,
    createdAt: '16 ديسمبر 2023, 17:50',
    status: true,
  },
  {
    id: 4,
    name: 'ريم عبدالرحمن',
    phone: 506575678,
    createdAt: '16 ديسمبر 2023, 17:50',
    status: false,
  },
  {
    id: 5,
    name: 'يوسف حسين',
    phone: 501145644,
    createdAt: '16 ديسمبر 2023, 17:50',
    status: true,
  },
  {
    id: 6,
    name: 'ليلى مصطفى',
    phone: 504325611,
    createdAt: '16 ديسمبر 2023, 17:50',
    status: true,
  },
  {
    id: 7,
    name: 'حسن علي',
    phone: 500005645,
    createdAt: '16 ديسمبر 2023, 17:50',
    status: false,
  },
  {
    id: 8,
    name: 'نورهان عبدالله',
    phone: 502245632,
    createdAt: '16 ديسمبر 2023, 17:50',
    status: true,
  },
  {
    id: 9,
    name: 'أحمد مصطفى',
    phone: 503335678,
    createdAt: '16 ديسمبر 2023, 17:50',
    status: true,
  },
  {
    id: 10,
    name: 'فاطمة علي',
    phone: 503242221,
    createdAt: '16 ديسمبر 2023, 17:50',
    status: true,
  },
  {
    id: 11,
    name: 'سامي حسين',
    phone: 503245332,
    createdAt: '16 ديسمبر 2023, 17:50',
    status: false,
  },
  {
    id: 12,
    name: 'سلمى محمود',
    phone: 501235678,
    createdAt: '16 ديسمبر 2023, 17:50',
    status: true,
  },
  {
    id: 13,
    name: 'ياسر أحمد',
    phone: 509045678,
    createdAt: '16 ديسمبر 2023, 17:50',
    status: true,
  },
  {
    id: 14,
    name: 'نور علي',
    phone: 503245998,
    createdAt: '16 ديسمبر 2023, 17:50',
    status: true,
  },
]);
</script>
<template>
  <h3
    class="tw-text-xl sm:tw-text-2xl md:tw-text-3xl 2xl:tw-text-4xl pl-7 mt-2 mb-8 mb-sm-0"
  >
    الملفات الطبية
  </h3>

  <v-row justify="space-between" class="mt-4">
    <v-col cols="12" sm="5" md="3">
      <v-btn
        to="medical-files/add"
        elevation="10"
        height="39"
        color="primary"
        block
      >
        <template v-slot:prepend>
          <v-icon> mdi-plus </v-icon>
        </template>
        إنشاء ملف طبي
      </v-btn>
    </v-col>
  </v-row>
  <v-row justify="space-between" class="mt-4">
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
    <v-col cols="12" md="3" offset="3">
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
    <v-col cols="12" md="3">
      <v-combobox
        label="الفترة الزمنية"
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
              <v-btn
                :to="`/medical-files/${item.id}/show`"
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
            </template>
          </v-data-table>
        </v-card-item>
      </v-card>
    </v-col>
  </v-row>
</template>
