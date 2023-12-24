<template>
  <SessionsAppointmentBooking
    :show="showDialog"
    @close="showDialog = false"
    :formType="formType"
  />
  <v-card height="80vh" class="widget-calendar mt-12">
    <div class="p-3 card-body">
      <FullCalendar :options="calendarOptions">
        <template v-slot:eventContent="{ event }">
          <div
            v-if="getTime(event)"
            class="custom-event h-100 text-white text-xs d-flex justify-content-between align-items-center ltr px-2"
          >
            <i class="fa fa-close me-2"></i>
            <span class="text-white rtl">
              {{ getTime(event) }}
            </span>
          </div>
        </template>
      </FullCalendar>
    </div>
  </v-card>
</template>

<script setup>
import '@fullcalendar/core/vdom';
import FullCalendar from '@fullcalendar/vue3';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import arLocale from '@fullcalendar/core/locales/ar';
import { appointments } from '~/helpers/appointments';
const today = new Date();

const oneMonthLater = new Date();
const showDialog = ref(false);
const formType = ref('add');

oneMonthLater.setMonth(oneMonthLater.getMonth() + 1);

const calendarOptions = reactive({
  plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin],
  height: 400,
  headerToolbar: {
    left: 'prev,next today',
    center: 'title',
    right: 'dayGridMonth,timeGridWeek,timeGridDay',
  },

  initialView: 'timeGridWeek',
  validRange: {
    start: today.toISOString().split('T')[0],
    end: oneMonthLater.toISOString().split('T')[0],
  },
  editable: true,
  selectable: true,
  selectMirror: true,
  dayMaxEvents: true,
  weekends: true,
  locale: arLocale,
  allDaySlot: false,
  events: appointments,
  dateClick: async (arg) => {
    console.log('dateClick', arg);
    const selectedDate = arg.date;
    const currentDate = new Date();

    if (selectedDate.getTime() > currentDate.getTime()) {
      const date = arg.dateStr.split('T');
      if (date.length > 1) {
        const formattedDate = date[0] + ' ' + date[1].split('+')[0];
        //  store new appointment
        console.log('dateClick', formattedDate);
      }
    } else {
      setTimeout(() => {
        alert('الوقت أو التاريخ غير متاح');
      }, 1000);
    }
  },
  eventClick: async (arg) => {
    if (!arg.event.classNames.length) {
      showDialog.value = true;
    }else{
      formType.value = 'edit'
      showDialog.value = true;
    }
    console.log('eventClick ', arg.event);
  },

  eventChange: async (arg) => {
    const id = arg.event.id;
    console.log('eventChange ', arg.event);
    const start = arg.event.startStr.split('T')[1].split('+')[0];
    console.log('start ', start);

    const end = arg.event.endStr.split('T')[1].split('+')[0];
    console.log('end ', end);

    const date = arg.event.startStr.split('T');
    if (date.length > 1) {
      const formattedDate = date[0] + ' ' + date[1].split('+')[0];
    }

    const selectedEvent = appointments.find(
      (appointment) => appointment.id === id
    );

    if (selectedEvent) {
      selectedEvent.displayedTime = start + ' ' + end;

      console.log('INDEX', appointments[appointments.indexOf(selectedEvent)]);
      console.log('EVENT', appointments[appointments.indexOf(selectedEvent)]);
    }
  },
});

watch(
  () => appointments,
  (newValue) => {
    calendarOptions.events = newValue;
  },
  { deep: true }
);

function getTime(event) {
  const selectedEvent = appointments.find(
    (appointment) => appointment.id === event.id
  );
  if (selectedEvent) {
    return selectedEvent.displayedTime;
  } else {
    return null;
  }
}
</script>

<style lang="scss">
.fc-event {
  background-color: #81b199 !important;
  border-color: transparent !important;
  box-shadow:
    0 8px 26px -4px rgba(20, 20, 20, 0.15),
    0 8px 9px -5px rgba(20, 20, 20, 0.06) !important;
}
.fc-timegrid-event-harness {
  position: absolute !important;
  right: 0 !important;
}
.booked-appointment {
  @extend .fc-event;
  width: max-content;
  background-color: #0880ae !important;
  width: 97%;
  margin: 0 auto;
}

.fc-timegrid-event-short .fc-event-time:after {
  display: none !important;
}

.fc-media-screen {
  height: 77vh !important;
  padding: 15px;
  border-radius: 10px;
}

.fc-col-header-cell-cushion {
  min-width: 100px !important;
}

.custom-event {
  align-items: center !important;
  .fa-close {
    margin-top: 2px;
  }
}
.fc-button-group {
  .fc-button {
    background-color: #81b199 !important;
    border-color: #81b199 !important;
    margin-left: 2px !important;
    font-size: 15px !important;
  }
  .fc-button-active {
    background-color: #81b199 !important;
    border-color: #81b199 !important;
  }

  .fc-prev-button,
  .fc-next-button {
    background-color: #81b199 !important;
    border-color: #81b199 !important;
    span {
      color: #fff !important;
      margin-bottom: 7px;
    }
  }
}

.fc-today-button {
  background-color: #81b199 !important;
  border-color: #81b199 !important;
  font-size: 15px !important;
}

.dp__time_input {
  flex-direction: row-reverse !important;
}
</style>
