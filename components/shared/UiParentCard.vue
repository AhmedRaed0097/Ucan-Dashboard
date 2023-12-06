<script setup lang="ts">
const props = defineProps({
    title: String,
    class:String
});
</script>

// ===============================|| Ui Parent Card||=============================== //
<template>
<div class="d-flex">
    <h3 class="text-h2 mb-6 pl-7 pt-7">{{ title }}</h3>
    <!-- <div> -->

        <v-text-field
        width="30%"
        v-model="search"
        prepend-inner-icon="mdi-magnify"
        density="compact"
        label="Search"
        single-line
        flat
        hide-details
      variant="solo-filled"
      ></v-text-field>
    <!-- </div> -->

</div>
    <v-card elevation="10" class="withbg">
        <v-card-item class="pa-0">
            <div class="d-sm-flex align-center justify-space-between">
                <!-- <template v-slot:append> -->
                <slot name="action"></slot>
                <!-- </template> -->
            </div>

            <slot />
        </v-card-item>
       
    </v-card>
</template>
