import Vue from 'vue'
import '@/styles/loading.scss'

Vue.directive('loading', (el, binding) => {
  if (binding.value) {
    el.classList.add('is-loading')
  } else {
    el.classList.remove('is-loading')
  }
})
