<template>
    <div class="container pt-5">
      <div>
          <p class="fs-1 ob-0">{{ user_data.name }}</p>
      </div>
      <div>
          <p class="fs-4">{{ user_data.email }}</p> <!--누가 봐도 이름과 이메일 적는쪽 -->
      </div>
      
      <div class="row no_gutters" v-for="(d, index) in user_data.resume" :key="index">
          <!-- resume에 적었던 내 이력들을 for문으로 반복하여 div 생성-->
          <Card :top="!index" :resume="d" :show="index % 2 == 1" /> <!--%2==1 즉 홀수면 카드를 만든다. -->
          <div class="col-sm-2 text-center flex-column d-none d-sm-flex">
              <div class="row h-50">
                  <div class="col" :class="[index ? 'border-right' : '']" /> 
                  <!-- 3항연산자 index가  true면 border-right하고 false면 ''로 나타내기 
                  위의 Card 조건이 !index였기 때문에 여기서는 저것과 반대되는 빈공간을 나타냄-->
                  <div class="col" />
              </div>
              <h1>
                  <span class="badge badge-pill border"
                  :class="[!index ? 'bg-primary text-light' : 'bg-light text-dark']">
                  {{ new Date(d.date).getFullYear() }}</span>
              </h1>
              <div class="row h-50">
                  <div class="col" :class="[index != user_data.resume.length - 1 ? 'border-right' : '',]" />
              <div class="col" />
              </div>
          </div>
          <Card :top="!index" :resume="d" :show="index % 2 == 0" />
          <!-- 안그려지는 부분은 카드를 만들되 그려지는 부분이 없쥬~? -->
      </div>
    </div>
</template>

<script>
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import useAxios from '/@app_modules/axios.js'

const Card= defineComponent({
    name: 'Card',
    props: {
        top: Boolean,
        resume: Object,
        show: Boolean,
    },
    setup(props) {},
    template: `
    <div v-if="show" class="col-sm py-2">
      <div class="card" :class="{'border-primary bg-primary text-light': top, shoadow: top }">
        <div class="card-body">
        <h4 class="card-title" :class="[top ? 'text-light' : 'text-muted']"> {{ resume.title }} </h4>
        <hr/>
        <p class="card-text">{{ resume.content }}</p>
        <a v-if="resume.RUL != 'null'" :href="resume.URL" target="_blank" :class="[top ? 'text-light' : 'text-primary']">link</a>
        </div>
      </div>
    </div>
    <div v-if="!show" class="col-sm"></div>
      `,
})
export default {
    name: 'Profile',
    setup() {
        const store = useStore()
        const { axiosGet } = useAxios()
        //store와 db서버연동을 위한 axios선언
        const onSuccess = (data) => {
            store.dispatch('about_me/setAboutMeData',data.data)
            //store의 Actions를 실행하는 dispatch함수 setAboutmeData가 선언되어있는것을 확인 가능

        }
        axiosGet('/db/about-me', onSuccess)
        //db/about-me 로 연결~하고 onsuccess함수 호출
        const user_data = computed(() => store.getters['about_me/user_data'])
        //불러온 데이터 store로 보내기

        return {
            user_data,
        }
    },
    components: {
        Card,
    },
}
</script>