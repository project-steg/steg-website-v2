<template>
    <div class="blog" id="blog">
        <div class="blog-head">
            <div class="blog-heading">
                <div class="blog-heading-en"><h2>BLOG</h2></div>
                <div class="blog-heading-jp">ブログ</div>
            </div>
            <a class="blog-viewmore2" href="https://blog.team-steg.com/" target="_blank" rel="noopener noreferrer">
                <div class="blog-viewmore-text">VIEW MORE</div>
                <div class="blog-viewmore-arrow"></div>
            </a>
        </div>
        <div class="blog-container">
            <a class="blog-content">
                <img src="/img/mainVisual.jpg" alt="">
                <div class="blog-content-items">
                    <div class="blog-content-information">
                        <div class="blog-content-date">2020.05.30</div>
                        <div class="blog-content-type">イベント</div>
                    </div>
                    <div class="blog-content-title">サポーターズ主催 エンジニア1on1面談イベントに参加してきました</div>
                </div>
            </a>

            <a class="blog-content">
                <img src="/img/mainVisual.jpg" alt="">
                <div class="blog-content-items">
                    <div class="blog-content-information">
                        <div class="blog-content-date">2020.05.30</div>
                        <div class="blog-content-type">イベント</div>
                    </div>
                    <div class="blog-content-title">サポーターズ主催 エンジニア1on1面談イベントに参加してきました</div>
                </div>
            </a>
            <a class="blog-content">
                <img src="/img/mainVisual.jpg" alt="">
                <div class="blog-content-items">
                    <div class="blog-content-information">
                        <div class="blog-content-date">2020.05.30</div>
                        <div class="blog-content-type">イベント</div>
                    </div>
                    <div class="blog-content-title">サポーターズ主催 エンジニア1on1面談イベントに参加してきました</div>
                </div>
            </a>     

        </div>
        <a class="blog-viewmore1" href="https://blog.team-steg.com/" target="_blank" rel="noopener noreferrer">
            <div class="blog-viewmore-text">VIEW MORE</div>
            <div class="blog-viewmore-arrow"></div>
        </a>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.blog{
    width: 100%;
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

.blog-head{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    @include mq(sm) {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 0 20px;
    }
}

.blog-heading{
    display: flex;
    flex-direction: column;
    align-items: center;
    @include mq(sm) {
        align-items: stretch;
    }
}

.blog-heading-en{
    h2{
        font-size: 2rem;
        font-weight: 700;
        color: $textColor;
        border-bottom: 2px solid $mainColor;
    }    
}

.blog-heading-jp{
    font-size: 1rem;
    font-weight: 700;
    color: $textColor;
    padding: 10px 0;
}


.blog-container{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 40px 0;
    @include mq(sm) {
        padding: 0;
    }
}

.blog-content{
    padding: 0 15px;
    @include mq(sm) {
        display: flex;
        padding: 10px 20px;
    }
    img{
        width: 400px;
        height: 250px;
        @include mq(sm) {
            width: 140px;
            height: 85px;
        }
    }
}

.blog-content-items{
    width: 400px;
    padding: 10px;
    @include mq(sm) {
        width: auto;
    }
}

.blog-content-information{
    display: flex;
    justify-content: space-between;
}

.blog-content-date{
    font-size: 0.8rem;
    color: #72728e;
}

.blog-content-type{
    width: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.7rem;
    color: white;
    background: $mainColor;
    border-radius: 5px;
}

.blog-content-title{
    font-size: 1rem;
    color: $textColor;
    padding: 10px 0 0;
    @include mq(sm) {
        font-size: 0.7rem;
    }
}

.blog-viewmore1{
    width: 200px;
    height: 50px;
    font-size: 0.9rem;
    text-decoration: none;
    color: white;
    background: $subColor;
    display: flex;
    align-items: center;
    justify-content: center;
    @include mq(sm) {
        display: none;
    }
}

.blog-viewmore2{
    width: 150px;
    height: 40px;
    font-size: 0.9rem;
    text-decoration: none;
    color: white;
    background: $subColor;
    display: none;
    align-items: center;
    justify-content: center;
    @include mq(sm) {
        display: flex;
    }
}

.blog-viewmore-text{
    padding-right: 10px;
}

.blog-viewmore-arrow{
    content: '';
    width: 10px;
    height: 10px;
    border: 0px;
    border-top: solid 2px $mainColor;
    border-right: solid 2px $mainColor;
    transform: rotate(45deg);
}
</style>