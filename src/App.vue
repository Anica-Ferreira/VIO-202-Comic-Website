<!--Anica Ferreira u24581802*-->
<template>

    <main>
        <div class="infographic_container">
            <Cover/>
            <Infographic1/>
            <Infographic2/>

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
  
    export default {
        components: {
            Cover,
            Infographic1,
            Infographic2,
            Infographic3,
            Infographic4
        }
    }

    //smoothe scrolling
    const lenis = new Lenis()
    lenis.on('scroll', (e) => {
        console.log(e)
    })

    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

</script>
