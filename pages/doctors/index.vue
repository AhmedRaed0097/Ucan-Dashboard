<script setup>
import { useDoctorStore } from '~/stores/DoctorStore';

const doctorStore = useDoctorStore();

const search = ref('');
const showDialog = ref(false);

const headers = ref([
  { key: 'name', title: 'الاسم' },
  { key: 'email', title: 'البريد الالتكروني' },
  { key: 'status', title: 'حالةالمستخدم' },
  { key: 'qualificationNameAr', title: 'المؤهل العلمي' },
  { key: 'phone', title: 'الجوال' },
  { title: 'الاجراء', key: 'actions', sortable: false },
]);
const dataTable = computed(() => {
  if (doctorStore.doctors) return doctorStore.doctors.doctors;
});

doctorStore.fetch();
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
            v-if="dataTable"
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
                  <v-icon size="x-small" color="primary" class="ml-1">
                    mdi-eye
                  </v-icon>
                  عرض
                </v-btn>
                <v-btn
                  :to="`/doctors/${item.id}/edit`"
                  variant="text"
                  size="small"
                >
                  <span class="mdi mdi-square-edit-outline ml-1"></span>

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
