# com.myIdeaWay.bigbugIm
环信IM-cordova插件

## 安装插件
cordova plugin add https://github.com/zhangj0110/com.myIdeaWay.bigbugIm.git --variable APP_KEY=注册环信的appkey

**注意**：安装完毕后修改包里所有的.R 改为自己项目路径
请调整android:targetSdkVersion为21及以下
需要去掉ui里的title，请在AndroidManifest.xml里的application中加入android:theme="@android:style/Theme.NoTitleBar" 

## 使用方法
```
		//首先初始化easeui(ui初始化就不需要sdk初始化了)
  	cordova.plugins.BigBugIM.init(null,function(e){console.log(e);},function(e){console.log(e);});
		//登录 参数：用户名、密码
    cordova.plugins.BigBugIM.login('1','1',function(e){console.log(e);},function(e){console.log(e);});
		//聊天界面 参数：聊天对象id、类型（个人1，群组2，聊天室3）
  	cordova.plugins.BigBugIM.chat('200492083448906152',1,function(e){console.log(e);},function(e){console.log(e);});
		//联系人列表(因为联系人是自己服务器维护，这里只增加测试数据测试使用)
  	cordova.plugins.BigBugIM.contactList(null,function(e){console.log(e);},function(e){console.log(e);});
		//会话列表
  	cordova.plugins.BigBugIM.conversationList(null,function(e){console.log(e);},function(e){console.log(e);});
  	//退出聊天登录
  	cordova.plugins.BigBugIM.logout(null,function(e){console.log(e);},function(e){console.log(e);});


		//以下是无ui 仅仅sdk的一些方法

		//注册接收消息监听
		cordova.plugins.BigBugIM.addMessageListener(null,function(e){console.log(e);},function(e){console.log(e);});
		cordova.plugins.BigBugIM.receiveMessageInAndroidCallback = function(data){
    	//收到信息触发   	对象四种返回类型：IMAGE TXT VOICE LOCATION
    }
    cordova.plugins.BigBugIM.onMessageReadAckReceivedInAndroidCallback = function(data){
      //对方已读回执消息触发
    }
    cordova.plugins.BigBugIM.onActivityResultInAndroidCallback = function(data){
      //从原生聊天返回web界面触发
    }
```