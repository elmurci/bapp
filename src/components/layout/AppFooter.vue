<template>
  <!--Footer-->
  <footer class="bg-xblack">
    <section class="md:py-8">
      <div class="pr-4 md:pr-24 md:mx-20 flex flex-wrap pt-4 md:pb-12">
        <div class="w-full md:w-1/3 md:p-6 flex flex-col flex-grow flex-shrink px-6">
          <div class="flex-1 text-white">
              <h4 class="w-full xbold text-3xl">
                {{ $t('home.bottom.content.first.title') }}
              </h4>
              <p class="mt-4" v-html="$t('home.bottom.content.first.text')"></p>
          </div>
        </div>
        <div class="w-full md:w-1/3 md:p-6 mt-10 md:mt-0 flex flex-col flex-grow flex-shrink">
          <div class="flex-1 text-white">
            <label for="email" class="w-full xbold text-3xl px-6 block">
              {{ $t('home.bottom.content.second.title') }}
            </label>
            <div class="p-6 mt-4" id="wait-list">
              XXX
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/3 md:p-6 flex flex-col flex-grow flex-shrink">
          <div class="flex-1">
            <h4 class="w-full xbold text-3xl px-6">
              {{ $t('home.bottom.content.third.title') }}
            </h4>

            <p class="mt-4 px-6 mb-3">
              <a href="mailto:info@botoapp.io">
                <img src="/img/envelope.svg" class="inline-block pt-2 mr-3" alt="Email" title="Email">info@botoapp.io
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
    <div class="mx-auto px-8">
      <div class="w-full flex flex-col md:flex-row py-6">
        <div class="flex-1 mb-6">
          <div class="text-gray-600 ml-1 mt-8">v{{ version }} - <a class="text-gray-600" href="/legal/terms.html">Terms</a></div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import i18n from '@/i18n'

declare global {
  interface Window {
    hbspt: any;
  }
}

@Component({
  name: 'AppFooter',
  components: {
  }
})
export default class AppFooter extends Vue {
  version = require('../../../lib/version')
  partnersContent: any = i18n.t('home.bottom.content.partners')
  created () {
    //
  }

  mounted () {
  }
}
</script>
