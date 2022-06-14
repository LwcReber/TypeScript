// type Pick<T, K extends keyof T> = {
//   [P in K]: T[P]
// }

interface Book {
  name: string
  price: number
  count: string
}

type PickType = Pick<Book, 'name' | 'price'>

let book1: PickType = {
  name: 'xxbook',
  price: 19
} 