<template>
  <!-- <NavBarName />
  <Application /> -->


  <NavBara />
  <!-- 알림 영역 (notification cookie) -->
  <div id="notification" />
 <router-view ></router-view>






</template>

<script>
import NavBara from '/@components/NavBar.vue'

export default {
	name: 'App',
	components: {
		NavBara,

	},
}
</script>

