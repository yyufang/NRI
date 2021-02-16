var app = new Vue({
	el: '#app__b__post-article',
	data: {
        input__articleType__selected:'news',
        input__articleType:[
            { value: 'news', text: 'NRI 新聞' }, 
            { value: 'insight', text: 'NRI 觀點'}
        ],
        input__articleTopic__selected:'01',
        input__articleTopic:[
            { value: '01', text: '土地開發' }, 
            { value: '02', text: '主題02'},
            { value: '03', text: '主題03'},
            { value: '04', text: '主題04'}
        ],
        input__articleReview__selected:'01',
        input__articleReview:[
            { value: '01', text: 'Andy Wang' }, 
            { value: '02', text: 'Ben Lee'},
            { value: '03', text: 'Calvin Wu'},
            { value: '04', text: 'Danny Chen'}
        ]
	},
	methods: {
		toggleTabs: function(index) {
			this.nowIndex = index;
		},
	},
	directives: {
		collapsehide: function(el, args) {
			$(function() { $('#' + args.value).collapse('show') });
		}
	},
	created: function() {
		
	},
	mounted: function() {
		var me = this;
		$(function() {

		});
		
	},
})
