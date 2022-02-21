<template>
  <!-- <NavBarName />
  <Application /> -->


  <NavBara />
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

