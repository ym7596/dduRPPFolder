<template>

<main>

  <section class="py-5 text-center container">
    <div class="row py-lg-5">
      <div class="col-lg-6 col-md-8 mx-auto">
        <h1 class="fw-light">소개</h1>
        <p class="lead text-muted">
			이 페이지는 포트폴리오겸 포트폴리오를 담는 페이지로써
			Vue3 + vite 로 제작이 되었습니다.
			서버는 node.js express를 사용합니다.
		</p>
        <p>
          <a href="#" class="btn btn-primary my-2"> &gt </a>
          <a href="#" class="btn btn-danger my-2"> &lt </a>
        </p>
      </div>
    </div>
  </section>

  <div class="album py-5 bg-light">
    <div class="container">

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
		  <div class="col">
		  <div class="card text-center">
			<img src="https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/000101.png" class="card-img-top" alt="...">
				<div class="card-body">
					<h5 class="card-title">이상해씨♡</h5>
					<p class="card-text">이상이상!</p>
					<a href="#" class="btn btn-primary">덩쿨채찍</a>
				</div>
			</div>
		</div>
		<div class="col">
		  <div class="card text-center">
			<img src="https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/000401.png" class="card-img-top" alt="...">

				<div class="card-body">
					<h5 class="card-title">파이리</h5>
					<p class="card-text">파일~파이리~</p>
					<a href="#" class="btn btn-primary">화염방사</a>
				</div>
			</div>
		</div>
		<div class="col">
		  <div class="card text-center">
			<img src="https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/000701.png" class="card-img-top" alt="...">
				<div class="card-body">
					<h5 class="card-title">꼬부기</h5>
					<p class="card-text">꼬북꼬북</p>
					<a href="#" class="btn btn-primary">물대포</a>
				</div>
			</div>
		</div>




		</div>
    </div>
  </div>

</main>
</template>

<script>
export default {}
</script>

<style scoped>
.bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }

      @media (min-width: 768px) {
        .bd-placeholder-img-lg {
          font-size: 3.5rem;
        }
      }
	  section {
      background: #466368;
  background: linear-gradient(to right bottom, #afdf41, #cccccc);
    }
</style>