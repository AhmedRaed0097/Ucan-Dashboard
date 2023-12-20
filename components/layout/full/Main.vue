<script setup>
import { ref, shallowRef } from 'vue';
import sidebarItems from '@/components/layout/full/vertical-sidebar/sidebarItem';
import { Menu2Icon } from 'vue-tabler-icons';
import { useTheme } from 'vuetify';

const sidebarMenu = shallowRef(sidebarItems);
const sDrawer = ref(true);
const darkMode = ref(false);
const theme = useTheme();
const isDarkMode = localStorage.getItem('isDarkMode');
if (isDarkMode === 'true') {
  darkMode.value = isDarkMode;
  theme.global.name.value = 'dark';
}

const toggleTheme = () => {
  darkMode.value = !darkMode.value;
  localStorage.setItem('isDarkMode', darkMode.value);
  theme.global.name.value = darkMode.value ? 'dark' : 'light';
};
</script>

<template>
  <!------Sidebar-------->
  <v-navigation-drawer elevation="0" app class="rightSidebar" v-model="sDrawer">
    <!---Logo part -->
    <!-- ---------------------------------------------- -->
    <!---Navigation -->
    <!-- ---------------------------------------------- -->
    <div>
      <div class="">
        <LayoutFullLogo />
      </div>
      <perfect-scrollbar class="scrollnavbar">
        <v-list class="pa-6">
          <!---Menu Loop -->
          <template v-for="(item, i) in sidebarMenu" :key="i">
            <!---Item Sub Header -->

            <LayoutFullVerticalSidebarCollapsedNavItem
              v-if="item.groupTitle"
              :item="item"
              class="leftPadding"
            />

            <!---Single Item-->
            <LayoutFullVerticalSidebarNavItem
              :item="item"
              v-else
              class="leftPadding"
            />
            <!---End Single Item-->
          </template>
        </v-list>
      </perfect-scrollbar>
    </div>
  </v-navigation-drawer>
  <!------Header-------->
  <v-app-bar elevation="0" height="70">
    <div class="d-flex align-center justify-space-between w-100">
      <div>
        <v-btn
          class="ms-md-3 ms-sm-5 ms-3 text-muted"
          @click="sDrawer = !sDrawer"
          icon
          variant="flat"
          size="small"
        >
          <Menu2Icon size="20" stroke-width="1.5" />
        </v-btn>
        <!-- Notification -->
      </div>
      <div>
        <!-- Upgrade button -->
        <v-btn class="mr-2 bg-primary" to="/auth/login">تسجيل الدخول</v-btn>

        <v-btn v-if="darkMode" icon @click="toggleTheme" class="mx-4">
          <img src="~/assets/icons/moon.svg" alt="dark mode" />
        </v-btn>
        <v-btn v-else icon @click="toggleTheme" class="mx-4">
          <img src="~/assets/icons/sun.svg" alt="light mode" />
        </v-btn>
        <!-- User Profile -->
        <LayoutFullVerticalHeaderProfileDD />
      </div>
    </div>
  </v-app-bar>
</template>
