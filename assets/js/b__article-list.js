var app = new Vue({
	el: '#app__b__article-list',
	data: {
		sortByTime: true,
		sortByTopic: true,
		sortByStatus: true,
        articleList:[
            { idx:1, status: '待發佈', time: '2020.12.31', title:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.', type:'NRI 觀點' }, 
            { idx:2, status: 'GM 確認', time: '2020.12.29', title:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.', type:'NRI 觀點' }, 
			{ idx:3, status: '審核中', time: '2020.12.27', title:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.', type:'NRI 觀點' }, 
            { idx:4, status: '已暫存', time: '2020.12.25', title:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.', type:'NRI 觀點' }, 
            { idx:5, status: '已發佈', time: '2020.12.23', title:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.', type:'NRI 觀點' }, 
        ]
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
		sortByTimeToggle: function(){
			var me = this;
			if(this.sortByTime){
				me.articleList.sort((a, b) => (a.time > b.time) ? 1 : -1)
				this.sortByTime = false
			} else if (!this.sortByTime) {
				me.articleList.sort((a, b) => (a.time < b.time) ? 1 : -1)
				this.sortByTime = true
			}
		},
		sortByTopicToggle: function(){
			var me = this;
			if(this.sortByTopic){
				me.articleList.sort((a, b) => (a.topic > b.topic) ? 1 : -1)
				this.sortByTopic = false
			} else if (!this.sortByTopic) {
				me.articleList.sort((a, b) => (a.topic < b.topic) ? 1 : -1)
				this.sortByTopic = true
			}
		},
		sortByStatusToggle: function(){
			var me = this;
			if(this.sortByStatus){
				me.articleList.sort((a, b) => (a.status > b.status) ? 1 : -1)
				this.sortByStatus = false
			} else if (!this.sortByStatus) {
				me.articleList.sort((a, b) => (a.status < b.status) ? 1 : -1)
				this.sortByStatus = true
			}
		},
		sortByResetToggle:function(){
			var me = this;
			me.articleList.sort((a, b) => (a.idx > b.idx) ? 1 : -1)
		},
		article__showDetail: function(){
			window.location.href="b__article-list__detail.html";

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
