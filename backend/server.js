const express = require("express");
const twilio = require("twilio");
require("dotenv").config();

// Your AccountSID and Auth Token from console.twilio.com
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const twilioClient = twilio(accountSid, authToken);

const app = express();
app.use(express.json());

app.post("/send-sms-alert", (request, reply) => {
  const body = request.body; 
  console.log(`body: ${request.body}`);
  const fromName = body.sender[0].name;
  const toName = body.contacts[0].name;
  const fromNumber = body.sender[0].number;
  const toNumber = body.contacts[0].number;
  const latitude = body.coords.latitude;
  const longitude = body.coords.longitude;
  const googleMapsUrl = `http://www.google.com/maps/place/${latitude},${longitude}`;

  console.log(
    `Sending message from ${fromName} ${fromNumber} to ${toName} ${toNumber}`
  );
  console.log(`Location is ${googleMapsUrl}`);
  console.log(`Latitude is ${latitude}, Longtitude is ${longitude}`);

  twilioClient.messages
    .create({
      body: `Hi ${toName}! This is swarm-alarm. ${fromName}'s location: ${JSON.stringify(
        latitude
      )}, ${JSON.stringify(longitude)}. ${googleMapsUrl}`,
      to: toNumber,
      from: fromNumber,
    })
    .then((message) => {
      console.log(message.sid);
      reply.status(200).send();
    })
    .catch((err) => {
      console.error(err);
      reply.status(500).send();
    });
});

const port = process.env.PORT || 8080;
app.listen(port, () =>
  console.log(`Node app listening on port http://localhost:${port}`)
);
