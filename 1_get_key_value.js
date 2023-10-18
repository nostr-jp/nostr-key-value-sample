import { getAll, getTable, getSingle } from "nostr-key-value";
import "websocket-polyfill";

// 非同期処理で実行するように記載します。
// (async () => { // code })() のブロック内の処理は、順に行われます。

const relayUrl = ["wss://relay-jp.nostr.wirednet.jp"];

// kind: 1 などと同様に投稿したものは nsec で署名されます。npub を指定することで、自身が投稿したイベントを取得できます
const npub = "d0de11abd77e5c4537591186c0270c12e1cb0f116f4b082fcad66a1063c92d19";

// npub に該当する、すべての Kind: 30078 を取得します
// (async () => {
//   const all = await getAll(relayUrl, npub, 10);
//   console.log("all", all);
// })();

// npub に該当する、kind: 30078 のうち テーブル名が一致したものを取得します
// (async () => {
//   const tableName = "home_system";
//   const table = await getTable(relayUrl, npub, tableName);
//   console.log("table", table);
// })();

// npub に該当する、kind: 30078 のうち テーブル名が一致したものから、欲しいキーのみ取得します
(async () => {
  const tableName = "home_system";
  const keyName = "door_status";
  const single = await getSingle(relayUrl, npub, tableName, keyName);
  console.log("single", single);
})();
