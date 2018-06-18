angular.module('myApp',['ui.router','angularCSS'])
	/*.run(['$window','$rootScope',function($window,$rootScope){
		//$window相当于原生的window对象
		//$rootScope全局作用域，用于存储全局变量，在任何地方都可以使用
		//$rootScope.$on可以监听一些事件，在这里是监听浏览器地址的变化：$locationChangeSuccess
		//【$locationChangeSuccess】当浏览器地址变化成功后会触发这个事件
		$rootScope.message = '';
		$rootScope.$on('$locationChangeSuccess',function(){
			//$window.location.href表示获取到浏览器地址的字符串
			if($window.location.href.indexOf('userDetail') != -1){
				//当浏览器地址包含userDetail(用户细节信息)的时候，隐藏footer
				$rootScope.rootIsShowFooter = false;
			}else{
				$rootScope.rootIsShowFooter = true;
			}
		})
}])*/
	//要进行路由配置，在congfig方法里面进行
	//配置路由【依赖于$stateProvider服务】和【$urlRouterProvider】
	//$stateProvider是路由提供者
	//通过【依赖注入】来使用
	/*.config(['$stateProvider','$urlRouterProvider',
		function($routeProvider,$urlRouterProvider){
		//路由提供者
		$routeProvider
			//state管理的是一个状态，用来识别父子路由用的。
			//这个home不是锚点了，如果它有二级路由，那么
			//这个home是【二级路由的父亲状态标识】
			.state('index',{
				url : '/index',
				//template:'<h1>首页11111</h1>',
				templateUrl: './index.html',
				//给当前这个view配置一个控制器(自动就会管理，
				//不需要在view上写ng-controller)
				//如果想使用别名方式定义控制器，可以加入【as 别名】即可
				controller:'IndexCtrl as indexCtrl'
			})
			*//** 配置mine的二级路由
			 * mine.mineSubPage01中的mine是父级路由的状态名字，
			 * mineSubPage01是二级路由自己的状态名字，注意：mine不能乱写，
			 * 一定要写父级路由的状态名字。
			 *//*
			.state('index.test',{
				url:'/test',
				views:{
					'upView@index':{
						templateUrl:'./html/selectResult.html',
						controller:'SelectCtrl'
					},
					'downView@index':{
						templateUrl:'./html/home01.html',
					}
				}
			})
			
			//其他：使用了【$urlRouterProvider服务】
			$urlRouterProvider.otherwise('index');
	}])*/;