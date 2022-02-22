<template>
  <div v-if="state == 'ok'">
  <div class="row text-right pr-sm-2">
	  <small><a href="#" @click="onLogout">Logout</a></small>
  </div>
  </div>
  <div v-else-if="state == 'loading'">Loading...</div>
  <login v-else :email="email" :type="state" @state="state = 'ok'" />
</template>

<script>
import { ref, onBeforeMount } from 'vue'
import Login from '/@components/Login.vue'
import { getCookie, setCookie } from '/@app_modules/cookie.js'
import useLogin from '/@app_modules/login.js'


export default {
	setup() {
		const state = ref('loading')
		const email= ref(getCookie('email'))
		const token = ref(getCookie('token'))

		onBeforeMount(() => {
			const { checkToken } = useLogin()
			const auto_login = getCookie('stay') == 'true'

			email.value = email.value == '' ? 'test-email' : email.value
			token.value = token.value == '' ? 'test-token' : token.value

			//저장된 토큰 이용 정보 얻어온다.
			checkToken(email.value, token.value)
			.then((data) => {
				if (data.data == 'vue') {
					state.value = 'update'
					email.value =''

				}
				else if (auto_login) {
					state.value = 'ok'
					// 이미 로그인이 되어있다면
				}
				else {
					state.value = 'login'
				}
			})
			.catch((e) => {
				state.value = 'login'
			})
		})

		const onLogout = (evt) => {
			if (evt) {
				evt.preventDefault()
			}
			setCookie('token','')
			state.value = 'login'
		}
		return { state, email, onLogout }
	},
	components: { Login },
}
</script>