angular.module('main')
.factory('PubSub', function (socket) {
    var container =  [];
    return {
        subscribe: function(options, callback){
            if(options){
                
                socket.on(name, callback);
                //Push the container..
                this.pushContainer(name);
            }else{
                throw 'Error: Option must be an object';
            }
        }, //end subscribe

        pushContainer : function(subscriptionName){
            container.push(subscriptionName);
        },

        //Unsubscribe all containers..
        unSubscribeAll: function(){
            for(var i=0; i<container.length; i++){
                socket.removeAllListeners(container[i]);   
            }
            //Now reset the container..
            container = [];
        }

    };
});