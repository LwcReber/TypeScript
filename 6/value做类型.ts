type iBoolean = boolean | 1 | 0 // 值也可以做类型
let ivalid: iBoolean = 0
if (Boolean(ivalid)) {
  console.log('是boolean');
}
