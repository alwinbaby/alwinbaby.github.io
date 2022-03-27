

var mqtt;
var ReconnectTimeout=2000;
var host="mqtt://broker.emqx.io";
port=1883;



function MQTTconnect(){
    client = new Paho.MQTT.Client(host, port, "clientId");
    client.onConnectionLost = onConnectionLost;
    client.onMessageArrived = onMessageArrived;
    client.connect({onSuccess:onConnect});
}
function onConnect() {
    // Once a connection has been made, make a subscription and send a message.
    console.log("onConnect");
    client.subscribe("World");
    message = new Paho.MQTT.Message("Hello");
    message.destinationName = "World";
    client.send(message);
    document.getElementById("status").innerHTML="This is a test";
  }
  function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:"+responseObject.errorMessage);
    }
  }
  function onMessageArrived(message) {
    console.log("onMessageArrived:"+message.payloadString);
  }
  