import { relayInit, finishEvent } from "nostr-tools";
import "websocket-polyfill";

export const currUnixtime = () => Math.floor(new Date().getTime() / 1000);

export const postNostr = async (ev, nsec, relayUrl) => {
  const relay = relayInit(relayUrl);
  relay.connect();
  return new Promise((resolve, reject) => {
    const data = finishEvent(ev, nsec);
    const pub = relay.publish(data);
    pub.then(() => {
      resolve("success");
    });
    pub.catch(() => {
      reject("failed");
    });
  });
};
