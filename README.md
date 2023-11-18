# Hello Nostr! Yo Bluesky! Nostr key value 解説コード

このリポジトリは 2023/11/11 に発売の書籍「Hello Nostr! Yo Bluesky! 分散SNSの最前線」に掲載された「Nostr リレーを活用したデータ保存（NIP-78）」のコード全体になります。

## 環境構築

必要なものは以下のとおりです。

- node.js v18 以降の実行環境
  - nvm 等でバージョンは変えられるようにしておいたほうが便利です
  - 必要に応じて、docker環境を使用してください。
- Git Cloneする環境
  - コードをこのリポジトリから Clone してください。
- コードをいじりたい人：VS Code
- Windows ユーザー向け：Git Bash, Windows Terminal（おすすめ）

## 実行前準備

必要なものをインストールします。node.js のインストールが完了していること前提になります。

```bash
npm install
```

依存関係・必要なライブラリが導入されます。

`.env.example` をコピーして `.env` にリネームします

`.env` ファイルを開いて、ボットの HEX をそれぞれ入力します。鍵は必要に応じて生成してください。

## 実行コマンド

以下のコマンドで、サンプルコードを起動できます。

```bash
# 1. GET
node 1_get_key_value.js
# 2. UPDATE
node 2_set_key_value.js
# 3. BOT Start
node 3_bot_script_example.js
```
