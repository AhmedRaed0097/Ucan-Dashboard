<!-- TW Elements is free under AGPL, with commercial license required for specific uses. See more details: https://tw-elements.com/license/ and contact us for queries at tailwind@mdbootstrap.com -->
<template>
  <div>
    <span>{{ props.label }}</span>
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
      :class="{ 'error-field': props.error }"
      @close="onClose"
    >
      <template v-slot:clearButton>
        <v-btn
          elevation="0"
          variant="text"
          size="x-small"
          icon
          @click="onClear"
        >
          <span class="tw-text-lg mdi mdi-close"></span>
        </v-btn>
      </template>
    </vue-timepicker>
  </div>
</template>

<script setup>
import VueTimepicker from 'vue3-timepicker';
import 'vue3-timepicker/dist/VueTimepicker.css';
const emit = defineEmits(['update:modelValue', 'blur']);

const props = defineProps({
  error: {
    type: Boolean,
    default: null,
  },
  label: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: 'من',
  },
  modelValue: {
    type: [Object,String],
    default: null,
  },
});

const invalidField = ref(false);
const selectedTime = ref(null);

if (props.modelValue) {
  selectedTime.value = props.modelValue;
}

const onClear = () => {
  selectedTime.value = null;
  onClose();
};

const onClose = () => {
  let emptyValuesCount = 0;

  if (selectedTime.value) {
    Object.values(selectedTime.value).forEach((value) => {
      if (value.length === 0) {
        emptyValuesCount++;
      }
    });
  }

  if (
    !selectedTime.value ||
    emptyValuesCount === Object.values(selectedTime.value).length
  ) {
    invalidField.value = true;
    emit('update:modelValue', null);
  } else {
    invalidField.value = false;
    emit('update:modelValue', selectedTime.value);
  }
  emit('blur');
};

watch(
  () => props.modelValue,
  (newValue) => {
    emit('blur');
    selectedTime.value = newValue;
  },
  { deep: true }
);

watch(
  () => props.error,
  (newValue) => {
    invalidField.value = newValue;
  },
  { deep: true }
);
</script>
<style lang="scss">
.error-field .vue__time-picker-input {
  border: 1px solid #fa896b !important;
}
</style>
