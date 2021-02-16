var app = new Vue({
	el: '#app__b__account-management',
	data: {
		sortByName: true,
		sortByEmail: true,
		sortByAuth: true,
		sortByDept: true,
        accountList:[
            { idx:1, auth: 1, name: 'Andy Wang', email:'andywang@abc.aa', dept:'aaa dept.'}, 
            { idx:2, auth: 2, name: 'Ben Lee', email:'blee@abc.aa', dept:'bbb dept.' }, 
            { idx:3, auth: 3, name: 'Calvin Wang', email:'ccalwwang@abc.aa', dept:'ccc dept.'}, 
            { idx:4, auth: 4, name: 'Danny Chen', email:'dannyc@abc.aa', dept:'ddd dept.' }, 
        ]
	},
	methods: {
		authObj: function (auth) {
			if (auth === 1){
				return '系統管理員'
			}else if(auth === 2){
				return 'GM'
			}else if(auth === 3){
				return '審核人員'
			}else if(auth === 4){
				return '一般人員'
			}
		},
		sortByNameToggle: function(){
			var me = this;
			if(this.sortByName){
				me.accountList.sort((a, b) => (a.name > b.name) ? 1 : -1)
				this.sortByName = false
			} else if (!this.sortByName) {
				me.accountList.sort((a, b) => (a.name < b.name) ? 1 : -1)
				this.sortByName = true
			}
		},
		sortByAuthToggle: function(){
			var me = this;
			if(this.sortByAuth){
				me.accountList.sort((a, b) => (a.auth > b.auth) ? 1 : -1)
				this.sortByAuth = false
			} else if (!this.sortByAuth) {
				me.accountList.sort((a, b) => (a.auth < b.auth) ? 1 : -1)
				this.sortByAuth = true
			}
		},
		sortByEmailToggle: function(){
			var me = this;
			if(this.sortByEmail){
				me.accountList.sort((a, b) => (a.email > b.email) ? 1 : -1)
				this.sortByEmail = false
			} else if (!this.sortByEmail) {
				me.accountList.sort((a, b) => (a.email < b.email) ? 1 : -1)
				this.sortByEmail = true
			}
		},
		sortByDeptToggle: function(){
			var me = this;
			if(this.sortByDept){
				me.accountList.sort((a, b) => (a.dept > b.dept) ? 1 : -1)
				this.sortByDept = false
			} else if (!this.sortByDept) {
				me.accountList.sort((a, b) => (a.dept < b.dept) ? 1 : -1)
				this.sortByDept = true
			}
		},
		sortByResetToggle:function(){
			var me = this;
			me.accountList.sort((a, b) => (a.idx > b.idx) ? 1 : -1)
		},
		account__showDetail: function(){
			window.location.href="b__account-management__detail.html";
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
