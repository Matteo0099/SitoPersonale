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
      <div class="container">
        <ins class="adsbygoogle" style="display:block" 
            data-ad-client="ca-pub-5370518478483298" data-ad-slot="4824315952"
            data-ad-format="auto" data-full-width-responsive="true">
        </ins>
      </div>
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
  },
  mounted() {
    this.adsenseAddLoad();
  },
  methods: {
    adsenseAddLoad() {
      let inlineScript = document.createElement("script");
      inlineScript.type = "text/javascript";
      inlineScript.text = '(adsbygoogle = window.adsbygoogle || []).push({});'
      document.getElementsByTagName('body')[0].appendChild(inlineScript);
    }
  }
}
</script>