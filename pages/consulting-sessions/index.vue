<script setup>
const search = ref('');
const showDialog = ref(false);

const headers = ref([
  { key: 'sessionDate', title: 'تاريخ الجلسة' },
  { key: 'invoiceNumber', title: 'رقم الفاتورة' },
  { key: 'sessionStatus', title: 'حالة الجلسة' },
  { key: 'customerName', title: 'العميل' },
  { key: 'doctorName', title: 'الطبيب' },
  { key: 'sessionDuration', title: 'مدة الجلسة', width: '100' },
  { key: 'paymentMethod', title: 'طريقة الدفع' },
  { key: 'sessionPrice', title: 'سعر الجلسة' },
  { key: 'discount', title: 'الخصم' },
  { key: 'tax', title: 'الضريبة' },
  { key: 'total', title: 'المجموع' },
  { key: 'invoice', title: 'الفاتورة' },
  { key: 'updatedAt', title: 'اخر تعديل', width: '200' },
  { key: 'createdAt', title: 'تاريخ الانشاء' },
  { title: 'الاجراء', key: 'actions', sortable: false },
]);
const dataTable = ref([
  {
    id: 1,
    sessionDate: '2023-09-10 15:30:00',
    invoiceNumber: 286544411,
    sessionStatus: 'موعد منتهي	',
    customerName: 'عبدالرحمن',
    doctorName: 'سارة المقبل',
    sessionDuration: 30,
    paymentMethod: 'رصيد المحفظة',
    sessionPrice: '200 ريال سعودي',
    discount: '0 ريال سعودي',
    tax: '30 ريال سعودي',
    total: '230 ريال سعودي',
    invoice: 'عرض الفاتورة',
    updatedAt: '10 سبتمبر 2023, 14:42',
    createdAt: '10 سبتمبر 2023, 14:31	',
  },
  {
    id: 2,
    sessionDate: '2023-09-10 15:30:00',
    invoiceNumber: 286544411,
    sessionStatus: 'موعد منتهي	',
    customerName: 'عبدالرحمن',
    doctorName: 'سارة المقبل',
    sessionDuration: 30,
    paymentMethod: 'رصيد المحفظة',
    sessionPrice: '200 ريال سعودي',
    discount: '0 ريال سعودي',
    tax: '30 ريال سعودي',
    total: '230 ريال سعودي',
    invoice: 'عرض الفاتورة',
    updatedAt: '10 سبتمبر 2023, 14:42',
    createdAt: '10 سبتمبر 2023, 14:31	',
  },
  {
    id: 3,
    sessionDate: '2023-09-10 15:30:00',
    invoiceNumber: 286544411,
    sessionStatus: 'موعد منتهي	',
    customerName: 'عبدالرحمن',
    doctorName: 'سارة المقبل',
    sessionDuration: 30,
    paymentMethod: 'رصيد المحفظة',
    sessionPrice: '200 ريال سعودي',
    discount: '0 ريال سعودي',
    tax: '30 ريال سعودي',
    total: '230 ريال سعودي',
    invoice: 'عرض الفاتورة',
    updatedAt: '10 سبتمبر 2023, 14:42',
    createdAt: '10 سبتمبر 2023, 14:31	',
  },
  {
    id: 4,
    sessionDate: '2023-09-10 15:30:00',
    invoiceNumber: 286544411,
    sessionStatus: 'موعد منتهي	',
    customerName: 'عبدالرحمن',
    doctorName: 'سارة المقبل',
    sessionDuration: 30,
    paymentMethod: 'رصيد المحفظة',
    sessionPrice: '200 ريال سعودي',
    discount: '0 ريال سعودي',
    tax: '30 ريال سعودي',
    total: '230 ريال سعودي',
    invoice: 'عرض الفاتورة',
    updatedAt: '10 سبتمبر 2023, 14:42',
    createdAt: '10 سبتمبر 2023, 14:31	',
  },
  {
    id: 5,
    sessionDate: '2023-09-10 15:30:00',
    invoiceNumber: 286544411,
    sessionStatus: 'موعد منتهي	',
    customerName: 'عبدالرحمن',
    doctorName: 'سارة المقبل',
    sessionDuration: 30,
    paymentMethod: 'رصيد المحفظة',
    sessionPrice: '200 ريال سعودي',
    discount: '0 ريال سعودي',
    tax: '30 ريال سعودي',
    total: '230 ريال سعودي',
    invoice: 'عرض الفاتورة',
    updatedAt: '10 سبتمبر 2023, 14:42',
    createdAt: '10 سبتمبر 2023, 14:31	',
  },
]);
</script>
<template>
  <SessionsCreateDialog :show="showDialog" @close="showDialog = false" />
  <h3
    class="tw-text-xl sm:tw-text-2xl md:tw-text-3xl 2xl:tw-text-4xl pl-7 mt-2 mb-8 mb-sm-0"
  >
    الجلسات
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

  <v-row class="mt-4">
    <v-col cols="6" sm="4" md="2">
      <!-- @click="showDialog = true" -->
      <v-btn to="/add" elevation="10" height="39" color="primary" block>
        <template v-slot:prepend>
          <v-icon> mdi-plus </v-icon>
        </template>
        إنشاء جلسة جديدة
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
    <v-col cols="12">
      <v-card elevation="10" class="withbg">
        <v-card-item class="pa-0">
          <v-data-table :headers="headers" :items="dataTable" :search="search">
            <template v-slot:[`item.actions`]="{ item }">
              <v-btn
                icon
                :to="`/doctors/${item.id}/edit`"
                variant="text"
                size="small"
              >
                <v-icon size="x-small" color="primary" class="ml-1">
                  mdi-eye
                </v-icon>
                عرض
              </v-btn>
            </template>
          </v-data-table>
        </v-card-item>
      </v-card>
    </v-col>
  </v-row>
</template>
