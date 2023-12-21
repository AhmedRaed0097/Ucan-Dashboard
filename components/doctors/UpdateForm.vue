<template>
  <form>
    <v-container>
      <v-row>
        <v-col cols="12" sm="6" xl="4">
          <v-text-field
            v-model="form.name"
            label="الاسم"
            required
            variant="outlined"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" xl="4">
          <v-file-input
            v-model="form.avatar"
            accept="image/png, image/jpeg, image/bmp"
            placeholder="Pick an avatar"
            prepend-icon=""
            append-inner-icon="mdi-camera"
            label="الصورة"
            variant="outlined"
          ></v-file-input>
        </v-col>

        <v-col cols="12" sm="6" xl="4">
          <v-select
            v-model="form.joinType"
            :items="joinTypes"
            label="نوع الانضمام"
            variant="outlined"
          ></v-select>
        </v-col>
      </v-row>
      <br />
      <v-divider />
      <br />
      <v-row>
        <v-col cols="12">
          <h3 class="text-primary">اعدادات الاستشارة</h3>
        </v-col>

        <v-col cols="12" sm="6" xl="4">
          <v-select
            v-model="form.reservationDuration"
            :items="reservationDurations"
            label="مدة الحجز"
            variant="outlined"
          ></v-select>
        </v-col>
        <v-col cols="12" sm="6" xl="4">
          <v-select
            v-model="form.reservationType"
            :items="receivingRequestsOptions"
            label="استقبال الطلبات"
            variant="outlined"
          ></v-select>
        </v-col>
        <v-col cols="12" sm="6" xl="4">
          <v-select
            v-model="form.reservationType"
            :items="reservationTypes"
            label="نوع الحجز"
            variant="outlined"
          ></v-select>
        </v-col>
        <v-col cols="12" sm="6" xl="4">
          <v-select
            v-model="form.freeConsultation"
            :items="freeConsultationOptions"
            label="استشارة مجانية"
            variant="outlined"
          ></v-select>
        </v-col>
        <v-col cols="12" sm="6" xl="4">
          <v-select
            v-model="form.maxReservationDuration"
            :items="maxReservationDurations"
            label="أقصى مدة للحجز"
            variant="outlined"
          ></v-select>
        </v-col>
        <v-col cols="12" sm="6" xl="4">
          <v-text-field
            v-model="form.sessionPrice"
            label="قيمة الجلسة"
            required
            variant="outlined"
            :error="v$.sessionPrice.$errors.length > 0"
            @blur="v$.sessionPrice.$touch"
            :error-messages="v$.sessionPrice.$errors.map((e) => e.$message)"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" xl="4">
          <v-text-field
            v-model="form.ucanPercentage"
            label="نسبة يوكان"
            required
            variant="outlined"
          ></v-text-field>
        </v-col>
      </v-row>
      <br />
      <v-divider />
      <br />
      <v-row>
        <v-col cols="12">
          <h3 class="text-primary">الملف الطبي</h3>
        </v-col>
        <v-col cols="12" sm="6" xl="4">
          <v-select
            :items="qualifications"
            label="المؤهل العلمي"
            variant="outlined"
          ></v-select>
        </v-col>
        <v-col cols="12" sm="6" xl="4">
          <v-text-field
            v-model="form.experienceYears"
            label="سنوات الخبرة"
            required
            variant="outlined"
            :error="v$.experienceYears.$errors.length > 0"
            @blur="v$.experienceYears.$touch"
            :error-messages="v$.experienceYears.$errors.map((e) => e.$message)"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" xl="4">
          <v-select
            v-model="form.class"
            :items="classes"
            label="الفئة"
            variant="outlined"
            :error="v$.class.$errors.length > 0"
            @blur="v$.class.$touch"
            :error-messages="v$.class.$errors.map((e) => e.$message)"
          ></v-select>
        </v-col>
        <v-col cols="12" sm="6" xl="4">
          <v-select
            v-model="form.category"
            :items="categories"
            label="التصنيف"
            variant="outlined"
            :error="v$.category.$errors.length > 0"
            @blur="v$.category.$touch"
            :error-messages="v$.category.$errors.map((e) => e.$message)"
          ></v-select>
        </v-col>
        <v-col cols="12" sm="6" xl="4">
          <v-select
            v-model="form.professionalTitle"
            :items="qualifications"
            label="المسمى المهني"
            variant="outlined"
            :error="v$.professionalTitle.$errors.length > 0"
            @blur="v$.professionalTitle.$touch"
            :error-messages="
              v$.professionalTitle.$errors.map((e) => e.$message)
            "
          ></v-select>
        </v-col>
        <v-col cols="12" sm="6" xl="4">
          <v-textarea
            v-model="form.biography"
            label="نبذة تعريفية"
            variant="outlined"
            :error="v$.biography.$errors.length > 0"
            @blur="v$.biography.$touch"
            :error-messages="v$.biography.$errors.map((e) => e.$message)"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="6">
          <v-card variant="tonal">
            <div class="d-flex justify-space-between align-center px-4 py-4">
              <span>دراسة وتدريب </span>
              <v-btn @click="addNewStudyTraining">
                <template v-slot:append>
                  <v-icon> mdi-plus </v-icon>
                </template>

                عنصر جديد
              </v-btn>
            </div>

            <div v-if="form.studyTraining.length" class="form-wrapper">
              <div
                v-for="(item, i) in form.studyTraining"
                :key="i"
                class="form-inner"
              >
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="4">
                      <v-text-field
                        v-model="form.studyTraining[i].donor"
                        label="الجهة"
                        required
                        variant="outlined"
                        :error="v$.studyTraining[i].donor.$errors.length > 0"
                        @blur="v$.studyTraining[i].donor.$touch"
                        :error-messages="
                          v$.studyTraining[i].donor.$errors.map(
                            (e) => e.$message
                          )
                        "
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="5">
                      <v-text-field
                        v-model="form.studyTraining[i].major"
                        label="التخصص"
                        required
                        variant="outlined"
                        :error="v$.studyTraining[i].major.$errors.length > 0"
                        @blur="v$.studyTraining[i].major.$touch"
                        :error-messages="
                          v$.studyTraining[i].major.$errors.map(
                            (e) => e.$message
                          )
                        "
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="3">
                      <v-text-field
                        v-model="form.studyTraining[i].year"
                        label="السنة"
                        required
                        variant="outlined"
                        :error="v$.studyTraining[i].year.$errors.length > 0"
                        @blur="v$.studyTraining[i].year.$touch"
                        :error-messages="
                          v$.studyTraining[i].year.$errors.map(
                            (e) => e.$message
                          )
                        "
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </div>
            </div>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6">
          <v-card variant="tonal">
            <div class="d-flex justify-space-between align-center px-4 py-4">
              <span>الرخصة الطبية </span>
              <v-btn @click="addMedicalLicense">
                <template v-slot:append>
                  <v-icon> mdi-plus </v-icon>
                </template>

                عنصر جديد
              </v-btn>
            </div>
            <div v-if="form.medicalLicense.length" class="form-wrapper">
              <div
                v-for="(item, i) in form.medicalLicense"
                :key="i"
                class="form-inner"
              >
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="4">
                      <v-text-field
                        v-model="form.medicalLicense[i].donor"
                        label="جهة الرخصة الطبية"
                        required
                        variant="outlined"
                        :error="v$.medicalLicense[i].donor.$errors.length > 0"
                        @blur="v$.medicalLicense[i].donor.$touch"
                        :error-messages="
                          v$.medicalLicense[i].donor.$errors.map(
                            (e) => e.$message
                          )
                        "
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="4">
                      <v-text-field
                        v-model="form.medicalLicense[i].licenseNumber"
                        label="رقم الرخصة الطبية"
                        required
                        variant="outlined"
                        :error="
                          v$.medicalLicense[i].licenseNumber.$errors.length > 0
                        "
                        @blur="v$.medicalLicense[i].licenseNumber.$touch"
                        :error-messages="
                          v$.medicalLicense[i].licenseNumber.$errors.map(
                            (e) => e.$message
                          )
                        "
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="4">
                      <SharedDatePicker
                        v-model="form.medicalLicense[i].expiryDate"
                        placeholder="تاريخ الانتهاء"
                        :error-messages="
                          v$.medicalLicense[i].expiryDate.$errors.map(
                            (e) => e.$message
                          )
                        "
                      />
                    </v-col>
                  </v-row>
                </v-container>
              </div>
            </div>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6">
          <v-card variant="tonal">
            <div class="d-flex justify-space-between align-center px-4 py-4">
              <span>التخصص</span>
              <v-btn @click="addNewSpecialty">
                <template v-slot:append>
                  <v-icon> mdi-plus </v-icon>
                </template>

                عنصر جديد
              </v-btn>
            </div>
            <div v-if="form.specialties.length" class="form-wrapper">
              <div
                v-for="(item, i) in form.specialties"
                :key="i"
                class="form-inner"
              >
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6">
                      <v-text-field
                        v-model="form.specialties[i].specialty"
                        label="التخصص"
                        required
                        variant="outlined"
                        :error="v$.specialties[i].specialty.$errors.length > 0"
                        @blur="v$.specialties[i].specialty.$touch"
                        :error-messages="
                          v$.specialties[i].specialty.$errors.map(
                            (e) => e.$message
                          )
                        "
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-text-field
                        v-model="form.specialties[i].certificateNumber"
                        label="رقم الشهادة"
                        required
                        variant="outlined"
                        :error="
                          v$.specialties[i].certificateNumber.$errors.length > 0
                        "
                        @blur="v$.specialties[i].certificateNumber.$touch"
                        :error-messages="
                          v$.specialties[i].certificateNumber.$errors.map(
                            (e) => e.$message
                          )
                        "
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </div>
            </div>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6">
          <v-card variant="tonal">
            <div class="d-flex justify-space-between align-center px-4 py-4">
              <span>الشهادات</span>
              <v-btn @click="addNewCertificate">
                <template v-slot:append>
                  <v-icon> mdi-plus </v-icon>
                </template>

                عنصر جديد
              </v-btn>
            </div>
            <div v-if="form.certificates.length" class="form-wrapper">
              <div
                v-for="(item, i) in form.certificates"
                :key="i"
                class="form-inner"
              >
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="8">
                      <v-text-field
                        v-model="form.certificates[i].certificateName"
                        label="اسم الشهادة"
                        required
                        variant="outlined"
                        :error="
                          v$.certificates[i].certificateName.$errors.length > 0
                        "
                        @blur="v$.certificates[i].certificateName.$touch"
                        :error-messages="
                          v$.certificates[i].certificateName.$errors.map(
                            (e) => e.$message
                          )
                        "
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </div>
            </div>
          </v-card>
        </v-col>
        <v-col cols="12" class="tw-mt-20">
          <v-btn @click="onSave" :loading="loading" variant="flat" class="ml-2"
            >حفظ ورجوع</v-btn
          >
          <v-btn to="/customers" color="secondary" variant="flat">الغاء</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </form>
</template>
<script setup>
import { required$, digit$ } from '@/helpers/validators';

const qualifications = ref(['بكلاريوس', 'ماجستير', 'دكتوراه']);
const receivingRequestsOptions = ref(['متاح', 'مشغول']);
const freeConsultationOptions = ref(['غير متاح', 'استقبال 5 دقائق']);
const reservationDurations = ref(['30 دقيقة', '45 دقيقة', '60 دقيقة']);
const maxReservationDurations = ref(['اسبوعان', 'شهر']);
const reservationTypes = ref(['مجدول فقط', 'مجدول وفوري']);
const classes = ref(['طبيب', 'مختص', 'اختبار']);
const categories = ref(['نفسي', 'اجتماعي']);
const serverErrors = ref({});
const loading = ref(false);
const joinTypes = ref([
  {
    title: 'خارج المركز',
    value: 'outside',
  },
  {
    title: 'داخل المركز',
    value: 'inside',
  },
]);
const form = reactive({
  name: '',
  avatar: [],
  joinType: null,
  reservationDuration: null,
  maxReservationDuration: null,
  reservationType: null,
  sessionPrice: '',
  biography: '',
  experienceYears: '',
  class: null,
  category: null,
  professionalTitle: '',
  freeConsultation: null,
  receivingRequests: null,
  ucanPercentage: '',
  studyTraining: [],
  medicalLicense: [],
  specialties: [],
  certificates: [],
});

const rules = reactive({
  sessionPrice: {
    required$,
  },
  biography: {
    required$,
  },
  experienceYears: {
    required$,
  },
  class: {
    required$,
  },
  category: {
    required$,
  },
  professionalTitle: {
    required$,
  },

  studyTraining: {},
  specialties: {},
  medicalLicense: {},
  certificates: {},
});

const { v$ } = useCustomVulidate(rules, form, serverErrors);

const addNewStudyTraining = () => {
  const object = {
    donor: '',
    major: '',
    year: '',
  };
  if (form.studyTraining.length) {
    v$.value.studyTraining.$touch();

    if (!v$.value.studyTraining.$error) {
      form.studyTraining.push(object);
      rules.studyTraining[form.studyTraining.length - 1] = {
        donor: {
          required$,
        },
        major: {
          required$,
        },
        year: {
          required$,
          digit$,
        },
      };
    }
  } else {
    form.studyTraining.push(object);
    rules.studyTraining[0] = {
      donor: {
        required$,
      },
      major: {
        required$,
      },
      year: {
        required$,
        digit$,
      },
    };
  }
};

const addMedicalLicense = () => {
  const object = {
    donor: '',
    licenseNumber: '',
    expiryDate: '',
  };
  if (form.medicalLicense.length) {
    v$.value.medicalLicense.$touch();

    if (!v$.value.medicalLicense.$error) {
      form.medicalLicense.push(object);
      rules.medicalLicense[form.medicalLicense.length - 1] = {
        donor: {
          required$,
        },
        licenseNumber: {
          required$,
          digit$,
        },
        expiryDate: {
          required$,
        },
      };
    }
  } else {
    form.medicalLicense.push(object);
    rules.medicalLicense[0] = {
      donor: {
        required$,
      },
      licenseNumber: {
        required$,
        digit$,
      },
      expiryDate: {
        required$,
      },
    };
  }
};

const addNewSpecialty = () => {
  const object = {
    specialty: '',
    certificateNumber: '',
  };
  if (form.specialties.length) {
    v$.value.specialties.$touch();

    if (!v$.value.specialties.$error) {
      form.specialties.push(object);
      rules.specialties[form.specialties.length - 1] = {
        specialty: {
          required$,
        },
        certificateNumber: {
          required$,
          digit$,
        },
      };
    }
  } else {
    form.specialties.push(object);
    rules.specialties[0] = {
      specialty: {
        required$,
      },
      certificateNumber: {
        required$,
        digit$,
      },
    };
  }
};

const addNewCertificate = () => {
  const object = {
    certificateName: '',
  };
  if (form.certificates.length) {
    v$.value.certificates.$touch();

    if (!v$.value.certificates.$error) {
      form.certificates.push(object);
      rules.certificates[form.certificates.length - 1] = {
        certificateName: {
          required$,
        },
      };
    }
  } else {
    form.certificates.push(object);
    rules.certificates[0] = {
      certificateName: {
        required$,
      },
    };
  }
};

const onSave = () => {
  v$.value.$validate();
  if (!v$.value.$error) {
    loading.value = true;
    setTimeout(() => {
      loading.value = false;
      navigateTo('/customers');
    }, 2000);
  }
};
</script>
<style></style>
