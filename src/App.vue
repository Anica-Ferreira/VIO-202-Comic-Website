<!--Anica Ferreira u24581802*-->
<template>

    <main>
        <div class="infographic_container">
            <Cover/>
            <Infographic1/>
            <Infographic2/>
            <Infographic3/>
            <Infographic4/>
            <Comic1/>
            <Comic2/>
            <Comic3/>
            <Comic4/>
            <Comic5/>
            <About/>
        </div>
    </main>

 </template>
  
<script>
    import Lenis from 'lenis'
    import Cover from './components/Cover.vue'
    import Infographic1 from './components/Infographic1.vue'
    import Infographic2 from './components/Infographic2.vue'
    import Infographic3 from './components/Infographic3.vue'
    import Infographic4 from './components/Infographic4.vue'
    import Comic1 from './components/Comic1.vue'
    import Comic2 from './components/Comic2.vue'
    import Comic3 from './components/Comic3.vue'
    import Comic4 from './components/Comic4.vue'
    import Comic5 from './components/Comic5.vue'
    import About from './components/About.vue'
  
    export default {
        components: {
            Cover,
            Infographic1,
            Infographic2,
            Infographic3,
            Infographic4,
            Comic1,
            Comic2,
            Comic3,
            Comic4,
            Comic5,
            About,
        }
    }

    //smoothe scrolling
    const lenis = new Lenis()
    lenis.on('scroll', (e) => {
    })

    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

</script>
