<template>
	<div class="car-parameter">
		<table>
			<tr>
				<td>车型</td>
				<td>{{carParameter.model}}</td>
			</tr>
			<tr>
				<td>厂商新车指导价</td>
				<td>{{carParameter.construcPrice}}</td>
			</tr>
			<tr>
				<td>厂商</td>
				<td>{{carParameter.vendor}}</td>
			</tr>
			<tr>
				<td>发动机</td>
				<td>{{carParameter.engine}}</td>
			</tr>
			<tr>
				<td>变速箱</td>
				<td>{{carParameter.gearbox}}</td>
			</tr>
			<tr>
				<td>排量（L）</td>
				<td>{{carParameter.displacement}}</td>
			</tr>
			<tr>
				<td>长*宽*高（mm）</td>
				<td>{{carParameter.LWH}}</td>
			</tr>
			<tr>
				<td>车身结构</td>
				<td>{{carParameter.structure}}</td>
			</tr>
			<tr>
				<td>最高车速（km/h）</td>
				<td>{{carParameter.speed1}}</td>
			</tr>
			<tr>
				<td>官方0-100km/h加速（s）</td>
				<td>{{carParameter.speed2}}</td>
			</tr>
			<tr>
				<td>实测0-100km/h加速（s）</td>
				<td>{{carParameter.speed3}}</td>
			</tr>
			<tr>
				<td>工信部综合油耗（L/100km’）</td>
				<td>{{carParameter.oil}}</td>
			</tr>
			<tr>
				<td>新车整车质保</td>
				<td>{{carParameter.warranty}}</td>
			</tr>
		</table>
	</div>
</template>

<script>
	import carParameterData from '../assets/data/carParameterData'

	export default {
		name:'CarParameter',
		data(){return{
			carParameter:null
		}},
		created:function(){
			var id=this.$store.state.carParameterId;
			console.log(id);
			//取得id后从后台获取参数对象
			this.carParameter=carParameterData.carParameter;
			this.axios.get(url,{params:{id:id}})
				.then(res=>{
					console.log(res)
				}).catch(err=>{
					console.log(err)
				})
		}
	}
</script>

<style lang="less" scoped>
	.car-parameter{
		width: 100%;
		padding: 30px 40px;
		box-sizing: border-box;
		table{
			border:2px solid #efefef;
			width: 100%;
			background-color: #fff;
			padding:10px;
		}
		tr{
			border-bottom: 2px solid #efefef;
			height: 60px;
			line-height: 80px;
		}
		tr td{
			text-align: left;
			width: 50%;
			box-sizing: border-box;
			padding-left: 10px;
		}
	}
</style>