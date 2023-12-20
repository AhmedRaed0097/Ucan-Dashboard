<script setup lang="ts">
/*Call Components*/
import WeekIncome from '@/components/dashboard/WeekIncome.vue';
import Customers from '@/components/dashboard/Customers.vue';
import MonthlyEarning from '@/components/dashboard/MonthlyEarnings.vue';
</script>
<template>
  <v-row>
    <v-col cols="12">
      <v-row>
        <!-- نظرة عامة على المبيعات -->
        <v-col cols="12" lg="8">
          <WeekIncome />
        </v-col>
        <!-- الانفصال السنوي / الدخل الشهري -->
        <v-col cols="12" lg="4">
          <div class="mb-6">
            <Customers />
          </div>
          <div>
            <MonthlyEarning />
          </div>
        </v-col>
      </v-row>
    </v-col>
    <v-col class="text-center mt-2">
      <p class="text-muted">
        Design and Developed by <span class="text-primary">Ahmed Raed</span>
      </p>
    </v-col>
  </v-row>
</template>
