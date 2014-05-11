console.log("I am a Service Worker");
this.version = 1;

this.addEventListener('install', function(e) {
  console.log("I am a Service Worker and I have been installed");
}.bind(this));

this.addEventListener('activate', function(e) {
  console.log("I am a Service Worker and I have been activated");
}.bind(this));

this.addEventListener('message', function(e) {
  var message = e.data;
  console.log("Service Worker just got a message");
  console.log(message.text);
  message.port.postMessage("We got your message: "+message.text);
}.bind(this));
