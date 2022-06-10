class ObjectTmpl<T extends object, K extends keyof T> {
  object!: T
  key!:K
  constructor (object_: T, key_:K) {
    this.object = object_
    this.key = key_
  }
  getValue () {
    return this.object[this.key]
  }
  setValue (newVal: T[K]) {
    this.object[this.key] = newVal
  }
}