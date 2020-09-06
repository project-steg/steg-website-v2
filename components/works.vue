<template>
    <div class="works" id="works">
        <div class="works-head">
            <div class="works-heading-en"><h2>WORKS</h2></div>
            <div class="works-heading-jp">制作実績</div>
        </div>
        <div class="works-container">
            <a class="works-content" :href="elem.worksUrl" v-for="elem in works" :key="elem.id" target="_blank" rel="noopener noreferrer">
                <img :src="elem.worksImg.url" :alt="elem.worksTitle" class="works-content-img">
                <div class="works-content-item">
                    <div class="works-name">{{elem.worksTitle}}</div>
                    <div class="works-arrow">→</div>
                </div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    props: ["works"],
}
</script>

<style lang="scss" scoped>
.works{
    width: 100%;
    display: flex;
    background: $bgColor;
    padding: 80px 0;
    @include mq(lg) {
        flex-direction: column;
        padding: 60px 0;
    }
    @include mq(sm) {
        padding: 40px 0;
    }
}
.works-head{
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    @include mq(lg) {
        width: 100%;
    }
}

.works-heading-en{
    h2{
        font-size: 3rem;
        font-weight: 700;
        color: $textColor;
        line-height: 2.5rem;
        border-bottom: 4px solid $mainColor;
    }
}

.works-heading-jp{
    font-size: 1rem;
    font-weight: 700;
    color: $textColor;
    padding: 30px 0;
    @include mq(lg) {
        padding: 10px 0 20px;
    }
}

.works-container{
    width: 60%;
    display: flex;
    overflow-x: auto;  /* 横スクロールの指定 */
    white-space: nowrap;  /* 横スクロールの指定 */
    -webkit-overflow-scrolling: touch;  /* スクロールを滑らかにする */
    scrollbar-width: none; /* Firefoxでスクロールバーを非表示にする */
    -ms-overflow-style: none;  /* IE、Edgeでスクロールバーを非表示にする */
    @include mq(lg) {
        width: 100%;
    }
    &::-webkit-scrollbar {
        display:none;
    }
    a{
        text-decoration: none;
    }
}

.works-content{
    width: 380px;
    margin: 0 20px;
    @include mq(sm) {
        width: 300px;
    }
    img{
        width: 380px;
        height: 400px;
        object-fit: cover;
        @include mq(sm) {
            width: 300px;
            height: 315px;
        }
    }
}

.works-content-item{
    width: 380px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @include mq(sm) {
        width: 300px;
    }
}

.works-name{
    font-size: 1rem;
    color: $textColor;
}

.works-arrow{
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.2rem;
    background: $subColor;
    border-radius: 50%;
}
</style>