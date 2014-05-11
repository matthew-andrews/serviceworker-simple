console.log("I am a Service Worker");
this.version = 1;

this.addEventListener('install', function(e) {
  console.log("I am a Service Worker and I have been installed");
});

this.addEventListener('activate', function(e) {
  console.log("I am a Service Worker and I have been activated");
});

this.addEventListener('message', function(e) {
  var message = e.data;
  console.log("I am a Service Worker and I have just got the message:"+message);
});
