<template>
  <v-navigation-drawer v-model="props.drawer" :permanent="props.isDesktop" :temporary="!props.isDesktop"
    color="grey-darken-4" dark app class="drawer-custom">
    <div class="drawer-content">
      <div class="drawer-main">
      <Search v-model:value="search" />

        <v-list nav density="comfortable">
          <v-list-item v-for="route in filteredRoutes" :key="route.to" :prepend-icon="route.icon" :title="route.title"
            :to="route.to" />
        </v-list>
      </div>

      <div class="drawer-footer">
        <v-divider class="my-2" />
        <v-list-item class="mt-2 px-4">
          <template #prepend>
            <v-avatar size="32">
              <v-img
                src="https://media.licdn.com/dms/image/v2/D4D03AQEI-YKxPVWTwg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1685482227577?e=1756339200&v=beta&t=VQVA_dlE9VBznr-MNExY-u7cXRWut-Wn_NjwJR9aQPg" />
            </v-avatar>
          </template>
          <v-list-item-title class="text-white text-subtitle-2">
            André Lopes Melani
          </v-list-item-title>
          <v-list-item-subtitle class="text-white text-caption">
            andre.lopes.melani@gmail.com
          </v-list-item-subtitle>
        </v-list-item>
      </div>
    </div>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { useRouteSearch } from '@/composables/useRouteSearch';
import { routes } from '@/utils/routes';
import { useI18n } from "vue-i18n";

const props = defineProps<{
  isDesktop: boolean
  drawer: boolean
}>()

const { search, filteredRoutes } = useRouteSearch()

</script>


<style scoped lang="scss">
.drawer-custom {
  .drawer-content {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .drawer-main {
    flex-grow: 1;
    overflow-y: auto;
  }

  .drawer-footer {
    padding-bottom: 16px;

    .v-list-item-subtitle {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

  }

  .v-list {
    display: flex;
    flex-direction: column;
    gap: 8px;

    .v-list-item {
      border-radius: 8px;
      margin: 2px 8px;

      &:hover {
        background-color: rgba(255, 255, 255, 0.08);
      }

    }
  }


}
</style>
