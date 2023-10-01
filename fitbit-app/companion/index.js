import * as messaging from "messaging";
import { settingsStorage } from "settings";
import { geolocation } from "geolocation";

messaging.peerSocket.addEventListener("message", (evt) => {
  const eventName = evt.data;
  console.log(`Event received: ${eventName}`);
  
  geolocation.getCurrentPosition(locationSuccess, locationError, {
    timeout: 60 * 1000,
  });
});

function locationSuccess(position) {
  console.log(
    "Latitude: " + position.coords.latitude,
    "Longitude: " + position.coords.longitude
  );

  // Fitbit API will put setting storage value into JSON stringfied object 
  // {"name": 'value'} with .name is object
  // See https://community.fitbit.com/t5/SDK-Development/How-to-get-the-value-from-a-text-input-in-index-jsx/td-p/4369669
  // settingsStorage doesn't work with lists, probably strings only
  const senderNameString = settingsStorage.getItem("senderName");
  const senderName = JSON.parse(senderNameString).name; 

  const senderNumberString = settingsStorage.getItem("senderNumber");
  const senderNumber = JSON.parse(senderNumberString).name;

  const sender = {
    name: senderName,
    number: senderNumber,
  };

  const contactNameString = settingsStorage.getItem("emergencyContactName");
  const contactName = JSON.parse(contactNameString).name;

  const contactNumberString = settingsStorage.getItem("emergencyContactNumber");
  const contactNumber = JSON.parse(contactNumberString).name;

  const contact = {
    name: contactName,
    number: contactNumber,
  };
  console.log(`Contact: ${JSON.stringify(contact)}`);
  console.log(`Contact: ${JSON.stringify(sender)}`);

  const positionString = JSON.stringify({
    latitude: position.coords.latitude,
    longitude: position.coords.longitude,
  });
  console.log(`position:${positionString}`);
  const coords = {
    latitude: position.coords.latitude,
    longitude: position.coords.longitude,
  };

  const body = { sender: [sender], contacts: [contact], coords };
  const bodyString = JSON.stringify(body)
  console.log(`Body:${JSON.stringify(body)}`);

  const apiUrl = "https://swarm-fitbit-alarm.fly.dev/send-sms-alert";
  // cannot connect to local server with localhost
  // const apiUrl = "http://localhost:8080/send-sms-alert"

  fetch(apiUrl, {
    method: "POST",
    body: bodyString,
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      console.log(`Response status: ${response.status}`);
    })
    .catch((error) => {
      console.log(`Failed to trigger alert: ${error}`);
    });
}

function locationError(error) {
  console.log("Location error: " + error.code, "Message: " + error.message);
}