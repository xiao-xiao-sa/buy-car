<template>
	<div class="setting">
		<div class="set-row">
			<span class="left">姓名</span>
			<input class="name" type="text" v-model="userInfo.name">
		</div>
		<div class="set-row">
			<span class="left">性别</span>
			<div>
				<input class="sex" type="radio" name="sex" value="1" :checked="userInfo.sex==1" v-model="userInfo.sex">男
				<input class="sex" type="radio" name="sex" value="0" :checked="userInfo.sex==0" v-model="userInfo.sex">女
			</div>
		</div>
		<div class="set-row">
			<span class="left">生日</span>
			<div id="trigger5" class="birth"><span>{{userInfo.birth}}</span></div>
		</div>
		<button class="sub-btn" @click="subBtn">提交修改</button>
	</div>
</template>

<script>
  import MobileSelect from 'mobile-select'
  import Qs from 'qs'

  export default {
  name:'setting',
  data(){return{
  userInfo:{
  name:'',
  sex:'',
  birth:''
  }
  }},
  created:function(){
  var uid=localStorage.getItem('userID')
  console.log(uid)
  this.axios.get('/api/SetUserBase.aspx',{params:{uid:uid,t:1}})
  .then(res=>{
  console.log(res.data.items[0]);
   var name=res.data.items[0].name;
   var sex=res.data.items[0].sex;
   var birth=res.data.items[0].brith;
   this.userInfo.name=name;
   this.userInfo.sex=sex;
   this.userInfo.birth=birth;
  }).catch(err=>{
  console.log(err);
  })
  },
  mounted:function(){
  var that = this;
  var mobileSelect5 = new MobileSelect({
  trigger: '#trigger5',
  title: '生日',
  wheels: [
  {data:[
  {id:'1',value:2018},
  {id:'2',value:2017},
  {id:'3',value:2016},
  {id:'4',value:2015},
  {id:'5',value:2014},
  {id:'6',value:2013},
  {id:'7',value:2012},
  {id:'8',value:2011},
  {id:'9',value:2010},
  {id:'10',value:2009},
  {id:'11',value:2008},
  {id:'12',value:2007},
  {id:'13',value:2006},
  {id:'14',value:2005},
  {id:'15',value:2004},
  {id:'16',value:2003},
  {id:'17',value:2002},
  {id:'18',value:2001},
  {id:'19',value:2000},
  {id:'20',value:1999},
  {id:'21',value:1998},
  {id:'22',value:1997},
  {id:'23',value:1996},
  {id:'24',value:1995},
  {id:'25',value:1994},
  {id:'26',value:1993},
  {id:'27',value:1992},
  {id:'28',value:1991},
  {id:'29',value:1990},
  {id:'30',value:1989},
  {id:'31',value:1988},
  {id:'32',value:1987},
  {id:'33',value:1986},
  {id:'34',value:1985},
  {id:'35',value:1984},
  {id:'36',value:1983},
  {id:'37',value:1982},
  {id:'38',value:1981},
  {id:'39',value:1980},
  {id:'40',value:1979},
  {id:'41',value:1978},
  {id:'42',value:1977},
  {id:'43',value:1976},
  {id:'44',value:1975},
  {id:'45',value:1974},
  {id:'46',value:1973},
  {id:'47',value:1972},
  {id:'48',value:1971},
  {id:'49',value:1970},
  {id:'50',value:1969},
  {id:'51',value:1968},
  {id:'52',value:1967},
  {id:'53',value:1966},
  {id:'54',value:1965},
  {id:'55',value:1964},
  {id:'56',value:1963},
  {id:'57',value:1962},
  {id:'58',value:1961},
  {id:'59',value:1960},
  {id:'60',value:1959},
  {id:'61',value:1958},
  {id:'62',value:1957},
  {id:'63',value:1956},
  {id:'64',value:1955},
  {id:'65',value:1954}

  ]},
  {data:[
  {id:'1',value:'01'},
  {id:'2',value:'02'},
  {id:'3',value:'03'},
  {id:'4',value:'04'},
  {id:'5',value:'05'},
  {id:'6',value:'06'},
  {id:'7',value:'07'},
  {id:'8',value:'08'},
  {id:'9',value:'09'},
  {id:'10',value:'10'},
  {id:'11',value:'11'},
  {id:'12',value:'12'},
  ]},
  {data:[
  {id:'1',value:'01'},
  {id:'2',value:'02'},
  {id:'3',value:'03'},
  {id:'4',value:'04'},
  {id:'5',value:'05'},
  {id:'6',value:'06'},
  {id:'7',value:'07'},
  {id:'8',value:'08'},
  {id:'9',value:'09'},
  {id:'10',value:'10'},
  {id:'11',value:'11'},
  {id:'12',value:'12'},
  {id:'13',value:'13'},
  {id:'14',value:'14'},
  {id:'15',value:'15'},
  {id:'16',value:'16'},
  {id:'17',value:'17'},
  {id:'18',value:'18'},
  {id:'19',value:'19'},
  {id:'20',value:'20'},
  {id:'21',value:'21'},
  {id:'22',value:'22'},
  {id:'23',value:'23'},
  {id:'24',value:'24'},
  {id:'25',value:'25'},
  {id:'26',value:'26'},
  {id:'27',value:'27'},
  {id:'28',value:'28'},
  {id:'29',value:'29'},
  {id:'30',value:'30'},
  {id:'31',value:'31'},
  ]}
  ],
  callback:function(indexArr, data){
  console.log(data);
  var birth = '';
  Array.forEach(data,function(element,index,array){
  if(index<2){
                    		birth += element.value + '-';
                    	}else{
                    		birth += element.value;
                    	}
                    })
                    that.userInfo.birth = birth;
                }
            });
		},
		methods:{
			subBtn:function(){
				var userInfo=this.userInfo;
				console.log(userInfo)
   var uid=localStorage.getItem('userID')
                console.log(uid)
  console.log(userInfo.name)
                 console.log(userInfo.sex)
                 console.log(userInfo.birth)
  this.axios({
  url:'/api/SetUserBase.aspx',
  method:'post',
  data:Qs.stringify({       //需要引入qs插件，方便后台读取参数
  uid:uid,
  name:userInfo.name,
  sex:userInfo.sex,
  birthday:userInfo.birth
  }),
  headers: {
  'Content-Type': 'application/x-www-form-urlencoded' //请求头需要设置，axios默认 'application/json'
  }
  }).then(res=>{
  console.log(res);
  }).catch(err=>{
  console.log(err);
  })

  }
  }
  }
</script>

<style lang="less" scoped>
	.setting{
		background-color: #fff;
		width: 100%;
		.set-row{
			height: 90px;
			width: 100%;
			box-sizing: border-box;
			padding:0 25px;
			line-height: 90px;
			border-bottom: 2px solid #efefef;
			font-size: 32px; /*px*/
			display: flex;
			flex-wrap: nowrap;
			justify-content: space-between;
			color: #666;
			.name{
				text-align: right;
			}
			.sex{
				width: 30px;
				height: 30px;
				margin-right: 10px;
			}
		}
		.sub-btn{
			width: 700px;
			height: 80px;
			background-color: #ff2132;
			color: #fff;
			font-size: 30px; /*px*/
			border-radius: 10px;
			position: fixed;
			bottom:30px;
			left: 25px;
		}
	}
</style>
