<!--Anica Ferreira u24581802*-->
<template>
    <div class="cover_container">
        <img src="@/assets/images/cover/background.png" class="cover-anchor">
        <img src="@/assets/images/cover/bushes.png" id="bushes">
        <img src="@/assets/images/cover/trees.png">
        <img src="@/assets/images/cover/grass.png">
        <img src="@/assets/images/cover/comic_title.png" id="title">
        <img src="@/assets/videos/malbrush_blinking.gif">
        <img src="@/assets/videos/creature_blinking_animation.gif">
        <img src="@/assets/images/cover/flame.png" id="flame">
        <img src="@/assets/videos/mushroom_blinking1.gif" id="small_mushroom">
        <img src="@/assets/images/cover/bushes_front.png">
    </div>
</template>

<style>

.cover_container {
    position: relative;
    width: 100%;
    height: auto;
    overflow: hidden;
}

.cover_container img:not(.cover-anchor) {
    position: absolute;
    top: 0%;
    left: 0%;
    width: 100%;
    height: auto;
}

.cover-anchor {
    display: block;
    width: 100%;
    height: auto;
    position: relative;
    z-index: 0;
    visibility: hidden;
}

#flame{
    opacity: 0.8;
    animation: float 4s ease-in-out infinite;
}

#small_mushroom{
    animation: float 4s ease-in-out infinite;
}

#title {
    animation: breathe 6s ease-in-out infinite;
}

/* Animations */
@keyframes float {
    0% {
        transform: translateY(0);
        filter: saturate(0.8);
    }

    50% {
        transform: translateY(-6px);
        filter: saturate(1.2);
    }

    100% {
        transform: translateY(0);
        filter: saturate(0.8);
    }
}

@keyframes breathe {
    0%   { transform: scale(1); }
    50%  { transform: scale(1.009); }
    100% { transform: scale(1); }
}
</style>
  