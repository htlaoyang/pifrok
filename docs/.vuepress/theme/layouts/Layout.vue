<template>
  <div>
    <ListLayout v-if="$pagination" />
    <Content v-else />
  </div>
</template>

<script>
import ListLayout from '@theme/components/ListLayout.vue'

export default {
  name: 'Layout',
  components: {
    ListLayout
  },
  data () {
    return {
      isSidebarOpen: false
    }
  },
}
</script>
