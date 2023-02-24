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
  <main class="font-sans m-0 p-0 min-h-screen scroll-smooth">
    <Nav></Nav>
    <Hero></Hero>
    <About></About>
    <Skills></Skills>
    <Project></Project>
    <Form></Form>
    <Footer></Footer>
  </main>
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