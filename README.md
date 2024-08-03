# CopyTitleAndUrl
`CopyTitleAndUrl`はchrome用のアドオンです。  
アクティブなタブのタイトルとURLをmarkdown、pukiwiki、html形式でクリップボードにコピーします。

## 使い方
![README_image_01](https://github.com/user-attachments/assets/b73c4961-9a7a-48ff-bd9a-90ccf90295a1)  
以下のようにクリップボードにコピーされます。  
normalの場合  
```
初めての拡張機能 - Mozilla | MDN
https://developer.mozilla.org/ja/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension
```

markdownの場合  
```
[初めての拡張機能 - Mozilla | MDN](https://developer.mozilla.org/ja/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension)
```

pukiwikiの場合  
```
[[初めての拡張機能 - Mozilla | MDN:https://developer.mozilla.org/ja/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension]]
```

htmlの場合
```
<a href="https://developer.mozilla.org/ja/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension">初めての拡張機能 - Mozilla | MDN</a>
```

## インストール方法
- CopyTitleAndUrlフォルダ を任意の場所に配置します  
  フォルダの場所を変えると拡張機能が読み込めなくなるので  
  変更しない場所に配置してください
- URLに`chrome://extensions/`と入力し拡張機能の管理画面を開きます
- 右上の[デベロッパーモード]をONにします
- [パッケージ化されていない拡張機能を読み込む]を選択し
  CopyTitleAndUrlフォルダ を選択します
