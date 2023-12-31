<template>
  <DoctorsCreateDialog :show="showDialog" @close="showDialog = false" />
  <h3
    class="tw-text-xl sm:tw-text-2xl md:tw-text-3xl 2xl:tw-text-4xl pl-7 mt-2 mb-8 mb-sm-0"
  >
    تفاصيل الباقة
  </h3>
  <v-row justify="space-around" class="mt-12">
    <v-col cols="12" sm="5" md="4">
      <v-card class="pl-2 pl-md-0">
        <div class="d-flex tw-gap-5 pr-4 align-center h-100">
          <img
            width="80"
            src="/images/users/avatar-1.jpg"
            height="35"
            alt="user"
            class="rounded-circle"
          />

          <div class="info">
            <h4 class="tw-text-2xl md:tw-text-2xl">العميل</h4>
            <span class="tw-text-md">عمر احمد</span>
          </div>
        </div>
        <v-card-actions class="mt-4">
          <v-btn variant="outlined" block>الغاء الباقة</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
    <v-col cols="12" sm="5" md="4">
      <v-card class="pl-2 pl-md-0">
        <div class="d-flex tw-gap-5 pr-4 align-center h-100">
          <img
            width="80"
            src="/images/users/avatar-1.jpg"
            height="35"
            alt="user"
            class="rounded-circle"
          />

          <div class="info">
            <h4 class="tw-text-2xl md:tw-text-2xl">المختص</h4>
            <span class="tw-text-md">محمد عبدالله</span>
          </div>
        </div>
        <v-card-actions class="mt-4">
          <v-btn variant="outlined" block>تغيير المختص</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>

  <v-row class="mt-12">
    <v-col cols="12" md="12">
      <v-card elevation="10" class="withbg">
        <v-card-item class="pa-0">
          <v-data-table
            :headers="headers"
            :items="dataTable"
            :search="search"
            items-per-page="5"
          >
            <template v-slot:[`item.rate`]="{ item }">
              <v-rating
                :modelValue="item.rate"
                color="warning"
                size="15"
                readonly
              ></v-rating>
            </template>

            <template v-slot:[`item.actions`]="{ item }">
              <v-btn
                :to="`/doctors/${item.id}/show`"
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

  <v-row justify="center">
    <v-col cols="2">
      <SharedExportButton :data="exportedData" fileName="بيانات الباقة" />
    </v-col>
  </v-row>
</template>
<script setup>
import { exportedData } from '~/helpers/exportedData';

const search = ref('');
const showDialog = ref(false);

const headers = ref([
  { key: 'name', title: 'الباقة' },
  { key: 'doctorName', title: 'المختص' },
  { key: 'createdAt', title: 'تاريخ الاشتراك' },
  { key: 'sessions', title: 'الجلسات' },
  { key: 'expiredSessions', title: 'المنفذة' },
  { key: 'remainingSessions', title: 'المتبقية' },
  { key: 'status', title: 'حالة الاشتراك' },
  { title: 'الاجراء', key: 'actions', sortable: false },
]);
const dataTable = ref([
  {
    id: 1,
    name: 'باقة جلسات 1',
    doctorName: 'محمد اليوسف',
    createdAt: '20-12-2023',
    sessions: 6,
    expiredSessions: 4,
    remainingSessions: 2,
    status: 'ساري',
  },
  {
    id: 2,
    name: 'باقة جلسات 1',
    doctorName: 'محمد اليوسف',
    createdAt: '20-11-2023',
    sessions: 5,
    expiredSessions: 1,
    remainingSessions: 4,
    status: 'ساري',
  },
  {
    id: 3,
    name: 'باقة جلسات 2',
    doctorName: 'محمد عبدالرحمن',
    createdAt: '20-04-2023',
    sessions: 5,
    expiredSessions: 5,
    remainingSessions: 0,
    status: 'مكتمل',
  },
  {
    id: 4,
    name: 'باقة جلسات 3',
    doctorName: 'محمد اليوسف',
    createdAt: '11-03-2023',
    sessions: 9,
    expiredSessions: 4,
    remainingSessions: 5,
    status: 'ساري',
  },
  {
    id: 5,
    name: 'باقة جلسات 2',
    doctorName: 'محمد اليوسف',
    createdAt: '20-11-2023',
    sessions: 5,
    expiredSessions: 1,
    remainingSessions: 4,
    status: 'ساري',
  },
]);
</script>
