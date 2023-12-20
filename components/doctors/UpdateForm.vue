<template>
  <form>
    <v-container>
      <v-row>
        <v-col cols="12" sm="6" xl="4">
          <v-text-field
            label="الاسم"
            required
            variant="outlined"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" xl="4">
          <v-file-input
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
            :items="qualifications"
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
            :items="qualifications"
            label="مدة الحجز"
            variant="outlined"
          ></v-select>
        </v-col>
        <v-col cols="12" sm="6" xl="4">
          <v-select
            :items="qualifications"
            label="نوع الحجز"
            variant="outlined"
          ></v-select>
        </v-col>
        <v-col cols="12" sm="6" xl="4">
          <v-select
            :items="qualifications"
            label="نوع الحجز"
            variant="outlined"
          ></v-select>
        </v-col>
        <v-col cols="12" sm="6" xl="4">
          <v-select
            :items="qualifications"
            label="استشارة مجانية"
            variant="outlined"
          ></v-select>
        </v-col>
        <v-col cols="12" sm="6" xl="4">
          <v-select
            :items="qualifications"
            label="أقصى مدة للحجز"
            variant="outlined"
          ></v-select>
        </v-col>
        <v-col cols="12" sm="6" xl="4">
          <v-text-field
            label="قيمة الجلسة"
            required
            variant="outlined"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" xl="4">
          <v-text-field
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
            label="سنوات الخبرة"
            required
            variant="outlined"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" xl="4">
          <v-select
            :items="qualifications"
            label="الفئة"
            variant="outlined"
          ></v-select>
        </v-col>
        <v-col cols="12" sm="6" xl="4">
          <v-select
            :items="qualifications"
            label="التصنيف"
            variant="outlined"
          ></v-select>
        </v-col>
        <v-col cols="12" sm="6" xl="4">
          <v-select
            :items="qualifications"
            label="المسمى المهني"
            variant="outlined"
          ></v-select>
        </v-col>
        <v-col cols="12" sm="6" xl="4">
          <v-textarea label="نبذة تعريفية" variant="outlined" />
        </v-col>
        <v-col cols="12" sm="6" xl="4">
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

            <div v-if="studyTraining.length" class="form-wrapper">
              <div
                v-for="(item, i) in studyTraining"
                :key="i"
                class="form-inner"
              >
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="4">
                      <v-text-field
                        label="الجهة"
                        required
                        variant="outlined"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="5">
                      <v-text-field
                        label="التخصص"
                        required
                        variant="outlined"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="3">
                      <v-text-field
                        label="السنة"
                        required
                        variant="outlined"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </div>
            </div>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" xl="4">
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
            <div v-if="medicalLicense.length" class="form-wrapper">
              <div
                v-for="(item, i) in medicalLicense"
                :key="i"
                class="form-inner"
              >
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="4">
                      <v-text-field
                        label="الجهة"
                        required
                        variant="outlined"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="5">
                      <v-text-field
                        label="التخصص"
                        required
                        variant="outlined"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="3">
                      <v-text-field
                        label="السنة"
                        required
                        variant="outlined"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </div>
            </div>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" xl="4">
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
            <div v-if="specialties.length" class="form-wrapper">
              <div v-for="(item, i) in specialties" :key="i" class="form-inner">
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="4">
                      <v-text-field
                        label="الجهة"
                        required
                        variant="outlined"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="5">
                      <v-text-field
                        label="التخصص"
                        required
                        variant="outlined"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="3">
                      <v-text-field
                        label="السنة"
                        required
                        variant="outlined"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </div>
            </div>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" xl="4">
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
            <div v-if="certificates.length" class="form-wrapper">
              <div
                v-for="(item, i) in certificates"
                :key="i"
                class="form-inner"
              >
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="4">
                      <v-text-field
                        label="الجهة"
                        required
                        variant="outlined"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="5">
                      <v-text-field
                        label="التخصص"
                        required
                        variant="outlined"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="3">
                      <v-text-field
                        label="السنة"
                        required
                        variant="outlined"
                      ></v-text-field>
                    </v-col>
                    
                  </v-row>
                </v-container>
              </div>
            </div>
          </v-card>
        </v-col>
        <v-col cols="12" class="tw-mt-20">
          <v-btn to="/customers" variant="flat" class="ml-2">حفظ ورجوع</v-btn>
          <v-btn to="/customers" color="secondary" variant="flat">الغاء</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </form>
</template>
<script setup>
const qualifications = ref(['بكلاريوس', 'ماجستير', 'دكتوراه']);

const studyTraining = reactive([]);
const medicalLicense = reactive([]);
const specialties = reactive([]);
const certificates = reactive([]);

const addNewStudyTraining = () => {
  let isThereEmptyValue = false;
  if (studyTraining.length) {
    studyTraining.forEach((element) => {
      Object.values(element).forEach((value) => {
        if (!value.length) {
          isThereEmptyValue = true;
        }
      });
    });
    if (isThereEmptyValue) {
      alert('يجب عليك ملئ الحقول السابقة اولاً!');

      return;
    }
  }
  const object = {
    donor: '',
    major: '',
    year: '',
  };

  studyTraining.push(object);
};

const addMedicalLicense = () => {
  let isThereEmptyValue = false;
  if (medicalLicense.length) {
    medicalLicense.forEach((element) => {
      Object.values(element).forEach((value) => {
        if (!value.length) {
          isThereEmptyValue = true;
        }
      });
    });
    if (isThereEmptyValue) {
      alert('يجب عليك ملئ الحقول السابقة اولاً!');

      return;
    }
  }
  const object = {
    donor: '',
    major: '',
    year: '',
  };

  medicalLicense.push(object);
};

const addNewSpecialty = () => {
  let isThereEmptyValue = false;
  if (specialties.length) {
    specialties.forEach((element) => {
      Object.values(element).forEach((value) => {
        if (!value.length) {
          isThereEmptyValue = true;
        }
      });
    });
    if (isThereEmptyValue) {
      alert('يجب عليك ملئ الحقول السابقة اولاً!');

      return;
    }
  }
  const object = {
    donor: '',
    major: '',
    year: '',
  };

  specialties.push(object);
};

const addNewCertificate = () => {
  let isThereEmptyValue = false;
  if (certificates.length) {
    certificates.forEach((element) => {
      Object.values(element).forEach((value) => {
        if (!value.length) {
          isThereEmptyValue = true;
        }
      });
    });
    if (isThereEmptyValue) {
      alert('يجب عليك ملئ الحقول السابقة اولاً!');

      return;
    }
  }
  const object = {
    donor: '',
    major: '',
    year: '',
  };

  certificates.push(object);
};
</script>
<style></style>
