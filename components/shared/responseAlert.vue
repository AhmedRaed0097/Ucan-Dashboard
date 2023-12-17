<template>
    <div>
        <div v-if="props.response">
            <v-snackbar
            v-model="snackbar"
            :timeout="4000"
            :color="props.response.success ? 'success' : 'error'"
            >
            <div class="text-center">
                {{ props.response.message }}
            </div>
            </v-snackbar>
        </div>
    </div>
</template>

<script setup>
const snackbar = ref(true)
const props = defineProps({
  response: {
    type: Object,
    // eslint-disable-next-line vue/require-valid-default-prop
    default: {},
  }
})
</script>

<style scoped>

</style>