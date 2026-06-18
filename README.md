# ブルーアーカイブ ティア表メーカー

ローカルでもGitHub Pagesでも動く静的Webアプリです。

## ローカル起動

Windowsでは `start_windows.bat` を実行します。

## GitHub Pagesで公開

1. GitHubで新しいリポジトリを作成します。
2. この `ブルーアーカイブティア表` フォルダの中身をリポジトリのルートに置いて、`main` ブランチへpushします。
3. GitHubの `Settings > Pages` を開きます。
4. `Build and deployment` の `Source` を `GitHub Actions` にします。
5. `Actions` タブで `Deploy to GitHub Pages` が成功すると公開URLが発行されます。

公開後の保存データは各ユーザーのブラウザの `localStorage` に保存されます。別ユーザーと同じ配置を共有したい場合は、JSON保存/読込を使ってください。

画像はBlue Archive Wiki / TierMakerテンプレートからネット直読みします。権利は各権利者・参照元に帰属します。
