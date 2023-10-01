# Backend

NodeJS application for fitbit app to send sms message with twilio.
Hosted by fly.io.

## Setup

- Install dependencies: run `pnpm i`
- Run app locally: run `pnpm start`
- Create fly app: run `fly apps create`
- Get a Twilio virtual phone number (get a trial number or buy a number) from https://console.twilio.com
- Verify a phone number you wish to send SMS on twilio account at https://console.twilio.com/us1/develop/phone-numbers/manage/verified
- Create `.env` file based on `example.env` and enter AccountSID and Auth Token

## Deployment

- Run `fly deploy`

## Update env

- Run `fly secrets set TWILIO_ACCOUNT_SID=example`
- Run `fly secrets set TWILIO_AUTH_TOKEN=example`