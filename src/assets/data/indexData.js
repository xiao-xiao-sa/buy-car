var bannerList = [
	{"type":"1","img":"http://www.youdingsoft.com/fileUploadsmall/20180119172411843341.jpg;","url":""},
	{"type":"1","img":"http://www.youdingsoft.com/fileUploadsmall/20180119172434968049.jpg;","url":""},
	{"type":"1","img":"http://www.youdingsoft.com/fileUploadsmall/20180119172503906167.jpg;","url":""}
]
var navList = [
	{"src":require('../image/nav1.jpg'),"title":"好车推荐","url":'/RecommendGood'},
	{"src":require('../image/nav2.jpg'),"title":"拼团活动","url":'/PtShop'},
	{"src":require('../image/nav3.jpg'),"title":"积分商城","url":'/IntegrationMarket'},
	{"src":require('../image/nav4.jpg'),"title":"故障维修","url":'/Repair'},
	{"src":require('../image/nav5.jpg'),"title":"预约保养","url":'/Appointment'},
	{"src":require('../image/nav6.jpg'),"title":"新车推荐","url":'/RecommendNew'},
	{"src":require('../image/nav7.jpg'),"title":"好友推荐","url":'/Share'},
	{"src":require('../image/nav8.jpg'),"title":"更多产品","url":'/MoreShop'}
]
var shopGroup = [
	{
		"title":"好车推荐",
		"url":"/",
		"shopList":[
			{"id":"01","src":require('../image/shop.png'),"title":"LITE 17款引力","construcPrice":16.8,"price":11.8},
			{"id":"01","src":require('../image/shop.png'),"title":"LITE 17款引力","construcPrice":16.8,"price":11.8},
			{"id":"01","src":require('../image/shop.png'),"title":"LITE 17款引力","construcPrice":16.8,"price":11.8},
			{"id":"01","src":require('../image/shop.png'),"title":"LITE 17款引力","construcPrice":16.8,"price":11.8}
		]
	},
	{
		"title":"拼团活动",
		"url":"/",
		"shopList":[
			{"id":"01","src":require('../image/shop.png'),"title":"LITE 17款引力","construcPrice":16.8,"price":11.8,"isPt":1},
			{"id":"01","src":require('../image/shop.png'),"title":"LITE 17款引力","construcPrice":16.8,"price":11.8,"isPt":1},
			{"id":"01","src":require('../image/shop.png'),"title":"LITE 17款引力","construcPrice":16.8,"price":11.8,"isPt":1},
			{"id":"01","src":require('../image/shop.png'),"title":"LITE 17款引力","construcPrice":16.8,"price":11.8,"isPt":1}
		]
	},
	{
		"title":"新车推荐",
		"url":"/",
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