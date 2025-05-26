SuTech社のraasを組み込み方法を把握するためのサンプルプロジェクトです。
TypeScriptを用いたバックエンド向けのサンプルプロジェクトです

## Getting Started

以下の手順で環境を設定し、起動して下さい：

1. sutech社がhttps://npm.pkg.github.com/に公開しているライブラリを取得できるように、read:packages権限を持ったGitHubのTokenを環境変数「GITHUB_TOKEN」に登録する

2. .env.localにSuTech社契約後に入手するTokenなどを設定

3. 依存パッケージをインストールする
```bash
npm i  --legacy-peer-deps
```

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

