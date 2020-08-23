<template>
    <div class="news" id="news">
        <div class="news-heading"><h2>NEWS</h2></div>
        <div class="news-container">
            <div class="news-content" v-for="elem in news" :key="elem.id">
                <div class="news-information">
                    <div class="date">{{elem.newsDate}}</div>
                    <div class="type">{{elem.newsCategory}}</div>
                </div>
                <div class="news-article">{{elem.newsContents}}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["news"],
}

</script>

<style lang="scss" scoped>
::-webkit-scrollbar {
    width: 10px;
}
::-webkit-scrollbar-track {
  border-radius: 10px;
  background-color: #eeeeee;
}
::-webkit-scrollbar-thumb {
  background-color: $subColor;
  border-radius: 10px;
}

.news{
    width: 100%;
    height: 340px;
    padding: 80px 40px;
    display: flex;
    justify-content: center;
    @include mq(xl) {
        padding: 60px 40px;
    }
    @include mq(lg) {
        flex-direction: column;
        align-items: center;
    }
    @include mq(sm) {
        padding: 40px 20px;
    }
}

.news-heading{
    width: 150px;
    height: 2.5rem;
    border-bottom: 3px solid $mainColor;
    margin-right: 150px;
    @include mq(xl) {
        margin-right: auto;
    }
    h2{
        font-size: 2rem;
        font-weight: 700;
    }
}

.news-container{
    max-width: 900px;
    height: 180px;
    overflow-y: scroll;
    overflow-x: hidden;
    @include mq(sm) {
        height: 240px;
    }
}

.news-content{
    width: 100%;
    min-height: 60px;
    display: flex;
    align-items: center;
    @include mq(sm) {
        min-height: 80px;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding-top: 20px;
    }
}

.news-information{
    display: flex;
}

.date{
    color: $textColor;
    font-size: 1rem;
    padding: 0 15px;
    border-bottom: 2px solid $mainColor;
    @include mq(sm) {
        padding: 0 0;
    }
}

.type{
    color: $mainColor;
    font-size: 1rem;
    padding: 0 15px;
    border-bottom: 2px solid #eeeeee;
    @include mq(sm) {
        border-bottom: none;
    }
}

.news-article{
    width: 100%;
    color: $textColor;
    font-size: 1rem;
    padding: 0 15px;
    border-bottom: 2px solid #eeeeee;
    @include mq(sm) {
        padding: 10px 0;
    }
}
</style>