import * as document from "document";
import * as messaging from "messaging";

let myButton = document.getElementById("myButton");

const image1 = "image1.png";
const image2 = "image2.png";

myButton.addEventListener("click", (evt) => {
  sendMessage("clicked");
  if (myButton.href === image1) {
    myButton.href = image2;
  } else {
    myButton.href = image1;
  }
});

messaging.peerSocket.addEventListener("open", (evt) => {
  console.log("Peer socket connected");
});

messaging.peerSocket.addEventListener("error", (err) => {
  console.log(`Connection error: ${err.code} - ${err.message}`);
});

function sendMessage(eventName) {
  if (messaging.peerSocket.readyState === messaging.peerSocket.OPEN) {
    // Send the data to peer as a message
    console.log(`Sending event to mobile: ${eventName}`);
    messaging.peerSocket.send(eventName);
  } else {
    console.log(
      `Peer socket was not ready: state ${messaging.peerSocket.readyState}`
    );
  }
}
