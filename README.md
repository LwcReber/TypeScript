# TypeScript


## 高级类型
Extract：Extract<T, U> 返回左右两个相同的联合类型，过滤出两者相同的属性

Exclude:  Exclude<T, U> 与Extract 相反，返回左边与右边不一样的类型，过滤出前面独有的属性

Record:  Record<K, T> 返回一个对象，对象的属性为K的属性，属性的值类型为T

Partial:  Partial<T> 将T里面的属性全部变为可选项

Required: Required<T> 将T里面的属性全部变为必选项

Pick: Pick<T, K> K:T中的部分属性，选取T中的部分属性作为子类型

ReturnType: 获取函数T的返回类型，必须是函数并且有返回值

Omit： Omit<T, K> 从T中不要K的属性