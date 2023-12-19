<template>
  <div class="text-center">
    <v-btn @click="dialog = true" variant="text" class="float-left">
      <span class="mdi mdi-square-edit-outline"></span>

      تعديل
    </v-btn>
    <v-dialog v-model="dialog" persistent fullscreen>
      <v-card>
        <v-card-title>
          <h5 class="text-h5 mt-4">تعديل المواعيد</h5>
        </v-card-title>
        <v-card-text class="tw-h-96 tw-overflow-y-auto">
          <v-row>
            <v-col cols="12" md="6" v-for="(day, i) in weekDays" :key="i">
              <v-expansion-panels class="tw-border rounded-md">
                <v-expansion-panel elevation="0">
                  <v-expansion-panel-title v-slot="{}">
                    {{ day.text }}
                    <v-badge
                      :content="appointmentsCount(day.id)"
                      color="primary"
                      class="mr-1"
                    >
                      <v-icon v-if="appointmentsCount(day.id) > 0"
                        >mdi-calendar</v-icon
                      >
                      <v-icon v-else>mdi-calendar-blank</v-icon>
                    </v-badge>
                  </v-expansion-panel-title>
                  <v-expansion-panel-text>
                    <v-row>
                      <v-col cols="12">
                        <v-btn
                          @click="addNewAppointment(day.id)"
                          icon
                          size="x-small"
                          class="float-left"
                        >
                          <template v-slot:append> </template>

                          <v-icon> mdi-plus </v-icon>
                        </v-btn>
                      </v-col>
                      <v-col cols="12">
                        <div
                          v-if="
                            form.appointments[day.id] &&
                            form.appointments[day.id].length
                          "
                          class="form-wrapper"
                        >
                          <div
                            v-for="(dayAppointments, objectIndex) in form
                              .appointments[day.id]"
                            :key="objectIndex"
                            class="form-inner"
                          >
                            <v-container>
                              <v-row>
                                <v-col cols="12" sm="6">
                                  <SharedTimePicker
                                    v-model="
                                      form.appointments[day.id][objectIndex]
                                        .from
                                    "
                                    placeholder="من"
                                    :error="
                                      checkError({
                                        dayId: day.id,
                                        objectIndex,
                                        key: 'from',
                                      })
                                    "
                                    @blur="
                                      validate({
                                        dayId: day.id,
                                        objectIndex,
                                        key: 'from',
                                      })
                                    "
                                  />
                                  <span
                                    v-if="v$.appointments[day.id]"
                                    class="tw-text-xs text-error"
                                  >
                                    {{
                                      v$.appointments[day.id]
                                        ? v$.appointments[day.id][
                                            objectIndex
                                          ].from.$errors.map(
                                            (e) => e.$message
                                          )[0]
                                        : ""
                                    }}
                                  </span>
                                </v-col>
                                <v-col cols="12" sm="6">
                                  <SharedTimePicker
                                    v-model="
                                      form.appointments[day.id][objectIndex].to
                                    "
                                    :error="
                                      checkError({
                                        dayId: day.id,
                                        objectIndex,
                                        key: 'to',
                                      })
                                    "
                                    @blur="
                                      validate({
                                        dayId: day.id,
                                        objectIndex,
                                        key: 'to',
                                      })
                                    "
                                    placeholder="إلى"
                                  />
                                  <span
                                    v-if="v$.appointments[day.id]"
                                    class="tw-text-xs text-error"
                                  >
                                    {{
                                      v$.appointments[day.id]
                                        ? v$.appointments[day.id][
                                            objectIndex
                                          ].to.$errors.map((e) => e.$message)[0]
                                        : ""
                                    }}
                                  </span>
                                </v-col>
                              </v-row>
                            </v-container>
                            <hr
                              v-if="
                                objectIndex !==
                                form.appointments[day.id].length - 1
                              "
                              class="mt-6"
                            />
                          </div>
                        </div>
                      </v-col>
                    </v-row>
                  </v-expansion-panel-text>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-btn color="secondary" @click="dialog = false" variant="elevated"
            >الغاء</v-btn
          >
          <v-btn color="primary" variant="elevated" @click="dialog = false"
            >نعم</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script setup>
import { required$ } from '@/helpers/validators';

const dialog = ref(false);

const weekDays = reactive([
  {
    id: 'day1',
    text: 'السبت',
  },
  {
    id: 'day2',
    text: 'الأحد',
  },
  {
    id: 'day3',
    text: 'الاثنين',
  },
  {
    id: 'day4',
    text: 'الثلاثاء',
  },
  {
    id: 'day5',
    text: 'الأربعاء',
  },
  {
    id: 'day6',
    text: 'الخميس',
  },
  {
    id: 'day7',
    text: 'الجمعة',
  },
]);
const serverErrors = reactive({});

const form = reactive({
  appointments: {
    day3: [
      {
        from: { hh: '12', mm: '00', a: 'pm' },
        to: { hh: '12', mm: '00', a: 'pm' },
      },
    ],
  },
});

const rules = reactive({
  appointments: {},
});
const appointmentsCount = (dayId) => {
  const appointmentsCount = form.appointments[dayId]
    ? form.appointments[dayId].length
    : undefined;

  if (!appointmentsCount) {
    return 0;
  } else if (appointmentsCount < 9) {
    return appointmentsCount;
  } else if (appointmentsCount > 9) {
    return '+9';
  }
};
if (form.appointments && Object.keys(form.appointments).length > 0) {
  Object.keys(form.appointments).forEach((dayId) => {
    if (form.appointments[dayId].length > 0) {
      form.appointments[dayId].forEach((appointment, index) => {
        if (!rules.appointments[dayId]) {
          rules.appointments[dayId] = {};
        }
        rules.appointments[dayId][index] = {
          from: {
            required$,
          },
          to: {
            required$,
          },
        };
      });
    }
  });
}

const { v$ } = useCustomVulidate(rules, form, serverErrors);

const addNewAppointment = (dayId) => {
  if (v$.value.appointments[dayId]) {
    v$.value.appointments[dayId].$touch();
  }
  const object = {
    from: null,
    to: null,
  };
  if (
    (v$.value.appointments[dayId] &&
      !v$.value.appointments[dayId].$errors.length) ||
    !v$.value.appointments[dayId]
  ) {
    if (form.appointments[dayId] && form.appointments[dayId].length) {
      form.appointments[dayId].push(object);
    } else {
      form.appointments[dayId] = [object];
      rules.appointments[dayId] = [];
    }

    rules.appointments[dayId][form.appointments[dayId].length - 1] = {
      from: {
        required$,
      },
      to: {
        required$,
      },
    };
  }
};

const validate = async (payload) => {
  await v$.value.appointments[payload.dayId][payload.objectIndex][
    payload.key
  ].$touch();
  checkError(payload);
};
const checkError = (payload) => {
  if (
    v$.value.appointments[payload.dayId] &&
    v$.value.appointments[payload.dayId][payload.objectIndex] &&
    v$.value.appointments[payload.dayId][payload.objectIndex][payload.key]
      .$error &&
    !form.appointments[payload.dayId][payload.objectIndex][payload.key]
  ) {
    return true;
  } else {
    return false;
  }
};
</script>
