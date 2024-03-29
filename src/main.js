import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'uno.css'
import gsap from 'gsap'
import { ScrollTrigger, ScrollToPlugin } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

const app = createApp(App)
app.provide('$gsap', gsap)
app.mount('#app')
