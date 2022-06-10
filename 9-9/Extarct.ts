class People {
  public name!: string
  public age!: number
  public address!: string
  eat () {

  }
}
class ChinnesePeople extends People {
  private phone !: string
}
let cp = new ChinnesePeople()

// type Extract<T, U> = T extends U ? T : never

// 子类 extends 父类 返回子类 T
type extraceType = Extract<ChinnesePeople, People> // ChinnesePeople

// 父类 extends 子类 不成立，返回never
type extraceType2 = Extract<People, ChinnesePeople> // never

export {}