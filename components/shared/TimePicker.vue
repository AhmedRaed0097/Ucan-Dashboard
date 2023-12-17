<!-- TW Elements is free under AGPL, with commercial license required for specific uses. See more details: https://tw-elements.com/license/ and contact us for queries at tailwind@mdbootstrap.com -->
<template>
  <div>
    <span>{{ props.placeholder }}</span>
    <vue-timepicker
      format="hh:mm a"
      v-model="selectedTime"
      hourLabel="الساعة"
      minuteLabel="الدقيقة"
      amText="صباحاً"
      pmText="مساءً"
      apmLabel="الفترة"
      :placeholder="props.placeholder"
      :hours="[]"
      close-on-complete
      :class="{ 'error-field': invalidField }"
    ></vue-timepicker>
  </div>
</template>

<script setup>
import VueTimepicker from 'vue3-timepicker';
import 'vue3-timepicker/dist/VueTimepicker.css';
const emit = defineEmits(['update:modelValue', 'change']);

const props = defineProps({
  placeholder: {
    type: String,
    default: 'من',
  },
});

const invalidField = ref(false);
const selectedTime = ref({ hh: '12', mm: '00', a: 'am' });

watch(
  () => selectedTime.value,
  (newValue) => {
    let emptyValuesCount = 0;
    Object.values(selectedTime.value).forEach((value) => {
      if (value.length === 0) {
        emptyValuesCount++;
      }
    });

    if (emptyValuesCount === Object.values(selectedTime.value).length) {
      invalidField.value = true;
      emit('update:modelValue', null);
    } else {
      invalidField.value = false;
      emit('update:modelValue', format(newValue));
    }
    emit('change');
  },
  { deep: true }
);

const format = (date) => {
  return `${date.hh}:${date.mm} ${date.a}`;
};
</script>
<style lang="scss">
.error-field .vue__time-picker-input {
  border: 1px solid #fa896b !important;
}
</style>
