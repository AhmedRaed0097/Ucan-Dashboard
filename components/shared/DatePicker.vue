<template>
  <div :class="customClass">
    <label :for="id" class="custom-control-label float-end">
      {{ label }}
    </label>
    <VueDatePicker
      v-model="date"
      format="yyyy/MM/dd"
      :flow="flow"
      :is-24="!withTime"
      locale="ar"
      :max-date="maxDate"
      :min-date="currentYear"
      :day-names="['اث', 'ث', 'ار', 'خ', 'ج', 'س', 'اح']"
      :range="range"
      :placeholder="placeholder"
      :class="customClass"
      auto-apply
      :close-on-auto-apply="true"
      position="center"
      :hideNavigation="['time']"
    />
    <div v-if="errorMessage.length" class="error-message">
      {{ errorMessage }}
    </div>
  </div>
</template>

<script setup>
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

const props = defineProps({
  maxDate: {
    type: String,
    default: '',
  },
  modelValue: {
    type: String,
    default: '',
  },
  id: {
    type: String,
    default: 'datepicker',
  },
  label: {
    type: String,
    default: '',
  },
  errorMessage: {
    type: String,
    default: '',
  },
  withTime: {
    type: Boolean,
    default: false,
  },
  range: {
    type: Boolean,
    default: false,
  },
  maxDateToday: {
    type: Boolean,
    default: false,
  },
  placeholder: {
    type: String,
    default: '',
  },
  customClass: {
    type: String,
    default: '',
  },
});

const emit = defineEmits(['update:modelValue']);

const date = ref(props.modelValue);

const flow = ref(['year','month', 'calendar']);


const format = (date) => {
  if (date) {
    if (props.range) {
      let range = [];
      const separator = ',';
      for (const item of date) {
        const day = String(item.getDate()).padStart(2, '0');
        const month = String(item.getMonth() + 1).padStart(2, '0');
        const year = String(item.getFullYear()).padStart(2, '0');

        const date = `${year}-${month}-${day}`;

        range.push(date);
      }

      const result = range.join(separator);

      return result;
    } else {
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const year = String(date.getFullYear()).padStart(2, '0');
      if (props.withTime) {
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        return `${year}-${month}-${day} ${hours}:${minutes}:00`;
      } else {
        return `${year}-${month}-${day}`;
      }
    }
  } else {
    return null;
  }
};

watch(
  () => date.value,
  (newValue) => {
    emit('update:modelValue', format(newValue));
  }
);

watch(
  () => props.modelValue,
  (newValue) => {
    if (!newValue) {
      date.value = newValue;
    }
  }
);

const currentYear = computed(() => {
  if(!props.maxDateToday) {
    const currentDate = new Date();

    // Get the current year
    const currentYear = currentDate.getFullYear().toString();

    return currentYear;
  }
});

</script>
<style lang="scss">
.dp__calendar_header .dp__calendar_header_item {
  margin: 0 5px;
}
.dp__action_button {
  height: auto;
  padding: 4px 6px;
}

.dp__clear_icon {
  right: auto !important;
  left: 20px !important;
  // top: 70% !important;
  top: 53% !important;
}
.dp__input_icon {
  @extend .dp__clear_icon;
  left: 0 !important;
}

.dp__input {
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  justify-content: flex-end;
  min-height: calc(
    var(--ms-border-width, 1px) * 2 + var(--ms-font-size, 1rem) *
      var(--ms-line-height, 1.375) + var(--ms-py, 0.5rem) * 2
  );
  outline: none;
  position: relative;
  width: 100%;
  margin-bottom: 1px;
  height: 42px;
}

// custom style
.custom {
  display: flex;
  align-items: flex-start;
}
.custom .dp__input {
  border: solid 1px #a8a8a8 !important;
  border-radius: 6px;
  font-size: 14px;
  font-weight: bolder;
  color: #67748e;
  height: 40%;
  padding: 3px 20px;
}

.custom .dp__clear_icon {
  top: 50% !important;
  color: #67748e;
}
.custom ::placeholder {
  color: #444c5c;
  font-size: 16px;
  font-weight: bold;
}

.error-message {
  font-size: 12px;
  color: rgb(176, 0, 32);
  margin-inline-start: 18px;
  padding-top: 5px;
  position: absolute;
  text-align: right;
  min-width: 180px;
}
</style>
