<template>
  <v-row>
    <v-col cols="12">
      <h4 class="tw-text-xl sm:tw-text-2xl md:tw-text-3xl 2xl:tw-text-4xl pl-7 mt-2">
        عرض بيانات العميل
      </h4>
    </v-col>

    <v-col cols="12" md="9">
      <div class="tw-border tw-border-grey-800 tw-p-3 tw-shadow-md rounded-lg tw-overflow-x-auto">
        <v-row
          v-for="(item, index) in info"
          :key="index"
          class="tw-px-8"
          :class="{
            '	 tw-bg-stone-100 tw-border-y tw-border-zinc-300 ':
              (index + 1) % 2 === 0 && index !== 0,
          }"
        >
          <v-col cols="6">
            <h4 class="text-subtitle-1">{{ item.label }}</h4>
          </v-col>
          <v-col cols="6">
            <div v-if="index === info.length - 1" class="d-flex flex-column flex-sm-row align-center tw-gap-4">
              <v-btn
              width="70"
                :to="`/customers/${item.id}/edit`"
                variant="outlined"
                size="small"
              >
              <template #prepend>
                <span class="mdi mdi-square-edit-outline"></span>

              </template>

                تعديل
              </v-btn>

             <CustomersBlockDialog :customerId="item.id"/>
            </div>

            <span v-else class="text-body-2">{{ item.value }}</span>
          </v-col>
        </v-row>
      </div>
    </v-col>
  </v-row>
</template>
<script setup>
const info = ref([
  {
    id: 1,
    label: 'اسم',
    value: 'لا يوجد بيانات لعرضه',
  },
  {
    id: 2,
    label: 'البريد الالكتروني',
    value: 'لا يوجد بيانات لعرضه',
  },
  {
    id: 3,
    label: 'الجوال',
    value: 'لا يوجد بيانات لعرضه',
  },
  {
    id: 4,
    label: 'حالة المستخدم',
    value: 'لا يوجد بيانات لعرضه',
  },
  {
    id: 5,
    label: 'رصيد المحفظة',
    value: 'لا يوجد بيانات لعرضه',
  },
  {
    id: 6,
    label: 'الجلسات',
    value: 'لم يرسل للمراجعة',
  },
  {
    id: 7,
    label: 'النوع',
    value: 'لم يرسل للمراجعة',
  },
  {
    id: 8,
    label: 'تاريخ الانشاء',
    value: 'لم يرسل للمراجعة',
  },
  {
    id: 9,
    label: 'الاجراء',
    value: '',
  },
]);
</script>
<style></style>
