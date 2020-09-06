<template>
    <div id="contact" class="contact">
        <div class="contact-container">
            <div class="contact-heading"><h2>CONTACT</h2></div>
            <div class="contact-exposition">Webページ作成、LP作成等承っております。<br>ご依頼やご相談はこちらのフォームにてお願いします。</div>
            <form action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfekmFwZc4Lr3STHXnoHMkbgsxeyiGvUxABxhXf28Sx795gcg/formResponse" method="POST">
                <div class="form-contents">
                    <p>氏名(必須)</p>
                    <input type="text" placeholder="氏名" name="entry.1220325291" required />
                </div>
                <div class="form-contents">
                    <p>メールアドレス(必須)</p>
                    <input type="email" placeholder="example@mail.com" name="entry.222640255" required />
                </div>
                <div class="form-contents">
                    <p>お問い合わせ内容(必須)</p>
                    <textarea placeholder="お問い合わせ内容" name="entry.264940659" required ></textarea>
                </div>
                <button type="submit" class="form-button">送信</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.contact{
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

.contact-container{
    width: 1200px;
    padding: 0 40px;
    @include mq(xl) {
        width: 100%;
    }
    @include mq(sm) {
        padding: 0 25px;
    }
    button{
        width: 200px;
        height: 50px;
        font-size: 0.9rem;
        text-decoration: none;
        color: white;
        background: $subColor;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 80px auto 0;
        @include mq(lg) {
            margin: 60px auto 0;
        }
        @include mq(sm) {
            margin: 40px auto 0;
        }
    }
}

.contact-heading{
    width: 12rem;
    h2{
        font-size: 2rem;
        font-weight: 700;
        color: $textColor;
        line-height: 1.5rem;
        border-bottom: 2px solid $mainColor;
    }    
}

.contact-exposition{
    font-size: 1rem;
    color: $textColor;
    padding: 40px 0;
    @include mq(sm) {
        padding: 30px 0 20px;
    }
}

.form-contents{
    display: flex;
    padding: 15px 0;
    @include mq(md) {
        flex-direction: column;
        padding: 5px 0;
    }
    p{
        width: 35%;
        font-size: 1rem;
        color: $textColor;
        line-height: 3rem;
        @include mq(md) {
            width: 100%;
        }
    }
    input{
        width: 65%;
        height: 3rem;
        font-family: 'Noto Sans JP';
        font-size: 1rem;
        color: $textColor;
        border: solid 1px #9696aa;
        border-radius: 5px;
        @include mq(md) {
            width: 100%;
        }
        &::placeholder{
            color: #9696aa;
        }
        &:focus{
            outline: none;
            box-shadow: 0 0 0 2px $mainColor;
        }
    }
    textarea{
        width: 65%;
        height: 20rem;
        font-family: 'Noto Sans JP';
        font-size: 1rem;
        color: $textColor;
        border: solid 1px #9696aa;
        border-radius: 5px;
        resize: none;
        @include mq(md) {
            width: 100%;
        }
        &::placeholder{
            color: #9696aa;
        }
        &:focus{
            outline: none;
            box-shadow: 0 0 0 2px $mainColor;
        }
    }
}
</style>