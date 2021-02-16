var app = new Vue({
	el: '#app__b__account-management__detail',
	data: {
        accountInfo:{ 
			idx:1, 
			auth: 1, 
			name: 'Andy Wang', 
			email:'andywang@abc.aa', 
			dept:'1'
		}, 
		deptList:[
			{text:'aaa dept.', value:1},
			{text:'bbb dept.', value:2},
			{text:'ccc dept.', value:3},
			{text:'ddd dept.', value:4},
		],
		authList:[
			{text:'系統管理員', value:1},
			{text:'GM', value:2},
			{text:'審核人員', value:3},
			{text:'一般人員', value:4},
		]
			
	},
	methods: {
		account__submit: function(){
			var me = this;
			alert('送出修改 \n name:'+ me.accountInfo.name + '\n email:'+ me.accountInfo.email + '\n dept:' + me.accountInfo.dept + '\n auth:'+ me.accountInfo.auth)
		},
		account__cancel: function(){
			window.location.href="b__account-management.html";
		},
		
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
