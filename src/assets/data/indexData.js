var bannerList = [
	{"img":require('../image/banner1@2x.png'),"url":""},
	{"img":require('../image/banner2@2x.png'),"url":""}
]
var navList = [
	{"src":require('../image/nav1@2x.png'),"title":"好车推荐","url":'/RecommendGood'},
	{"src":require('../image/nav2@2x.png'),"title":"拼团活动","url":'/PtShop'},
	{"src":require('../image/nav3@2x.png'),"title":"积分商城","url":'/IntegrationMarket'},
	{"src":require('../image/nav4@2x.png'),"title":"故障维修","url":'/Repair'},
	{"src":require('../image/nav5@2x.png'),"title":"预约保养","url":'/Appointment'},
	{"src":require('../image/nav6@2x.png'),"title":"新车推荐","url":'/RecommendNew'},
	{"src":require('../image/nav7@2x.png'),"title":"好友推荐","url":'/Share'},
	{"src":require('../image/nav8@2x.png'),"title":"更多产品","url":'/MoreShop'}
]
var shopGroup = [
	{
		"title":"好车推荐",
		"shopList":[
			{"id":"01","src":require('../image/shop.png'),"title":"LITE 17款引力","construcPrice":16.8,"price":11.8},
			{"id":"01","src":require('../image/shop.png'),"title":"LITE 17款引力","construcPrice":16.8,"price":11.8},
			{"id":"01","src":require('../image/shop.png'),"title":"LITE 17款引力","construcPrice":16.8,"price":11.8},
			{"id":"01","src":require('../image/shop.png'),"title":"LITE 17款引力","construcPrice":16.8,"price":11.8}
		]
	},
	{
		"title":"拼团活动",
		"shopList":[
			{"id":"01","src":require('../image/shop.png'),"title":"LITE 17款引力","construcPrice":16.8,"price":11.8,"isPt":1},
			{"id":"01","src":require('../image/shop.png'),"title":"LITE 17款引力","construcPrice":16.8,"price":11.8,"isPt":1},
			{"id":"01","src":require('../image/shop.png'),"title":"LITE 17款引力","construcPrice":16.8,"price":11.8,"isPt":1},
			{"id":"01","src":require('../image/shop.png'),"title":"LITE 17款引力","construcPrice":16.8,"price":11.8,"isPt":1}
		]
	},
	{
		"title":"新车推荐",
		"shopList":[
			{"id":"01","src":require('../image/shop.png'),"title":"LITE 17款引力","construcPrice":16.8,"price":11.8},
			{"id":"01","src":require('../image/shop.png'),"title":"LITE 17款引力","construcPrice":16.8,"price":11.8},
			{"id":"01","src":require('../image/shop.png'),"title":"LITE 17款引力","construcPrice":16.8,"price":11.8},
			{"id":"01","src":require('../image/shop.png'),"title":"LITE 17款引力","construcPrice":16.8,"price":11.8}
		]
	}
]

module.exports = {
  bannerList: bannerList,
  navList:navList,
  shopGroup:shopGroup
}