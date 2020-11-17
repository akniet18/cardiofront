<template>
    <div class="wrapperAuth">
        <div class="logForm">
            <el-form :model="ch_form" :rules="rules" ref="ch_form" class="demo-ruleForm form">
                <h1 class="title">Вход</h1>

                <div class="inpDiv">
                    <el-form-item prop="username">
                        <label  for="username">Username or email</label>
                        <el-input
                            id="username"
                            v-model="ch_form.username"
                            clearable
                            >
                        </el-input>			
                    </el-form-item>		
                </div>
                <div class="inpDiv">
                    <el-form-item prop="password">
                        <label for="password">Пароль</label>
                        <el-input
                            id="password"
                            v-model="ch_form.password"
                            clearable
                            show-password
                            >
                        </el-input>
                    </el-form-item>
                </div>

                <div class="mb">
                    <el-link  type="primary">Забыли пароль?</el-link>
                </div>
                
                <el-form-item >
                    <el-button class="btnn" type="primary" @click="submit">Войти</el-button>
                </el-form-item>
            </el-form>
            <!-- <div class="regDiv">
                Ещё нет аккаунта? 
                <router-link tag="el-link" :to="{name: 'Register'}"><el-link class="regf" type="primary">Зарегистрируйтесь</el-link></router-link>
            </div> -->
        </div>
    </div>   
</template>

<script>
export default {
    data(){
        return{
            ch_form: {
                username: null,
                password: null
            },
            rules: {
                username: [
                    { required: true, message: 'Please input username', trigger: 'blur' },
                    { min: 3, max: 15, message: 'Length should be 3 to 5', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: 'Please input password', trigger: 'blur' },
                    { min: 6, max: 15, message: 'Length should be 3 to 5', trigger: 'blur' }
                ],
            }
        }
    },
    
    methods: {
        submit() {
      	  this.$refs['ch_form'].validate((valid) => {
          	if (valid) {
            	this.login()
          	} else {
            	console.log('error submit!!');
            	return false;
          	}
          });
		},
		login() {
			// this.$router.push({name: 'Home'}) 
			// window.location.href = '/home/';
		  let data = {
		    'username': this.ch_form.username,
		    'pwd': this.ch_form.password
		  }
		  axios.post('users/login/', data)
		    .then(r => {
				if (r.data.status != "wrong"){
					if (r.data.key && r.data.uid){
						sessionStorage.setItem('is_staff', r.data.is_staff)
						sessionStorage.setItem('uid', r.data.uid)
						sessionStorage.setItem('key', r.data.key)
						sessionStorage.setItem('first_name', r.data.first_name)
						sessionStorage.setItem('last_name', r.data.last_name)
						sessionStorage.setItem('username', this.ch_form.username)
						sessionStorage.setItem('birth_date', r.data.birth_date)
						sessionStorage.setItem('location', r.data.location)
						sessionStorage.setItem('avatar', r.data.avatar)
						if (r.data.is_staff){
							window.location.href = '/home/staff/';
						}
						else{
							window.location.href = '/home/';
						}
					}
				}
				else{
					this.$message.error('Логин или пароль неправильно');
				}
		    }, r => {
		      console.log(r)
		    })
		},
    }    
}
</script>

<style>
.wrapperAuth{
	width: 100%;
	background: #f4f4f4;
	display: flex;
	min-height: 100vh;
	height: 100%;
	justify-content: center;
	align-items: center;
}
.form, .regDiv{
	background: #fff;
	padding: 20px 40px;
	box-shadow: 0 0 7px 3px rgba(0,0,0,0.1);
	border-radius: 5px;
}
.regDiv{
	margin-top: 20px;
	text-align: center;
}
.regform{
	margin-top: 10%;
}
.regdivv{
	margin-bottom: 10%;
}
.logForm{
	width: calc(50vw - 80px);
	display: flex;
	flex-direction: column;
	justify-content: center;
}
.mb{
	margin-bottom: 7px;
	text-align: right;
}
.inpDiv{
	display: flex;
	flex-direction: column;
	justify-content: center;
}
.inpDiv input{
	border: 1px solid silver;
	outline: none;
}
.regf{
	font-size: 1.03em
}
.errorI input, .errorM, .errorL{
	color: #F56C6C
}
.errorI input{
	border-color: #F56C6C!important;
	animation: animate 0.2s linear 2;
}
.btnn{
	width: 100%;
}
@keyframes animate{
	25%{
		transform: translateX(-5px);
	}
	50%{
		transform: translateX(0);
	}
	75%{
		transform: translateX(5px);
	}
	100%{
		transform: translateX(0);
	}
}
@media (max-width: 1024px){
	.logForm{
		width: calc(60vw - 80px);
	}	
}
@media (max-width: 840px){
	.logForm{
		width: calc(70vw - 80px);
	}	
}
@media (max-width: 700px){
	.logForm{
		width: calc(80vw - 80px);
	}	
}
@media (max-width: 480px){
	.wrapperAuth{
		align-items: flex-start;
	}
	.logForm{
		width: 100%;
		top: 0;
		left: 0;
		transform: translate(0, 0);
	}	
	.regform{
		margin-top: 0%;
	}
	.regdivv{
		margin-bottom: 15%;
	}
	.form, .regDiv{
		padding: 20px 15px;
	}

}
</style>