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
            <a class="blog-content" :href='"https://blog.team-steg.com/articles/" + elem.id' target="_blank" rel="noopener noreferrer" v-for="elem in filteredItems(blog)" :key="elem.id">
                <img :src="elem.image.url" :alt="elem.title">
                <div class="blog-content-items">
                    <div class="blog-content-information">
                        <div class="blog-content-date">{{formatDate(elem.createdAt)}}</div>
                        <div class="blog-content-type">{{elem.category}}</div>
                    </div>
                    <div class="blog-content-title">{{elem.title}}</div>
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
import dayjs from 'dayjs';
export default {
    props: ["blog"],
    methods: {
        formatDate (date) {
            return dayjs(date).format("YYYY.MM.DD");
        },
        filteredItems: function (blog) {
            return this.blog.slice(0, 3)
        }

    },
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
    a{
        text-decoration: none;
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
        border-bottom: 4px solid $mainColor;
    }    
}

.blog-heading-jp{
    font-size: 1rem;
    font-weight: 700;
    color: $textColor;
    padding: 10px 0;
}


.blog-container{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 40px 0;
    @include mq(sm) {
        padding: 0;
        justify-content: stretch;
    }
}

.blog-content{
    padding: 0 15px;
    @include mq(sm) {
        display: flex;
        padding: 10px 20px;
        width: 100%;
    }
    img{
        width: 400px;
        height: 250px;
        object-fit: cover;
        @include mq(lg) {
            width: 300px;
            height: 187px;
        }
        @include mq(sm) {
            width: 140px;
            height: 85px;
        }
    }
}

.blog-content-items{
    width: 400px;
    padding: 10px;
    @include mq(lg) {
        width: 300px;
    }
    @include mq(sm) {
        width: 100%;
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
    padding: 0 10px;
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