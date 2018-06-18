//【注意】在控制器文件中，不要再写[]符号，否则会报错
angular.module('myApp')
	//home板块
	.controller('IndexCtrl', ['$scope', '$css'/*, '$location'*/, '$rootScope', 'UserService', 'MachineService',
		function($scope, $css, /*$location,*/ $rootScope, UserService,MachineService ) {
			//添加一个pageName属性
			$scope.pageName = '首页';
			//$css是AngularJS模块中的一个内置服务，用来【加载CSS文件】
			$css.add('./css/index.css');
			//显示用户列表
			$scope.userList = UserService.getList();
			$scope.machineList = MachineService.getList();
			/*$rootScope.homedata = function() {//全局函数
				if($rootScope.changePage ==1) {
					$("#downView").css('display', 'none');
					$("#upView").css('display', 'block');
				} else if($rootScope.changePage ==2){
					$("#upView").css('display', 'none');
					$("#downView").css('display', 'block');
				}
			}*/
		}
	]);