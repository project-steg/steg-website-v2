<template>
    <div class="members" id="members">
        <div class="members-heading-en"><h2>MEMBERS</h2></div>
        <div class="members-heading-jp">メンバー</div>
        <input id="trigger1" class="grad-trigger" type="checkbox">
        <div class="grad-item">
            <div class="members-container">
                <a class="members-content" :href="elem.website" target="_blank" rel="noopener noreferrer" v-for="elem in members" :key="elem.id">
                    <img :src="elem.img.url" class="members-content-img" :alt="elem.name">
                    <div class="members-content-text">
                        <p class="members-content-position">{{elem.position}}</p>
                        <p class="members-content-position">{{elem.position2}}</p>
                        <p class="members-content-name">{{elem.name}}</p>
                    </div>
                </a>
            </div>
        </div>
        <label class="grad-btn" for="trigger1"></label>
    </div>
</template>

<script>
export default {
    props: ["members"],
}
</script>

<style lang="scss" scoped>
.members{
    width: 100%;
    background: $bgColor;
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

.members-heading-en{
    h2{
        font-size: 2rem;
        font-weight: 700;
        color: $textColor;
        border-bottom: 4px solid $mainColor;
    }    
}

.members-heading-jp{
    font-size: 1rem;
    font-weight: 700;
    color: $textColor;
    padding: 10px 0;
}

.members-container{
    max-width: 1240px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 40px 0 0;
    @include mq(lg) {
        padding: 20px 0 0;
    }
    @include mq(sm) {
        padding: 0;
    }
    a{
        text-decoration: none;
    }
}

.members-content{
    width: 150px;
    height: 150px;
    margin: 40px 40px 0;
    position: relative;
    &:hover .members-content-text{
        color: white;
        background: rgba(0,0,0,0.5);
    }
    @include mq(lg) {
        width: 240px;
        margin: 40px 10px 0;
    }
    @include mq(sm) {
        width: 160px;
        height: 100px;
        margin: 40px 5px 0;
    }
}

.members-content-img{	
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    @include mq(sm) {
        width: 100px;
        height: 100px;
    }
}

.members-content-text{
    position: absolute;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width : 150px;
    height: 150px;
    border-radius: 50%;
    font-family: "Noto Sans JP";
    font-size: 1rem;
    text-align: center;
    color: rgba(black, 0);
    @include mq(lg) {
        left: 90px;
        color: white;
        background: rgba(0,0,0,0.5);
    }
    @include mq(sm) {
        left: 60px;
        width: 100px;
        height: 100px;
    }
}

.members-content-position{
    font-size: 0.8rem;
}

.members-content-name{
    font-size: 1rem;
    font-weight: 700;
}

.grad-trigger {
  display: none;
}

@include mq(sm) {
    .grad-btn{
        width: 80px;
        height: 20px;
        font-family: "Noto Sans JP";
        font-size: 1.2rem;
        font-weight: 700;
        color: #404040;
        border-bottom: 2px solid $mainColor;
        display: block;
        margin: 0 auto;
        margin-top: 40px;
        text-align: center;
    }

    .grad-btn::before {
        content: "OPEN";
    }
    .grad-item {
        position: relative;
        overflow: hidden;
        height: 300px; /*隠した状態の高さ*/
    }
    .grad-item::before {
        display: block;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100px; /*グラデーションで隠す高さ*/
        background: linear-gradient(rgba(white,0), rgba($bgColor,0.8) 50%, $bgColor);;
        z-index: 1;
        content: "";
    }
    .grad-trigger {
        display: none; /*チェックボックスは常に非表示*/
    }
    .grad-trigger:checked ~ .grad-btn::before {
        content: "CLOSE"; /*チェックされていたら、文言を変更する*/
    }
    .grad-trigger:checked ~ .grad-item {
        height: auto; /*チェックされていたら、高さを戻す*/
    }
    .grad-trigger:checked ~ .grad-item::before {
        display: none; /*チェックされていたら、grad-itemのbeforeを非表示にする*/
    }
}
</style>