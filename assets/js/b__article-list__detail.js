var app = new Vue({
	el: '#app__b__article-list__detail',
	data: {
		action:{
			currentStatus:'待發佈',
			back:'退回',
			forward:'發佈',
		},
        articleInfo:{ 
			idx:1, 
			status: '待發佈', 
			date: '2020.12.31', 
			time:'18:00',
			title:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.', 
			type:'NRI 觀點',
			topic:'主題01',
			author:'Danny Chen',
			statusTime:'2019.01.03',
			reviewer:'Andy Wang',
		}, 
		articleTimeline:[
			{date: '2020.12.12', time:'18:00', status:'待審中', statusDetail:'文章待審中', comment:''},
			{date: '2020.12.12', time:'18:00', status:'', statusDetail:'第一次退件', comment:'格式不符，請重新修正後再次送件。'},
			{date: '2020.12.12', time:'18:00', status:'', statusDetail:'第二次退件', comment:'圖片資料有誤，請重新修正後再次送件。'},
			{date: '2020.12.12', time:'18:00', status:'', statusDetail:'通過初次審核', comment:'確認無誤'},
			{date: '2020.12.12', time:'18:00', status:'GM確認', statusDetail:'文章待 GM 確認中', comment:''},
			{date: '2020.12.12', time:'18:00', status:'', statusDetail:'通過 GM 確認', comment:'確認無誤'},
			{date: '2020.12.12', time:'18:00', status:'待發佈', statusDetail:'文章待發佈', comment:''},
		],
		submitInfo:{
			currentStstus:'',
			comment:'',
			action:''
		}
	},
	methods: {
		classObj: function (status) {
			return {
				orange: status === '待發佈', 
				orangered: status=== 'GM 確認', 
				tiffanygreen: status === '審核中',
				grassgreen: status=== '已暫存',
				lightdark: status === '已發佈'
			};
		},
		classObj__actionBtn: function (status) {
			console.log(status)
			return {
				bg_orange: status === '待發佈', 
				bg_orangered: status=== 'GM 確認', 
				bg_tiffanygreen: status === '審核中',
				bg_grassgreen: status=== '已暫存',
				bg_lightdark: status === '已發佈'
			};
		},
		articleDetail__cancel: function(){
			window.location.href="b__article-list.html";
		}

	},
	directives: {

	},
	created: function() {
		
	},
	mounted: function() {
		var me = this;
		$(function() {

		});
		
	},
	
})
