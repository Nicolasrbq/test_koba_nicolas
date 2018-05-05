var pubsub = require('../../server/pubsub.js');
var loopback = require('loopback');
module.exports = function(Order) {
    //Order after save..
    Order.observe('after save', function (ctx, next) {
        var socket = Order.app.io;
        if(ctx.isNewInstance){
            //Now publishing the data..
            pubsub.publish(socket, {
                collectionName : 'Order',
                data: ctx.instance,
                method: 'POST'
            });
        }else{
            //Now publishing the data..
            pubsub.publish(socket, {
                collectionName : 'Order',
                data: ctx.instance,
                modelId: ctx.instance.id,
                method: 'PUT'
            });
        }
        //Calling the next middleware..
        next();
    }); //after save..
    //OrderDetail before delete..
    Order.observe("before delete", function(ctx, next){
            var socket = Order.app.io;
            //Now publishing the data..
            pubsub.publish(socket, {
                collectionName : 'Order',
                data: ctx.instance.id,
                modelId: ctx.instance.id,
                method: 'DELETE'
            });
            //move to next middleware..
            next();
    }); //before delete..
}; //Module exports..