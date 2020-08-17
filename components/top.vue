<template>
    <div class="top" id="top">
        <div class="top-space"></div>
        <div class="top-container">
            <div class="scroll-down">
                <div class="stickarrow">
                    <div class="stickarrow-left"></div>
                    SCROLL DOWN
                </div>
            </div>
            <div class="main-visual">
                <div class="main-visual-container">
                    <div class="main-visual-tagline">
                        <div class="tagline-container">
                            <div class="tagline-jp"><p>学生の</p><p class="main-color">未来</p><p>に自由な選択肢を</p></div>
                            <div class="tagline-en"><p>FREE CHOICE FOR</p></div>
                            <div class="tagline-en"><p>STUDENTS' </p><p class="main-color">FUTURE</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.top{
    height: 75vh;
    min-height: 450px;
    width: 100%;
    background: white;
    @include mq(sm) {
        height: 100vh;
    }
}

.top-space{
    height: 75px;
    width: 100%;
    @include mq(sm) {
        height: 65px;
    }
}

.top-container{
    width: 100%;
    height: calc(100% - 75px);
    display: flex;
    @include mq(sm) {
        height: calc(100% - 65px);
        flex-direction: row-reverse;
    }
}

.scroll-down{
    width: 20%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    @include mq(sm) {
        width: 28%;
    }
}

.stickarrow {
    position: relative;
    width: 150px;
    height: 20px;
    font-size: 0.8rem;
    text-align: right;
    border-bottom: 1px solid $textColor;
    transform: rotate(-90deg) translateX(75px);
    @include mq(sm) {
        transform: rotate(-90deg) translateX(155px);
    }
}

.stickarrow-left{
    position: absolute;
    width: 100%;
    height: 100%;
    border-left: 1px solid $textColor;
    transform: skew(-45deg) translateX(10px);
}
.main-visual{
    width: 80%;
    height: 100%;
    @include mq(sm) {
        width: 72%;
    }
}

.main-visual-container{
    background: url("/img/mainVisual.jpg");
    background-size: cover;
    background-position: center;
    width: 100%;
    height: calc(100% - 80px);
    display: flex;
    align-items: flex-end;
    padding-bottom: 40px;
}

.main-visual-tagline{
    width: 515px;
    height: 205px;
    background: rgba(255, 255, 255, 0.85);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @include mq(lg) {
        width: 458px;
    }
    @include mq(sm) {
        width: 295px;
        height: 137px;
        position: absolute;
        top: 165px;
        right: 0;
    }
}

.tagline-jp{
    display: flex;
    p{
        font-size: 1.2rem;
        color: $subColor;
    }
    .main-color{
        color: $mainColor;
    }
}

.tagline-en{
    display: flex;
    p{
        font-size: 3rem;
        font-weight: 700;
        color: $subColor;
        @include mq(sm) {
            font-size: 2rem;
        }
    }
    .main-color{
        color: $mainColor;
    }
}


</style>