<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<title>Insert title here</title>
</head>
<body>
	<div id="root">
		<div>{{first}} 곱하기 {{second}} 는?</div>
		<form v-on:submit="onSubmitButton">
			<input type="number" ref="answer" v-model="value">
			<button type="submit">입력</button>
		</form>
		<div id="result"> {{result}} </div>
	</div>
</body>

<script>
	const app = new Vue({
		el : "#root",
		data : {
			first : Math.ceil(Math.random() * 9),
			second : Math.ceil(Math.random() * 9),
			value : '',
			result : '',
		},
		methods : {
			onSubmitButton(e){
				e.preventDefault();
				if(this.first * this.second === parseInt(this.value)){
					this.result = '정답';
					this.first = Math.ceil(Math.random() * 9);
					this.second = Math.ceil(Math.random() * 9);
					value = '';
					this.$refs.answer.focus();
				}else{
					this.result = '땡';
					this.value ='';
					this.$refs.answer.focus();
				}
			},
		},
	});

</script>
</html>
