<template>
    <div>
        <div class="info">
            <div class="sectionAva">
                <img src="../assets/ava1.jpg" alt="">
            </div>
            <div class="sectionInfo">
                <div class="username">Көшербай Марлен Айдынұлы </div>
                <div class="birthdate">18.04.1997</div>
                <div class="address">г. Алматы, мкр-н. Айгерим-1, ул. Бенберина 76, кв. 8</div>
            </div>
        </div> 
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.info{
    position: absolute;
    top: 5px;
    left: 5px;
    background: #202020;
    display: flex;
    align-items: center;
    font-size: 0.9em;
    width: calc(100% - 10px);
    color: #fff;
}
.sectionAva{
    margin-right: 5px;
}
.sectionAva img{
    width: 70px;
    height: 55px;
}
</style>