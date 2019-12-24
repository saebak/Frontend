<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<title>국밥계산기</title>
</head>
<body>
	<div id="root">
		<h1>*국밥 계산기*</h1>	
		<form v-on:submit="submitButton">
			<a>국밥</a>
			</br>
			<a>가격 : </a><input type="number" ref="gukbab" v-model="gukbabPrice" style="width:70px;">원
			</br>
			</br>
			<a>비교대상</a>
			</br>
			<a>이름 : </a><input type="text" v-model="name" style="width:70px;">
			</br>
			<a>가격 : </a><input type="number" v-model="price" style="width:70px;">원
			</br>
			</br>
			<button type="submit">계산</button>
		</form>
		</br>
		<div id="result">
			{{result}}
		</div>
	</div>
</body>
<script>
	const app = new Vue({
		el : "#root",
		data : {
			gukbabPrice : '',
			price : '',
			name : '',
			n : '',
			result : '',
		},
		methods : {
			submitButton(e){
				e.preventDefault();
				this.n = this.price/this.gukbabPrice;
				this.result = this.price + "원 주고 " + this.name + " 먹을바엔 \n"
								+ "뜨끈~한 국밥" + this.n + "개 사먹고말지;"
			}
		},
	});
</script>
</html>
