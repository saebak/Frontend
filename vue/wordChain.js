<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<title>끝말잇기</title>
</head>
<body>
	<div id="root">
		<div>{{word}}</div>
		<form v-on:submit="onSubmitForm">
			<input type="text" ref="answer" v-model="value">
			<button type="submit">입력</button>
		</form>
		<div>{{result}}</div>
	</div>
	
	<script>
		const app = new Vue({
			el: '#root',
			data: {
				word: '제로초',
				result: '',
				value: '',	
			},
			methods: {
				onSubmitForm(){
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
</body>
</html>
