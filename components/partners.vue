<template>
    <div class="partners" id="partners">
        <div class="partners-heading-en"><h2>PARTNERS</h2></div>
        <div class="partners-heading-jp">協力団体</div>
        <div class="partners-container">
            <div class="partners-content" v-for="elem in partners" :key="elem.id">
                <a :href="elem.partnersUrl" target="_blank" rel="noopener noreferrer">
                    <div class="partners-content-img"><img :src="elem.partnersImg.url" :alt="elem.partnersName"></div>
                </a>
                <div class="partners-content-name">{{elem.partnersName}}</div>
                <div class="partners-content-introduction">{{elem.partnersText}}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["partners"],
}
</script>

<style lang="scss" scoped>
.partners{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px 0;
    @include mq(lg) {
        padding: 60px 0;
    }
    @include mq(sm) {
        padding: 40px 0;
    }
}

.partners-heading-en{
    h2{
        font-size: 2rem;
        font-weight: 700;
        color: $textColor;
        border-bottom: 2px solid $mainColor;
    }    
}

.partners-heading-jp{
    font-size: 1rem;
    font-weight: 700;
    color: $textColor;
    padding: 10px 0;
}

.partners-container{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.partners-content{
    width: 320px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 0 0;
    margin: 0 50px;
    @include mq(lg) {
        width: 256px;
    }
    @include mq(sm) {
        width: 130px;
        padding: 20px 0 0;
        margin: 0 10px;
    }
    
}

.partners-content-img{
    width: 280px;
    height: 280px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 10px solid rgba($mainColor,0.5);
    border-radius: 50%;
    @include mq(lg) {
        width: 240px;
        height: 240px;
        border: 8px solid rgba($mainColor,0.5);
    }
    @include mq(sm) {
        width: 120px;
        height: 120px;
        border: 5px solid rgba($mainColor,0.5);
    }
    img{
        width: 164px;
        height: auto;
        @include mq(lg) {
            width: 140px;
        }
        @include mq(sm) {
            width: 75px;
        }
    }
}

.partners-content-name{
    font-size: 1.2rem;
    color: $textColor;
    border-bottom: 2px solid $mainColor;
    padding-bottom: 10px;
    margin: 30px 0;
    @include mq(sm) {
        display: none;
    }
}

.partners-content-introduction{
    font-size: 1rem;
    color: $textColor;
    text-align: center;
    @include mq(sm) {
        display: none;
    }
}
    
</style>