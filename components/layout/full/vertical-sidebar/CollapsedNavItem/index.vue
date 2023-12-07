<script setup>
import Icon from "../Icon.vue";
const props = defineProps({ item: Object, level: Number });
</script>

<template>
  <v-list-group>
    <template v-slot:activator="{ props }">
      <v-list-item v-bind="props" :title="item.groupTitle">
        <template v-slot:prepend>
          <Icon :item="item.icon" />
        </template>
      </v-list-item>
    </template>
    <v-list-item
      v-for="(child, index) in item.children"
      :key="index"
      :to="child.to"
      rounded
      class="mb-1"
      color="primary"
      :value="child.to"
      :disabled="child.disabled"
      :target="item.type === 'external' ? '_blank' : ''"
    >
      <!---If icon-->
      <template v-slot:prepend>
        <Icon :item="child.icon" :level="level" />
      </template>
      <v-list-item-title>{{ child.title }}</v-list-item-title>
      <!---If Caption-->
      <v-list-item-subtitle
        v-if="child.subCaption"
        class="text-caption mt-n1 hide-menu"
      >
        {{ child.subCaption }}
      </v-list-item-subtitle>
      <!---If any chip or label-->
      <template v-slot:append v-if="child.chip">
        <v-chip
          :color="child.chipColor"
          class="sidebarchip hide-menu"
          :size="'small'"
          :variant="item.chipVariant"
          :prepend-icon="child.chipIcon"
        >
          {{ child.chip }}
        </v-chip>
      </template>
    </v-list-item>
  </v-list-group>
</template>
