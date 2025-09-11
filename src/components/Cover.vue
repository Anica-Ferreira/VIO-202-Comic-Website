<!--Anica Ferreira u24581802*-->
<template>
    <div class="cover_container">
        <img src="@/assets/images/cover/background.png" class="cover-anchor">
        <img src="@/assets/images/cover/bushes.webp" id="bushes">
        <img src="@/assets/images/cover/trees.webp">
        <img src="@/assets/images/cover/grass.webp">
        <img src="@/assets/images/cover/comic_title.webp" id="title">
        <img src="@/assets/videos/malbrush_blinking.gif">
        <img src="@/assets/videos/creature_blinking_animation.gif">
        <img src="@/assets/images/cover/flame.webp" id="flame">
        <img src="@/assets/videos/mushroom_blinking1.gif" id="small_mushroom">
        <img src="@/assets/images/cover/bushes_front.webp">
    </div>
</template>

<style>
.cover-anchor,.cover_container{width:100%;height:auto;position:relative}#flame,#small_mushroom{animation:4s ease-in-out infinite float}.cover_container{overflow:hidden}.cover_container img:not(.cover-anchor){position:absolute;top:0;left:0;width:100%;height:auto}.cover-anchor{display:block;z-index:0;visibility:hidden}#flame{opacity:.8}#title{animation:6s ease-in-out infinite breathe}@keyframes float{0%,100%{transform:translateY(0);filter:saturate(.8)}50%{transform:translateY(-6px);filter:saturate(1.2)}}@keyframes breathe{0%,100%{transform:scale(1)}50%{transform:scale(1.009)}}
</style>
  