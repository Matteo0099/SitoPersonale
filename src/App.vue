<script setup>
import Nav from './components/Navbar.vue'
import Hero from './components/HeroSect.vue'
import About from './components/About.vue'
import Skills from './components/Skills.vue'
import Project from './components/Project.vue'
import Form from './components/Form.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div>
    <main class="font-sans m-0 p-0 min-h-screen scroll-smooth scroll-p-5">
      <Nav></Nav>
      <Hero></Hero>
      <About></About>
      <Skills></Skills>
      <Project></Project>
      <Form></Form>
      <Footer></Footer>
      <div id="adsgoeshere" 
          style="background: #1d1f29; padding-top:60px; text-align: center;" 
          v-html="adsenseContent"></div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    Nav,
    Hero, 
    About,
    Skills,
    Project,
    Form,
    Footer
  }
}
</script>