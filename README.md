# Tokotohi
Hitokoto Node.js version 

[中文](#chinese)

## Usage

### Sync Call

```
<script type="text/javascript" src="/hitokoto?callback=setHitokoto"></script>
```

### Async Call

```
setTimeout(function() {
	var scr = document.createElement('script');
	scr.setAttribute('src','/hitokoto?callback=setHitokoto');
	document.body.appendChild(scr);
},100);
```

### Callback

```
function setHitokoto(res) {
    // do something...
}
```

## Tokotohi Module Usage

1. copy `module` into your project folder
2. insert `var hitokoto = require('./modules/hitokoto');` into your code
3. `hitokoto.getData(function(data) { // do something... });`
4. Done.

### block some keywords

```
setBlockedWords(array); // Array params
```

## Data Object Schema Example

```
var data = {
	id : "123456789",
	content : "赠人玫瑰，手有余香；还人玫瑰，手有余伤。",
	source : "ShinCurry"
}
```

## Demo

[Windisco](https://windisco.com)

# Tokotohi 中文

<div id="chinese">
</div>

Hitokoto Node.js version 

[中文](#chinese)

## 调用方法

### 同步调用

```
<script type="text/javascript" src="/hitokoto?callback=setHitokoto"></script>
```

### 异步调用

```
setTimeout(function() {
	var scr = document.createElement('script');
	scr.setAttribute('src','/hitokoto?callback=setHitokoto');
	document.body.appendChild(scr);
},100);
```

### 回调函数

```
function setHitokoto(res) {
    // do something...
}
```

## 模块的使用方法

1. 拷贝 `module` 文件夹到你自己的项目目录
2. 导入 Module `var hitokoto = require('./modules/hitokoto');`
3. 调用 `hitokoto.getData(function(data) { // do something... });`

### 屏蔽某些关键词

```
setBlockedWords(array); // 传入一个数组
```

## 获取数据的对象模型［舍去了部分无用数据］

```
var data = {
	id : "123456789",
	content : "赠人玫瑰，手有余香；还人玫瑰，手有余伤。",
	source : "ShinCurry"
}
```