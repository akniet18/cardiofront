<template>
    <div>
        <div>
            <header>
                <div> </div>
                <router-link tag="div" class="login_btn" :to="{name: 'Login'}"><i class="el-icon-user-solid" style="margin-right:5px"></i>Войти</router-link>
            </header>
        </div>

         <el-carousel indicator-position="outside" :autoplay="false" type="card" trigger="click">
            <el-carousel-item v-for="item in 4" :key="item">
                <div class="news">
                    <div>
                        <div class="news_header">
                            <div><img src="data:image/jpeg;base64,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" alt=""></div>
                            <div class="news_header_title">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam veritatis deleniti, ratione iusto doloremque explicabo corrupti reiciendis, quidem placeat doloribus repudiandae odit, aliquid aspernatur vitae unde esse perferendis saepe quas!
                            </div>
                        </div>
                    </div>
                    <div class="news_main">
                        <div>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos mollitia dolorum impedit minus, saepe beatae modi? Expedita quidem sint vel laboriosam atque, commodi nesciunt qui officia, facilis et veniam maiores.
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos mollitia dolorum impedit minus, saepe beatae modi? Expedita quidem sint vel laboriosam atque, commodi nesciunt qui officia, facilis et veniam maiores.
                        </div>
                    </div>
                </div>
            </el-carousel-item>
        </el-carousel>
        
        <section>
            <div class="info" style="background: #F0F6E9">
                <div class="info_block" >
                    <div class="info_text">
                        <h3>Кардиология</h3>
                        <div>
                            Наука, исследующая патологии сердца и сосудистой системы. Она выявляет причины возникновения и особенности течения сердечно-сосудистых заболеваний. При разработке и производстве своего оборудования компания SCHILLER использует научные достижения, новейшие методики диагностики и собственные алгоритмы. Приборы компании SCHILLER, используемые в кардиологии и функциональной диагностике, – это электрокардиографы, стресс-системы, системы нагрузочного тестирования с газоанализом, системы мониторинга ЭКГ по Холтеру, системы суточного мониторинга АД и решения для кардиореабилитации. Они призваны удовлетворить самый высокие требования кардиологов и врачей функциональной диагностики.

                            В большом ряду электрокардиографов SCHILLER есть приборы разного функционала и ценового диапазона. Можно упомянуть популярный CARDIOVIT AT-101 и универсальный CARDIOVIT AT-102 plus, современные CARDIOVIT FT-1 и MS-2007 с сенсорным экраном, комплексы для нагрузочного тестирования CARDIOVIT CS-200 и CARDIOVIT CS-200 Ergo-Spiro (с газоанализом), эргометры и тредмилы. Каждый из электрокардиографов SCHILLER оснащен точной программой измерений интервалов и зубцов электрокардиограммы, также на нем может быть установлена программа интерпретации ЭКГ.
                        </div>
                    </div>
                    <div class="info_img">
                        <img src="https://www.schiller.ru/upload/iblock/b3e/bg-pulman-img.png" alt="">
                    </div>
                </div>
            </div>
            <div class="info" style="background: #E5F4F9">
                
                <div class="info_block info_block2" >
                    <div class="info_img">
                        <img src="https://www.schiller.ru/upload/iblock/b25/bg-cardio-img.png" alt="">
                    </div>
                    <div class="info_text">
                        <h3>Пульмонология</h3>
                        <div>
                            Пульмонология – раздел медицины, занимающийся изучением, диагностикой и лечением заболеваний лёгких и дыхательных путей (ФВД), а также нарушений газообмена. Исследование ФВД позволяет выявить функциональные нарушения, получить полную оценку состояния легких и бронхов и выбрать тактику терапии. Пульмонология тесно связана с интенсивной терапией и реаниматологией, в частности, с искусственной вентиляцией легких.

                            Компания SCHILLER предлагает широкий спектр диагностического оборудования для пульмонологии - от хорошо известного на рынке портативного спирометра SPIROVIT SP-1 до новой диагностической системы GANSHORN PowerCube.
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <footer>
            <div>© 2020, Almaty</div>
        </footer>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 30px;
    background: #00456f;
    color: #fff
}
.login_btn{
    cursor: pointer;
}
.login_btn:hover{
    text-decoration: underline;
}


.news{
    display: flex;
    flex-direction: column;
    border: 1px solid #000;
    padding: 20px;
    height: fill;
}
.news_header{
    display: flex;
    /* align-items: center; */
    height: 100px;
    width: 100%;
}
.news_header img{
    width: 100px;
    height: 100px;
    margin-right: 20px;
}
.news_header_title{
    font-size: 1.2em;
}
.news_main{
    margin-top: 20px;
}

.el-carousel{
    margin-top: 20px;
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
.el-carousel__item:nth-child(2n) {
background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
background-color: #d3dce6;
}

.info{
    /* display: flex; */
    
}
.info_block{
    width: 83%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    padding: 15px;
}
.info_img{
    width: 100%;
    flex: 1;
}
.info_img img{
    margin-top: 20px;
    width: 90%
}
.info_text{
    flex: 1;
}


footer{
    color: #fff;
    background: #00456f;
    padding: 20px;
}

@media screen and (max-width: 1200px) {
    .info_block{
        width: 90%;
    }
}
@media screen and (max-width: 1000px) {
    .info_block{
        flex-direction: column;
    }
    .info_block2{
        flex-direction: column-reverse;
    }
    .info_img{
        display: flex;
        justify-content: center;
    }
    .info_img img{
        margin-top: 20px;
        width: 60%
    }
}
</style>