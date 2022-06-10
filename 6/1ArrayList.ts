class ArrayList {
  public element: Array<object>
  constructor (){
    this.element = []
  }
  public index: number  = 0
  public add (ele: object) {
    this.checkIndex()
    this.element[this.index++] = ele
  }
  public checkIndex () {
    if (this.index < 0) {
      throw new Error('下标不能小于0')
    }
  }
  get (index: number): object {
    return this.element[index]
  }
  show () {
    this.element.forEach(ele => {
      console.log(ele)
    })
  }
  remove(value: number) : number
  remove(vallue: object): object
  remove (value: any): any {
    this.element = this.element.filter((ele, index) => {
      if (typeof value === 'number') {
        return value !== index
      } else {
        return value !== ele
      }
    })
  }
}

let one = {name: 'aaa', age: 20}

let array = new ArrayList

console.log(array.get(1));
