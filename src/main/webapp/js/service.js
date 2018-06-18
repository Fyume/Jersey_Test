//【注意】在服务文件中，也不要加入[]符号，否则会报错
angular.module('myApp')
	//创建服务:UserService
	.factory('MachineService',[function(){
		//假数据(用户数组)
		var MachineList = [
			{ 'Id' : 1001, MachineName : '张三', MachineOther : 18 },
			{ 'Id' : 1002, MachineName : '李四', MachineOther : 19 },
			{ 'Id' : 1003, MachineName : '王二', MachineOther : 20 },
			{ 'Id' : 1004, MachineName : '麦子', MachineOther : 221 },
			{ 'Id' : 1005, MachineName : '赵山', MachineOther : 189 }
		]
		return {
			getList : function(){
				return MachineList
			},
			//查看【个人详情信息接口(根据用户ID去查)】
			//查询到跟待查ID匹配的某个对象并返回
			/*getUserInfoDetail : function(userId){
				for(var tempUser of userList){
					//如果传入的userId等于tempUser.userId
					if(tempUser.userId == userId){
						//那么就返回这个对象
						return tempUser;
					}
			    }
				//否则就返回null
				return null;
			}*/
		}
	}])
	.factory('UserService',[function(){
		//假数据(用户数组)
		var UserList = [{
					userID: 1,
					userName: 'aaa',
					telnum: 11111111111,
					imgurl: './img/ghoGAFcQeQCAEUtxAALxBJWoPxU890_336x336.jpg'
				},
				{
					userID: 2,
					userName: 'bbb',
					telnum: 13333333333,
					imgurl: './img/oWgGAFfGnE6ALV-IAABF9rfqeGg463_336x336.jpg'
				},
				{//测试用
					userID: 3,
					userName: 'ccc',
					telnum: 15555555555,
					imgurl: './img/oWgGAFfGnE6ALV-IAABF9rfqeGg463_336x336.jpg'
				}
				
			]
		return {
			getList : function(){
				return UserList;
			},
			/*getGoodsInfoDetail : function(message){
				var Glist = new Array();
				for(var tempGood of goodList){
					if(tempGood.gtitle.indexOf(message)!=-1){
						Glist.push(tempGood);
					}
			    }
				return Glist;
			},*/
		}
	}])