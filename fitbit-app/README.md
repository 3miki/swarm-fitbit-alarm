# Fitbit app & companion
Press a secret and silent alarm on your fitbit to notify your emergency contact with your GPS location by SMS

## Set up
- Install [Node](https://nodejs.org/en), e.g. v18 LTS
- Install pnpm: `npm install --global pnpm`
- Install dependencies: `pnpm i`
- Accept developer terms on gam.fitbit.com
- Download Fitbit simulator from https://dev.fitbit.com/getting-started/

## Usage
- Start the fitbit CLI: `pnpm debug`
- Run `build-and-install`
- Set up companion app settings in fitbit mobile app "Developer Menu"

## Changing images
- Change images as you wish
- Display size (image1.png, image2.png): 300 * 300 px
- Icon size (icon.png): 80 * 80 px

## Useful notes
- Project was created using `npx create-fitbit-app swarm-fitbit-alarm` and choosing "companion" and "settings" to be enabled.
- Join the discord server at https://community.fitbit.com/t5/SDK-Development/Join-the-Unofficial-Fitbit-Discord-Chat-Server/m-p/2184884#M164
- When first creating a user, you need to "Login to gam.fitbit.com and accept the terms" as per https://discord.com/channels/355793206182412290/360916874902372352/1116070600356675674
  - Warning: "You need to have a Fitbit watch paired to your Fitbit account before you can submit your app for distribution. Please associate your watch to this account and try again."
- Fitbit:
  - https://dev.fitbit.com/getting-started/
  - https://dev.fitbit.com/build/guides/communications/messaging/
  - https://dev.fitbit.com/build/guides/geolocation/


