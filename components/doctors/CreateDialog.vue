<script setup lang="ts">
const gender = ref(["ذكر", "انثى"]);
const qualifications = ref(["بكلاريوس", "ماجستير", "دكتوراه"]);
const dialog = ref(false);
</script>
<template>
  <v-dialog v-model="dialog" persistent width="800">
    <template v-slot:activator="{ props }">
      <v-btn height="39" color="primary" block v-bind="props">
        إنشاء طبيب جديد
      </v-btn>
    </template>
    <v-card class="rounded-lg pt-4">
      <v-card-title>
        <span class="text-h5 mr-4">اضافة طبيب جديد</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field
                label="الاسم"
                required
                variant="outlined"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                label="البريد الالكتروني"
                required
                variant="outlined"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                label="رمز الدولة"
                required
                variant="outlined"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                label="الجوال"
                required
                variant="outlined"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-select
                :items="gender"
                label="النوع"
                variant="outlined"
              ></v-select>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                :type="visible ? 'text' : 'password'"
                density="compact"
                label="ادخل كلمة المرور"
                variant="outlined"
                autocomplete="off"
                @click:append-inner="visible = !visible"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-select
                :items="qualifications"
                label="المؤهل العلمي"
                variant="outlined"
              ></v-select>
            </v-col>
            <v-col cols="12" sm="6">
              <v-file-input
                accept="image/png, image/jpeg, image/bmp"
                placeholder="Pick an avatar"
                prepend-icon=""
                prepend-inner-icon="mdi-camera"
                label="الصورة"
                variant="outlined"
              ></v-file-input>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" variant="outlined" @click="dialog = false">
          حفظ
        </v-btn>
        <v-btn color="error" variant="outlined" @click="dialog = false">
          الغاء
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
