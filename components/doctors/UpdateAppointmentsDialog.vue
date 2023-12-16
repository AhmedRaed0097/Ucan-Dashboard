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
            <v-col cols="6" v-for="(day, i) in weekDays" :key="i">
              <v-expansion-panels  class="tw-border rounded-md">
                <v-expansion-panel elevation="0">
                  <v-expansion-panel-title v-slot="{}">
                    {{ day.text }}
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
                            <!-- 
fweekDays =[{id:'day1' , text: ''} , {id:'day2' , text: ''},...}]

form.appointments = {day1:[{from:'',to:''},{from:'',to:''}], day2:[]}


-->
                            <v-container>
                              <v-row>
                                <v-col cols="12" sm="6">
                                  <v-text-field
                                    v-model="
                                      form.appointments[day.id][objectIndex]
                                        .from
                                    "
                                    label="من"
                                    variant="outlined"
                                    :error-messages="
                                      v$.appointments[day.id]
                                        ? v$.appointments[day.id][
                                            objectIndex
                                          ].from.$errors.map((e) => e.$message)
                                        : ''
                                    "
                                  ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6">
                                  <v-text-field
                                    v-model="
                                      form.appointments[day.id][objectIndex].to
                                    "
                                    label="الى"
                                    variant="outlined"
                                    :error-messages="
                                      v$.appointments[day.id]
                                        ? v$.appointments[day.id][
                                            objectIndex
                                          ].to.$errors.map((e) => e.$message)
                                        : ''
                                    "
                                  ></v-text-field>
                                </v-col>
                              </v-row>
                            </v-container>
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
      { from: 'a', to: 'b' },
      { from: 'c', to: 'd' },
    ],
  },
});

const rules = reactive({
  appointments: {},
});

const { v$ } = useCustomVulidate(rules, form, serverErrors);

const addNewAppointment = (dayId) => {
  v$.value.$validate();
  const object = {
    from: '',
    to: '',
  };
  if (!v$.value.$error) {
    if (form.appointments.length && form.appointments[dayId].length) {
      form.appointments[dayId].forEach((times) => {
        Object.values(times).forEach((value) => {
          if (!value.length) {
            isThereEmptyValue = true;
          }
        });
      });

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
</script>

<!-- 

appo = []

appo = [ 0:[a] ]

 -->
