interface Customer {
  custname: string
  buymoney: number
}
type custFuncType = (cust: Customer) => string
// infer 占位params参数，符合函数一样的格式就能得出params类型
type interType<T> = T extends (params: infer P) => any ? P : T

type interResultType = interType<custFuncType>
export { }