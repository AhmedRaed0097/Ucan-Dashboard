<template>
  <div>
    <DoctorsUpdateAppointmentsDialog />
    <v-data-table class="border-table" :headers="headers" :items="info">
      <template #[`item.duration`]="{ item }">
        <ul v-if="item.duration.length">
          <li v-for="value in item.duration" :key="value.id" class="my-3">
            {{ value }}
          </li>
        </ul>
        <span v-else>لا يوجد بيانات لعرضها </span>
      </template>
      <template #bottom></template>
    </v-data-table>
  </div>
</template>
<script setup>
const headers = ref([
  { key: 'day', title: 'اليوم', sortable: false },
  { key: 'duration', title: 'الاوقات المتاحة', sortable: false },
]);

const info = ref([
  {
    id: 1,
    day: 'السبت',
    duration: [],
  },
  {
    id: 2,
    day: 'الاحد',
    duration: [
      'من الساعة: 08:00 AM الى الساعة: 11:00 AM',
      'من الساعة: 08:00 AM الى الساعة: 11:00 AM',
    ],
  },
  {
    id: 3,
    day: 'الاثنين',
    duration: [
      'من الساعة: 08:00 AM الى الساعة: 11:00 AM',
      'من الساعة: 08:00 AM الى الساعة: 11:00 AM',
    ],
  },
  {
    id: 4,
    day: 'الثلاثاء',
    duration: [
      'من الساعة: 08:00 AM الى الساعة: 11:00 AM',
      'من الساعة: 08:00 AM الى الساعة: 11:00 AM',
    ],
  },
  {
    id: 5,
    day: 'الاربعاء',
    duration: [
      'من الساعة: 08:00 AM الى الساعة: 11:00 AM',
      'من الساعة: 08:00 AM الى الساعة: 11:00 AM',
    ],
  },
  {
    id: 6,
    day: 'الخميس',
    duration: [
      'من الساعة: 08:00 AM الى الساعة: 11:00 AM',
      'من الساعة: 08:00 AM الى الساعة: 11:00 AM',
    ],
  },
  {
    id: 7,
    day: 'الجمعة',
    duration: [
      'من الساعة: 08:00 AM الى الساعة: 11:00 AM',
      'من الساعة: 08:00 AM الى الساعة: 11:00 AM',
    ],
  },
]);
</script>
<style></style>
