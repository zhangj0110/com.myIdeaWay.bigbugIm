var exec = require('cordova/exec');

module.exports = {
    init: function(arg0, success, error) {
        exec(success, error, "bigbug", "init", [arg0]);
    },
    login : function(userName, password, success, error) {
    		exec(success, error, "bigbug", "login", [userName, password]);
		},
		chat : function(extraUserId,extraChatType, success, error) {
    		exec(success, error, "bigbug", "chat", [extraUserId, extraChatType]);
		},
		contactList : function(arg0, success, error) {
    		exec(success, error, "bigbug", "contactList", [arg0]);
		},
		conversationList : function(arg0, success, error) {
    		exec(success, error, "bigbug", "conversationList", [arg0]);
		},
		logout : function(arg0, success, error) {
    		exec(success, error, "bigbug", "logout", [arg0]);
		},
		addMessageListener : function(arg0, success, error) {
   			exec(success, error, "bigbug", "addMessageListener", [arg0]);
		},
		receiveMessageInAndroidCallback : function(data) {
				try{
					console.log("cordova.plugins.BigBugIM.receiveMessageInAndroidCallback");
					data = JSON.stringify(data);
					var bToObj = JSON.parse(data);
					//this.receiveNotification = bToObj;
					//cordova.fireDocumentEvent('cordova.plugins.Easemob.receiveNotification', null);
				} catch(exception) {
					console.log(exception);
				}
		},
		onMessageReadAckReceivedInAndroidCallback : function(data) {
				try{
					console.log("cordova.plugins.BigBugIM.onMessageReadAckReceivedInAndroidCallback");
					data = JSON.stringify(data);
					var bToObj = JSON.parse(data);
					//this.receiveNotification = bToObj;
					//cordova.fireDocumentEvent('cordova.plugins.Easemob.receiveNotification', null);
				} catch(exception) {
					console.log(exception);
				}
		},
		onActivityResultInAndroidCallback : function(data) {
				try{
					console.log("cordova.plugins.BigBugIM.onMessageReadAckReceivedInAndroidCallback");
					data = JSON.stringify(data);
					var bToObj = JSON.parse(data);
					//this.receiveNotification = bToObj;
					//cordova.fireDocumentEvent('cordova.plugins.Easemob.receiveNotification', null);
				} catch(exception) {
					console.log(exception);
				}
		}
};
