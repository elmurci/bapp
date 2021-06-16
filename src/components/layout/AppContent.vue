<template>
  <div>
    <transition name="fade">
        <router-view></router-view>
    </transition>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'AppContent',
  components: {
  }
})
export default class AppContent extends Vue {
  created () {
    //
  }
}
</script>
