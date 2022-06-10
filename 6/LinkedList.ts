import List from './List'

class Node<T> {
  public currentValue: T
  public next: Node<T>
  public prev: Node<T>
  constructor (prev: Node<T>, currentValue: T, next: Node<T>) {
    this.prev = prev
    this.currentValue = currentValue
    this.next = next
  }
}

export default  class LinkedList<T> implements List<T> {
  has (value: T): boolean {
    throw new  Error('Method not implemented.')
  }
  public first!: Node<T>
  public currentOrLast!: Node<T>
  public index: number = 0
  size(): number {
    return this.index ? this.index : 0
  }

  public addFirst (newVal: T): void {

  }

  public add (index: number, newValue: T): void
  public add(newValue: T): void
  public add(indexornewvalue: any, newValue: any = 0): void {
    throw new Error('Method not implemented.')
  }

  public checkIndex (index: number) {
    if (index >= this.index) {
      throw new Error('Method not implemented')
    }
  }


  get(index: number): T {
    throw new Error('Method not implemented.')
  }
  node (index: number): Node<T> {
    let t : any
    return t
  }

  remove (indexOrnodeObj: number): number
  remove (indexOrnodeObj: T): T
  remove(indexOrnodeObj: any): any {
    throw new Error('Method not implemented.')
  }
  

  public unlink (nodeRemove: Node<T>) {
    return nodeRemove
  }
}