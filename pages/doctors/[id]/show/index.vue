<template>
  <SharedResponseAlert :response="response" />
  <v-row>
    <v-col cols="12">
      <h3
        class="tw-text-xl sm:tw-text-2xl md:tw-text-3xl 2xl:tw-text-4xl pl-7 mt-2"
      >
        عرض بيانات الطبيب
      </h3>
    </v-col>
    <v-col cols="12" sm="3">
      <v-row>
        <v-col cols="12">
          <v-card>
            <div
              class="tw-h-52 d-flex flex-column justify-space-around align-center"
            >
              <v-avatar size="120">
                <img src="/images/users/avatar-1.jpg" height="35" alt="user" />
              </v-avatar>
              <h4 class="tw-text-2xl">احمد رائد</h4>
              <span class="tw-text-sm text-secondary mb-4">طبيب علاج نفسي </span>
            </div>
          </v-card>
        </v-col>
        <v-col cols="12">
          <v-card class="overflow-y-auto px-2" height="max-content">
            <div v-for="(item, index) in info" :key="index" class="my-4">
              <h4 class="text-subtitle-1">{{ item.label }}</h4>
              <span class="text-subtitle-2">{{ item.value }}</span>
              <hr v-if="index !== info.length - 1" class="mt-2 mb-7" />
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
   
    <v-col cols="12" sm="9">
      <v-btn to="edit" variant="text" class="float-left">
      <span class="mdi mdi-square-edit-outline"></span>

      الانتقال الى صفحة التعديل
    </v-btn>
      <DoctorsShowTabs class="mt-10" />
    </v-col>
  </v-row>
</template>
<script setup>
import { useDoctorStore } from '~~/stores/DoctorStore';

const doctorStore = useDoctorStore()
const info = ref([
  {
    id: 1,
    label: 'نبذة تعريفية',
    value: 'لا يوجد بيانات لعرضه',
  },
  {
    id: 2,
    label: 'سنوات الخبرة',
    value: 'لا يوجد بيانات لعرضه',
  },
  {
    id: 3,
    label: 'التقييم',
    value: 'لا يوجد بيانات لعرضه',
  },
  {
    id: 4,
    label: 'التخصاصات',
    value: 'لا يوجد بيانات لعرضه',
  },
  {
    id: 5,
    label: 'نسبة اكمال الملف الطبي',
    value: 'لا يوجد بيانات لعرضه',
  },
  {
    id: 6,
    label: 'حالة الملف',
    value: 'لم يرسل للمراجعة',
  },
]);


const response = computed(() => {
  return doctorStore.responseData;
});

</script>
<style></style>
