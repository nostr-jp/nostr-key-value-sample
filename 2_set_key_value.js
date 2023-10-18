import { upsertTableOrCreate } from "nostr-key-value";
import { postNostr } from "./util/util.js";
import dotenv from "dotenv";

dotenv.config();

// 必要な設定をしていきます。
const relayUrl = "wss://relay-jp.nostr.wirednet.jp";
const nsec = process.env.NSEC;
const npub = process.env.NPUB;
const tableName = "home_system";
const tableTitle = "home_system";

// セットしたいデータを定義します
const values = [["door_status", "true"]];

(async () => {
  // テーブルがなければテーブルを作成してデータを保存、更新します
  const table_ev = await upsertTableOrCreate(
    [relayUrl],
    npub,
    tableName,
    tableTitle,
    [],
    values
  );

  // Nostr へ投稿します
  const result = await postNostr(table_ev, nsec, relayUrl);
  console.log(result);
})();
