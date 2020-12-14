<template>
    <div>
        <div class="headerd">
            <header>
                <div @click="logout"><img class="logo" src="../assets/hart-removebg-preview.png" alt=""> </div>
                <router-link tag="div" class="login_btn" :to="{name: 'Login'}"><i class="el-icon-user-solid" style="margin-right:5px"></i>Войти</router-link>
            </header>
        </div>

        <div class="problems">
            <h1>Сердечно-сосудистые заболевания продолжают оставаться главной причиной смертности населения.</h1>
            <h1>Инфаркт миокарда «молодеет».</h1>
            <div class="problems_section">
                <div class="problems_first_row">
                    <div>
                        <h2>179 200 человек</h2>
                        <div>
                            По официальным данным, за последние три года в Казахстане в среднем в год от ишемической болезни умирают 179 200 человек.
                        </div>
                    </div>
                    <div>
                        <h2>1 360 000 человек</h2>
                        <div>
                            Страдают этой болезнью 1 360 000 человек, 
т.е. практически каждый двенадцатый казахстанец сегодня страдает ишемической болезнью сердца. 
                        </div>
                    </div>
                    <div>
                        <h2>272 000 человек</h2>
                        <div>
                            Ежегодно с острым инфарктом поступают в больницу в среднем 272 000 человек. Для минимизации ущерба для населения и медицины необходима своевременная диагностика, которая снижает стоимость последующего лечения. 
                        </div>
                    </div>
                </div>
                <div class="problems_second">
                    <img src="../assets/tumnb.jpeg" alt="">
                </div>
            </div>
            <!-- <div class="scroll">
                <div>
                    <img src="../assets/icons8.png" alt="" srcset="">
                </div>
            </div> -->
        </div>

        <div class="main">
            <h1>Производство ПОРТАТИВНОГО КАРДИОАНАЛИЗАТОРА персонального мониторинга состояния сердца может служит государственной задаче профилактики сердечно-сосудистых заболеваний.</h1>
            <div class="main_section">
                <div class="main_first_row">
                    <div>
                        <img src="../assets/Рисунок2.png" alt="">
                        <div>
Автоматическая ранняя диагностика опасных для жизни нарушений ритма и проводимости сердца, выявление безболевой ишемии миокарда
                        </div>
                    </div>
                    <div>
                        <img src="../assets/Рисунок3.png" alt="">
                        <div>
                            При наличии критических ситуаций мобильный прибор обеспечивает вызов скорой помощи к местоположению пациента
                        </div>
                    </div>
                    <div>
                        <img src="../assets/Рисунок4.png" alt="">
                        <div>
Позволяет принимать решения на разных уровнях (прибор, сервер, врач), а также обмениваться информацией, необходимой для обеспечения эффективного лечебно-диагностического процесса
                        </div>
                    </div>
                    <div>
                        <img src="../assets/Рисунок5.png" alt="">
                        <div>
Возможность интеграции с медицинской информационной системой
                        </div>
                    </div>
                </div>
                
                <!-- <div class="main_second_row">
                    <h3>272 000 человек</h3>
                    <div>
                        Ежегодно с острым инфарктом поступают в больницу в среднем 272 000 человек. Для минимизации ущерба для населения и медицины необходима своевременная диагностика, которая снижает стоимость последующего лечения. 
                    </div>
                </div> -->
            </div>
        </div>
        
        <section>
            <div class="info" style="background: #F0F6E9">
                <div class="info_block" >
                    <div class="info_text">
                        <h3>Область применения</h3>
                        <div>
<p>Портативный кардиоанализатор применяется </p>
<strong>1. Пользователями</strong> – пациенты, следящие за состоянием своего здоровья. В группу также входят амбулаторные пациенты, спортсмены, одинокие люди, а также родственники пациентов, находящихся на стационарном лечении. <br>
<br><strong>2. Врачами</strong> - с целью повышения эффективности и качества лечебного процесса. За счет оптимального взаимодействия с пациентом, система информационного обеспечения персонального мониторинга здоровья позволит добиться снижения числа врачебных ошибок и автоматизации работы врача..
<p>Краткое описание возможностей</p>
<strong>1)	Работа в условиях свободной активности.</strong>
<br><strong>2)	Выполнение предварительного анализа ЭКГ.</strong>
<br><strong>)	Автоматическая диагностика опасных для жизни аритмий.</strong>
<br><strong>4)	Вызов скорой помощи.</strong>
<br><strong>5)	Хранения записей ЭКС локально и на удаленном сервере.</strong>
<br><strong>6)	Возможность интеграции с МИС</strong>

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
                        <img src="../assets/cardios.png" alt="">
                    </div>
                    <div class="info_text">
                        <h3>Технические характеристики</h3>
                        <div>
Питание электрокардиографа осуществляется от:<br>
• от Li-On  аккумулятора с 5-6 В , 2А;<br>
• внутреннего источника питания - аккумулятора.
<br>Диапазон напряжений регистрируемых сигналов от минус 5 до + 5 мВ относительно изолинии.
<br>ПКА в автоматическом режиме регистрации измеряют длительности следующих элементов ЭКГ: интервал RR, длительность зубца Р, интервал PQ, длительность комплекса QRS, интервал QT. Погрешность измерений при этом соответствует требованиям ГОСТ РМЭК 60601-2-51.
<br>Время установления рабочих режимов электрокардиографа не более 5 с после включения и установки электродов.
<br>Длина кабеля пациента от электрокардиографа до электродных наконечников не более 30-50 см. Обозначения и цветовая маркировка кабеля по ГОСТ Р МЭК 60601-2-51.
<br>Потребляемая мощность от сети переменного тока напряжением 4 ВА
<br>Масса ПКА без кабеля пациента - не более 0,1 кг.
<br>Габарит ПКА не более 120x60x17 мм.
<br>При работе с кардиоанализатором должны соблюдаться следующие рабочие условия эксплуатации:
<br>•	температура окружающего воздуха от + 5 до + 40 °С;
<br>•	относительная влажность окружающего воздуха не более 90 % при температуре +25 °С;
<br>•	атмосферное давление 630...800 мм рт.ст.
<br>•	при ношении аппарата нельзя принимать ванну или душ (чтобы не повредить аппарат);
<br>•	нельзя подвергать аппарат ударам или нагреванию;
<br>•	избегать нагрузок, вызывающих обильное потоотделение;
<br>•	не находиться вблизи линий электропередач;

                        </div>
                    </div>
                </div>
            </div>
        </section>

        <footer>
            <div class="footer">
                <div class="footer_logo"><img src="../assets/Рисунок6.png" alt=""></div>
                <div class="footer_contacts">
                    <div>Контакты:</div>
                    <div>8 (771) 600 50 70</div>
                </div>
                <div>
                    <el-button type="primary" plain @click="login">Войти</el-button>
                </div>
            </div>
            <div class="footer">© 2020, Almaty</div>
        </footer>
    </div>
</template>

<script>
export default {
    methods:{
        login(){
            this.$router.push({name: "Login"})
        },
        logout(){
            this.$router.push({name: "base"})
        }
    }
}
</script>

<style scoped>
*{
    font-family: Montserrat;
}
.headerd{
    background: #149bfc;
    color: #fff;
}
header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 85%;
    margin: 0 auto;
    padding: 5px 0;
}
.logo{
    width: 70px;
    height: 50px;
    cursor: pointer;
}
.login_btn{
    cursor: pointer;
    font-size: 1.1em;
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

.main{
    padding: 40px 0;
    background: #149bfc;
    color: #fff
    /* background: url("../assets/Рисунок1.jpg") no-repeat center; */
}

.main h1, .problems h1{
    width: 85%;
    margin: 20px auto;
}
.main_section{
    width: 85%;
    margin: 5px auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.main_first_row{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 20px;
    font-size: 1.2em;
}
.main_first_row img{
    width: 110px;
    height: 110px;
    border-radius: 100%;
}
/* .main_second_row{
    width: 75%;
    margin: 10px auto;
} */

.problems{
    padding: 40px 0;
    position: relative;
}
.problems h1, .problems h2, .problems h3{
    color: #000000;
}
.problems_section{
    width: 85%;
    margin: 5px auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
}
.problems_section img{
    width: 85%;
    margin: 5px auto;
    border-radius: 10px;
}
.problems_first_row{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.problems_first_row h2{
    color: red
}
.scroll{
    position: absolute;
    bottom: 15px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 5em;
    color:#fff;
}


footer{
    color: #fff;
    background: #149bfc;
    padding: 20px;
}
footer img{
    width: 200px;
}
.footer{
    width: 85%;
    margin: 5px auto;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.footer:first-child{
    border-bottom: 1px solid #fff;
}
.footer_contacts{
    margin-left: 50%;
    font-size: 1.2em;
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
    h1{
        font-size: 1.5em;
    }
    .main_first_row{
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
    }
    .problems_section img{
        width: 100%;
        height: 100%;
    }
}
@media screen and (max-width: 900px) {
    .problems_section{
        grid-template-columns: 1fr;
    }
    .problems_section img{
        width: 80%;
        height: auto;
    }
    .footer_contacts{
        margin-left: 10%;
        font-size: 1em;
    }
}
@media screen and (max-width: 650px) {
    .main_first_row{
        grid-gap: 10px;
        font-size: 1em;
    }
    .footer{
        flex-direction: column;
        align-items: baseline;
    }
    .footer_contacts{
        margin: 10px 0;
    }
}
@media screen and (max-width: 450px) {
    .main_first_row{
        grid-template-columns: 1fr;
    }
}

</style>