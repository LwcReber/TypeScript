interface Customer {
  custname: string
  buymoney: number
}
type custFuncType = (cust: Customer) => string
// infer 占位函数返回类型
type inferType<T> = T extends (params: any) => infer P ? P : T

type interResultType = inferType<custFuncType>
export { }