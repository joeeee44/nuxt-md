import Vue from 'vue'

import Header from '~/layouts/HeaderComponent.vue'
import Footer from '~/layouts/FooterComponent.vue'
import Logo from '~/components/Logo.vue'
import MarkDown from '~/components/MarkDown.vue'
import vueHljs from 'vue-hljs'

Vue.component('header-component', Header)
Vue.component('footer-component', Footer)
Vue.component('logo', Logo)
Vue.component('markdown', MarkDown)
Vue.use(vueHljs)
