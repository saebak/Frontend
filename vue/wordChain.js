<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<title>Insert title here</title>
</head>
<body>
	<div id="root">
		<div>{{word}}</div>
		<form v-on:submit="onSubmitButton">
			<input type="text" ref="answer" v-model="value">
			<button type="submit">입력</button>
		</form>
		<div id="result"> {{result}} </div>
	</div>
</body>

<script>
	const app = new Vue({
		el : "#root",
		data : {
			word : '제로초',
			value : '',
			result : '',
		},
		methods : {
			onSubmitButton(e){
				e.preventDefault();
				if(this.word[this.word.length-1] === this.value[0]){
					this.result='딩동댕';
					this.word = this.value;
					this.value = '';
					this.$refs.answer.focus();
				}else{
					this.result = '뗑';
					this.value='';
					this.$refs.answer.focus();
				}
			},
		},
	});

</script>
</html>
