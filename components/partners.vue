<template>
    <div class="partners" id="partners">
        <div class="partners-heading-en"><h2>PARTNERS</h2></div>
        <div class="partners-heading-jp">協力団体</div>
        <div class="partners-container">
            <div class="partners-content" v-for="elem in partners" :key="elem.id">
                <div class="partners-content-img"><img :src="elem.partnersImg.url" :alt="elem.partnersName"></div>
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
    align-items: center;
    padding: 40px 40px 0;
}
</style>