---
templateKey: blog-post
title: Gatsby/Netlifyでモダンブログを構築する②
date: 2021-12-20T11:26:05.560Z
description: Gatsby/Netlifyでモダンブログを開設する方法
featuredpost: true
featuredimage: /img/gatsby_title.jpeg
tags:
  - Gatsby
  - React
  - Netlify
---
# Gatsby/Netlifyでモダンブログを構築する

今回は手を動かしながらブログを構築・公開までを行っていきます。

# 前提知識

Gatsbyを使ってブログを作成するのはWordpressより難易度が高いです。

その分カスタマイズ性に優れます。

そのため、下記の知識があることを前提に進めます。

* Git
* HTML/JavaScript/CSS
* (あると嬉しい)React

# 事前準備

下記サイトのユーザー登録を済ませてください。
全て無料です。

* Github([https://github.com/)](https://github.com/)
* Netlify([https://www.netlify.com/)](https://www.netlify.com/)

# Gatsbyのテーマ選定

Gatsbyのテーマは[ここで検索できます](https://jamstackthemes.dev/ssg/gatsby/)。

テーマの数は232個とありまり多くありません。さらにメンテナンスがされているものだとさらに少ないです。

そのため、Gatsbyを使うにはテーマを拡張できるスキルが必要となります。

今回はブログ構築にあたり、[gatsby-starter-netlify-cms](https://github.com/netlify-templates/gatsby-starter-netlify-cms)を使用したいと思います。

選定した理由は、下記の4つです。

1. Netlify CMSをサポートしており、CMSを通して記事の入稿ができる。
2. Gatsby v4をサポートしている。
3. Blogのタグ検索ができる。
4. メンテナンスがきちんとされている。

デモは[こちらからアクセス](https://gatsby-netlify-cms.netlify.app/)できます。

(デモに出てくるKALDIは、輸入ショップのKALDIなのですかね)

# ブログ構築から公開まで

ここからブログ構築から公開まで一気に進んでいきます。

**公開するだけであればたった3ステップだけで出来ます**。

## Welcome to Netlify

下記リンクを押すと、Netlifyにブログをデプロイから公開するまで実施できます。

[ブログのデプロイを行う](https://app.netlify.com/start/deploy?repository=https://github.com/AustinGreen/gatsby-starter-netlify-cms&stack=cms)

### Githubとの連携

最初の画面はGithubとの連携設定です

今回公開するGatsbyに関わるリソースは全てGithubに配置され、管理されます。

右下の"Connect to Github"からGithubとの連携設定を行なってください。

![Netlifxy](/img/スクリーンショット-2021-12-20-22.26.11.png "Netlifxy")

### リソースのPush&Deploy

Githubとの連携が完了すると、リソースのSave&Deployに遷移します。

ここでは適当なリポジトリ名を入れて、"Save&Deploy"をクリックしてください。

GithubへのPush(Save)が始まり、GatsbyにDeployまで自動で実行されます。

![Netlify2](/img/fireshot-capture-074-welcome-to-netlify-get-your-gatsby-site-in-1-min.-netlify_-app.netlify.com.png "Netlify2")

### ブログにアクセスしてみる

GithubにPushが完了すると、Netlifyで自動的にビルドが開始され、完了すると自動的にNetlifyの管理画面に遷移します。

遷移後の画面で下記のようなURLをクリックしてください、ブログにアクセスできるはずです。

![](/img/naccess.png)

## ブログを追加してみる

早速ブログを追加してみましょう。

## CMSの管理画面にアクセス&ログイン

発行されたURLに"/admin"を追加すると、CMS管理画面にアクセスできます。

https://\[ここはユーザー毎に違います].netlify.app/admin/

ログイン画面に遷移しますので、ここではNetlifyのアカウントID/パスワードを入力してください。

![CMS1](/img/fireshot-capture-076-content-manager-dazzling-saha-2ee284.netlify.app.png "CMS1")

## ブログの追加

ブログを投稿してみましょう。

"New Blog"から投稿できます。

適当な記事を書いて投稿してみてください。 

しばらく経ってからブログにアクセスすると、新しいブログが公開されているはずです。

![](/img/fireshot-capture-077-content-manager-dazzling-saha-2ee284.netlify.app.png)

# 補足情報

## ブログの公開を押すと何が起こるのか?

ブログの公開を押すと、リソースのPush&Deploy&Build&Publishのフローが自動的に起こります。

1. 追加されたブログの記事は自動的に作成されたリポジトリのsrc/pages/blogにPushされます。
2. 新しいリソースがPushされると、Netlifyで自動的にビルドが開始されます。その様子はNetlifyの管理画面から確認できます。

![](/img/スクリーンショット-2021-12-20-22.48.06.png)

3. Buildが完了すると自動的にデプロイされます。

素晴らしいですね。理想的なDevOpsです。

# まとめ

今日はブログの公開まで実施しました。

ブログの投稿はできましたが、サイトロゴなどまだまだカスタマイズしなくてはならないところがあります。

そのため、次回はサイトのカスタマイズを実施していきます。