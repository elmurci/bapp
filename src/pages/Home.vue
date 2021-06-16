<template>
  <div class="bg-xblack">
    <section class="pt-4 md:pt-12 xHeroBgMobile">
      <div class="mx-20 flex flex-wrap flex-col md:flex-row items-center pHero">
        <div class="flex flex-col md:w-1/2 justify-top items-start text-center md:text-left">
          <h1 class="text-4xl md:text-6xl xbold leading-tight preLine">
            {{ $t('home.hero.title') }}
          </h1>
          <p class="leading-normal pr-4 text-md md:mb-8 preLine text-left">
            {{ $t('home.hero.text') }}
          </p>
        </div>
        <div class="flex flex-col w-1/2 pt-8">
          <img src="img/boto_ux.gif" class="border-8 border-white rounded rounded-lg">
        </div>
      </div>
    </section>
    <section>
      <div class="pr-4 md:pr-24 w-full mx-4 md:mx-20" id="how-it-works">
        <div class="md:flex md:mt-26">
          <div class="p-2 md:max-w-md md:w-1/3">
            <h3 class="text-4xl text-white xbold leading-none mb-3">
              {{ $t('home.main.content.third.title') }}
            </h3>
          </div>
          <div class="md:w-2/3 sm:w-full p-2 md:flex">
            <div class="w-full md:px-10">
              <div class="mb-14 text-md">
                <ol>
                  <li class="align-top inline-block pr-6 mb-12 md:w-1/3" v-for="(item, index) in stepsContent" :key="index">
                    <h4 class="text-xblack uppercase xbold">{{ item.title }}</h4>
                    <p class="mt-2">{{ item.text }}</p>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div class="md:flex md:mt-26" id="featured">
          <div class="p-2 md:max-w-md md:w-1/3">
            <h3 class="text-4xl text-white xbold leading-none mb-3">
              {{ $t('home.main.content.second.title') }}
            </h3>
          </div>
          <div class="md:w-2/3 sm:w-full p-2 md:flex">
            <div class="w-full md:px-10">
              <div class="mb-14 text-md">
                <ol>
                  <li class="align-top inline-block pr-6 mb-12 md:w-1/3" :class="'text-' + item.align" v-for="(item, index) in awards" :key="index">
                    <div class="clearfix">
                      <img :src="'img/' + item.icon" width="100px" :class="(item.align === 'center') ? 'm-auto' : 'float-' + item.align">
                    </div>
                    <h4 class="text-xblack uppercase xbold">{{ item.title }}</h4>
                    <p class="mt-2">{{ item.text }}</p>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="xl:pt-10 bg-no-repeat bg-contain xl:bg-cover xBg">
      <div class="px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center pHero">
        <h3 class="w-1/2 mx-auto text-3xl xbold leading-tight text-center text-white" v-html="$t('home.box_1.title')"></h3>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import i18n from '@/i18n'

@Component({
  name: 'Home',
  components: {
  }
})
export default class Home extends Vue {
  stepsContent: any = i18n.t('home.main.content.third.steps')
  awards: any = i18n.t('home.main.content.second.awards')
  created () {
    this.$root.$on('locale-changed', (value: string) => {
      this.stepsContent = i18n.t('home.main.content.third.steps')
      this.awards = i18n.t('home.main.content.second.awards')
    })
  }
}
</script>
