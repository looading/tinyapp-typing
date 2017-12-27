# 支付宝小程序 Typescript 声明文件

[![npm](https://img.shields.io/npm/v/tinyapp-typing.svg?maxAge=2592000)](https://www.npmjs.com/package/tinyapp-typing)
[![npm](https://img.shields.io/npm/dm/tinyapp-typing.svg?maxAge=2592000)](https://www.npmjs.com/package/tinyapp-typing)

根据支付宝小程序官方接口文档整理出来的声明文件

## Usage

``` bash
npm install tinyapp-typing -d
```

```typescript
// tsconfig.json
{
    "typeRoots": [
      "node_modules/tinyapp-typing"
    ],
    "types": [
      "tinyapp-typing"
    ],  
}
```

``` typescript
// sample.ts
 const toPromise = <T, R>(func: Function) => (params?: R) => new Promise<T>((resolve, reject) => func(Object.assign({
  success: resolve,
  fail: reject,
}, params)));


toPromise<null, my.AlertParams>(my.alert)({
  content: 'test'
})
.then(x => {})
.catch(err => {})

```
## Requires

- IDE >= 0.15.7
- 基础库 >=1.4.0
