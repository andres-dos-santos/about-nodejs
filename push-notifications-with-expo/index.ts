import { Expo, type ExpoPushMessage } from "expo-server-sdk";

let expo = new Expo({
  // accessToken: process.env.EXPO_ACCESS_TOKEN,
  useFcmV1: false, // this can be set to true in order to use the FCM v1 API
});

let messages: ExpoPushMessage[] = [];

for (let pushToken of [
  "ExponentPushToken[bM4PfTJgF7OmddwOeKhpxr]",
  "ExponentPushToken[yORJSiJNvhUYZvL9bhXVV3]",
]) {
  if (!Expo.isExpoPushToken(pushToken)) {
    console.error(`Push token ${pushToken} is not a valid Expo push token`);
    continue;
  }

  messages.push({
    to: pushToken,
    sound: "default",
    title: "Oi, eu sou a notificação",
    body: "This is a test notification",
    data: { withSome: "data" },
  });
}

let chunks = expo.chunkPushNotifications(messages);

let tickets = [];

(async () => {
  for (let chunk of chunks) {
    try {
      let ticketChunk = await expo.sendPushNotificationsAsync(chunk);

      console.log(ticketChunk);

      tickets.push(...ticketChunk);
    } catch (error) {
      console.error(error);
    }
  }
})();

/* 
let receiptIds = [];

for (let ticket of tickets) {
  if (ticket.id) {
    receiptIds.push(ticket.id);
  }
}

let receiptIdChunks = expo.chunkPushNotificationReceiptIds(receiptIds);
(async () => {
  for (let chunk of receiptIdChunks) {
    try {
      let receipts = await expo.getPushNotificationReceiptsAsync(chunk);
      console.log(receipts);

      for (let receiptId in receipts) {
        let { status, message, details } = receipts[receiptId];
        if (status === "ok") {
          continue;
        } else if (status === "error") {
          console.error(
            `There was an error sending a notification: ${message}`
          );
          if (details && details.error) {
            console.error(`The error code is ${details.error}`);
          }
        }
      }
    } catch (error) {
      console.error(error);
    }
  }
})();
*/
