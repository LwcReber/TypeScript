class Subject {
  constructor (public subid: number, public subname: string) {

  }
}
let csubject = new Subject(100, '语文')
let mathsubject = new Subject(100, '数学')

let setchuzhongSubject = new Set<Subject>([csubject, mathsubject])

type ss = typeof setchuzhongSubject
type ElementOf0<T> = T extends Set<infer E> ?E : never
let result: ElementOf0<typeof setchuzhongSubject>