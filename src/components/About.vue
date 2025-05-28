<!--Anica Ferreira u24581802*-->
<template>
    <div class="about_section">
        <div class="infographic_content">
            

            <img src="@/assets/images/about/about.png" class="about">
            <img src="@/assets/videos/title.gif" class="author_title">       
            <img src="@/assets/videos/cats.gif" class="cats">
            <img src="@/assets/videos/author.gif" class="author">
        </div>
    </div>
  </template>
  
<script>


</script>

<style scoped>
    .about_section{
        position: relative;
        width: 100%;
        height: auto;
    }

    .about{
        position: absolute;
        top: 15vw;
        left: 0vw;
        width: 100vw;
        z-index: 10;
    }

    .author_title{
        position: absolute;
        top: 65vw;
        left: 0vw;
        width: 100vw;
        z-index: 11; 
    }

    .author{
        position: absolute;
        top: 85vw;
        left: 39vw;
        width: 20vw;
        z-index: 11; 
    }

    .cats{
        position: absolute;
        top: 127.5vw;
        left: 61vw;
        width: 26vw;
        z-index: 11; 
    }


</style>