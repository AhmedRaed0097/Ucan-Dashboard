<template>
  <v-row>
    <v-col cols="12">
      <h3 class="text-h4 pl-7 mt-2">عرض بيانات الطبيب</h3>
    </v-col>
    <v-col cols="3">
      <v-row>
        <v-col cols="12">
          <v-card height="30vh">
            <div
              class="h-100 d-flex flex-column justify-space-around align-center"
            >
              <img
                width="150"
                src="https://i.pravatar.cc/100
"
                alt="avatar"
                class="rounded-circle"
              />
              <h4 class="text-h4">Ahmed</h4>
            </div>
          </v-card>
        </v-col>
        <v-col cols="12">
          <v-card class="overflow-y-auto px-2" height="max-content">
            <div v-for="(item, index) in info" :key="index" class="my-4">
              <h4 class="text-subtitle-1">{{ item.label }}</h4>
              <span class="text-subtitle-2">{{ item.value }}</span>
              <v-divider
                v-if="index !== info.length - 1"
                class="mt-2"
              ></v-divider>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="9">
     <DoctorsShowTabs/>
    </v-col>
  </v-row>
</template>
<script setup>
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
</script>
<style></style>
