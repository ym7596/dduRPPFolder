<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
	  <div class="container-fluid">
		  <a class="navbar-brand" href="/">dduR</a>
		  <button
		    class="navbar-toggler"
			type="button"
			data-bs-toggle="collapse"
			data-bs-target="#navbarNav"
			>
			<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarNav">
				<ul
				:class="{ 'navbar-nav': true, 'me-auto': menu.me_auto }"
				v-for="menu in menu_category"
				:key="menu.id"
				>
					<li class="nav-item" v-for="menu_object in menu.value" :key="menu_object.key">
						<router-link :to="menu_object.url" class="nav-link">{{ menu_object.value }}</router-link>
					</li>
				</ul>
			</div>
	  </div>
  </nav>
</template>
<script>
import { ref, computed } from 'vue'
export default {
	name: 'NavBar',
	setup() {
		//const menu = ref('profile')
		const menus = [
			{ key: 'home', value: '홈', url: '/home', position: 'left' },
			{ key: 'app', value: '앱', url: '/application', position: 'left' },
			{ key: 'profile', value: '프로필', url: '/profile', position: 'right' },
		]

		const left_menus = computed(() => menus.filter((i) => i.position == 'left' ))
		const right_menus = computed(() => menus.filter((i) => i.position == 'right' ))

		// const onMovePage = (evt, menu_object) => {
		// 	if (evt) {
		// 		evt.preventDefault()
		// 	}
		// 	menu.value = menu_object.key
		// }

		return {
			//menu,
			menu_category: [
				{
					id: 1,
					me_auto: true,
					value: left_menus.value,
				},
				{
					id: 2,
					me_auto: false,
					value: right_menus.value
				},
			],
			// onMovePage,
		}
	},
}
</script>

