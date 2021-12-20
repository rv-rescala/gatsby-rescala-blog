---
templateKey: blog-post
title: Gatsby/Netlifyでモダンブログを構築する①
date: 2021-12-20T11:25:05.560Z
description: Gatsby/Netlifyでモダンブログを開設する方法
featuredpost: true
featuredimage: /img/gatsby_title.jpeg
tags:
  - Gatsby
  - React
  - Netlify
---
# 華麗なるGatsby

レオナルド・ディカプリオ

ほんとダンディで素敵ですよね。

"Gatsby"と聞いて「華麗なるギャツビー」を思い浮かべる人も多いかと思います。

そんな"Gatsby"の名を冠したライブラリがGatsby.jsです。

<a name="Gatsby.js">https://www.gatsbyjs.com/</a>


# Gatsby.js

Gatsby.jsは**React**で作られた**静的サイトジェネレーター**です。

## React

Reactに関してはよく説明された資料が多くあるから、多くは語りません。

https://qiita.com/TsutomuNakamura/items/72d8cf9f07a5a30be048

フロントエンドの機能をまとめたライブラリです。

AngularJSよりも私は好きです。



## 静的サイトジェネレーター


このブログもgatsbyjsで作成しており、**画面遷移時にリロードが全く入らない**のに気がつくと思います。これが静的サイトの特徴です。

<br/>

静的サイトの何が良いのか? 

一言で語るのは難しいですが、全てのコンテンツを一つに固めて配信するので、キャッシュサーバーとの相性が抜群であり、**スケーラブルなコンテンツ配信**ができます。

そして**Netlify**という静的サイトを配信することに特化したWEBサイトのホスティングサービスを使えば、**なんと無料でモダンブログを作成することができます。**

このサイトも無料で運営しています。



# **Netlify**

Netlifyに関してもここでは多くは語りません。

それほど簡単に使えるからです。ハンズオンの時に開設します。



# なぜGatsby/Netlifyでブログを構築するのか?

ブログといえばWordpress、私もWordpressでブログを運営していたことがありました。Wordpressと比較してGatsby/Netlifyは何が良いのでしょうか?

## 1. 制限なく、無料で開設できる

ホスティングにはNetlifyを使用しますが、特徴として下記があります。

* 無料SSL
* 無料CDN
* 転送量: 100GB/月
* ストレージ: 100GB
* リクエスト制限: 500 requests/分

個人で開設するには全く問題ありません。

## 2. モダンなUI/UX

Wordpressで嫌いなのが、誰が作ってもWordpressのデザインになることです。

1世代前の、モッタリとしたUI/UXにうんざりします。

その点Gatsbyはサクサク動き、モダンなUI/UXを実現できます。

さらにさまざまなThemeが用意されており、ブログだけでなくショップ等さまざまなサイトを構築可能です。

例えば、UKのナショナルジオグラフィックはGatsbyを採用しています。

あのナショナルジオグラフィックに採用されてるとは、本当にすごい。

https://www.nationalgeographic.co.uk/



## 3. カスタマイズ性

Wordpressは有志によりさまざまなアドオンが用意されておりますが、JavaScriptを使ったフロントエンドをガリガリ描くのには適してません。

その点GatsbyはReactを書ければどんなようにもカスタマイズ可能、自由自在です。

そのため、少しでもフロントエンドに関する知識のあるエンジニアはWordpressではなく絶対にGatsbyにするべきです。





# まとめ

今回はGatsbyとNetlifyの簡単な紹介でした。

次回はこの2つを使って実際にブログを構築してみたいと思います。