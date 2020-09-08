<template>
    <div class="wrapperAuth">
		<div class="logForm">
			<el-form :model="reg_form" :rules="rules" ref="reg_form" class="demo-ruleForm form regform">
				<h1 class="title">Регистрация</h1>
				<div class="inpDiv">
					<el-form-item prop="username">
						<label for="username">Username</label>
						<el-input
							id="username"
							v-model="reg_form.username"
							clearable
							>
						</el-input>			
					</el-form-item>		
				</div>
				<div class="inpDiv">
					<el-form-item prop="email">
						<label for="email">E-mail</label>
						<el-input
							id="email"
							v-model="reg_form.email"
							clearable
							>
						</el-input>			
					</el-form-item>	
				</div>
				<div class="inpDiv">
					<el-form-item prop="password">
						<label for="password">Password</label>
						<el-input
							id="password"
							v-model="reg_form.password"
							clearable
							show-password
							>
						</el-input>			
					</el-form-item>	
				</div>
				<div class="inpDiv">
					<el-form-item prop="password2">
						<label for="password2">Confirm Password</label>
						<el-input
							id="password2"
							v-model="reg_form.password2"
							clearable
							show-password
							>
						</el-input>			
					</el-form-item>	
				</div>
				<div class="inpDiv">
					<el-button type="primary" @click="register">Зарегистрироваться</el-button>
				</div>
			</el-form>

			<div class="regDiv regdivv">
				Уже зарегистрированы? 
				<router-link tag="el-link" :to="{name: 'Login'}"><el-link class="regf" type="primary">Войдите</el-link></router-link>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'reg',
  data() {
  	var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Please input the password again'));
        } else if (value !== this.reg_form.password) {
          callback(new Error('Two inputs don\'t match!'));
        } else {
          callback();
        }
    };
    return {
      reg_form:{
        username: '',
        password: '',
        email: '',
        password2: '',
      },
      rules: {
          username: [
            { required: true, message: 'Please input username', trigger: 'blur' },
            { min: 6, max: 15, message: 'Length should be more than 6', trigger: 'blur' }
          ],
          password: [
            { required: true, message: 'Please input password', trigger: 'blur' },
            { min: 6, max: 15, message: 'Length should be more than 6', trigger: 'blur' }
          ],
          password2: [
          	{validator: validatePass2, trigger: 'blur'}
          ],
          email: [
          	{ required: true, message: 'Please input email address', trigger: 'blur' },
      		{ type: 'email', message: 'Please input correct email address', trigger: ['blur', 'change'] }
          ]
      }
    }
  },
  methods: {
    register() {
      this.$refs['reg_form'].validate((valid) => {
          if (valid) {
            this.reg()
          } else {
            console.log('error submit!!');
            return false;
          }
        });
    },
    reg(){
      let data = {
        'username': this.reg_form.username,
        'email': this.reg_form.email,
        'password': this.reg_form.password,
      }
      console.log(data)
	//   this.$http.post('users/register/', data)
	//   	.then(r=>{
	// 		  return r.json()
	// 	  })
    //     .then(r => {
    //        if (r.status == 'ok'){
    //        	 this.$router.push({name: 'login'})
    //        }
    //     }, r => {
    //       console.log(r)
    //     })
    }
  }
};
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