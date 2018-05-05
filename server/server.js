if (require.main === module) {
    var io = require('socket.io')();
    require('socketio-auth')(io, {
      authenticate: function (socket, value, callback) {
  
          var AccessToken = app.models.AccessToken;
          //get credentials sent by the client
          var token = AccessToken.find({
            where:{
              and: [{ userId: value.userId }, { id: value.id }]
            }
          }, function(err, tokenDetail){
            if (err) throw err;
            if(tokenDetail.length){
              callback(null, true);
            } else {
              callback(null, false);
            }
          }); //find function..    
        } //authenticate function..
    });
  
    io.on('connection', function(socket){
      console.log('a user connected');
      socket.on('disconnect', function(){
          console.log('user disconnected');
      });
    });
  }
  