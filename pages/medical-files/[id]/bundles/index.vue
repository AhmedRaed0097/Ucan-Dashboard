<template>
  <DoctorsCreateDialog :show="showDialog" @close="showDialog = false" />
  <h3
    class="tw-text-xl sm:tw-text-2xl md:tw-text-3xl 2xl:tw-text-4xl pl-7 mt-2 mb-8 mb-sm-0"
  >
    سجل الباقات
  </h3>
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
  <v-row justify="space-between" class="mt-4 ml-sm-2">
    <v-col cols="12" sm="4" md="3">
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
        الاشتراك في باقة جديدة
      </v-btn>
    </v-col>
  </v-row>

  <v-row class="mt-4">
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
    <v-col cols="6" sm="4" md="3" offset-md="3">
      <SharedDatePicker placeholder="من" />
    </v-col>
    <v-col cols="6" sm="4" md="3">
      <SharedDatePicker placeholder="الى" />
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
                @click="goToBundleDetailsPage(item.id)"
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
      <SharedExportButton :data="exportedData" fileName="بيانات الباقات" />
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
const dataTable = reactive([
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
    name: 'باقة جلسات 2',
    doctorName: 'محمد عبدالرحمن',
    createdAt: '23-08-2023',
    sessions: 5,
    expiredSessions: 5,
    remainingSessions: 0,
    status: 'مكتمل',
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
const route = useRoute();
const router = useRouter();
function goToBundleDetailsPage(bundleId) {
  const id = route.params.id;
  router.push(`/medical-files/${id}/bundles/${bundleId}/show`);
}
</script>
