interface Student {
  title: string
  name: string
  age: number
}

type StudentType = Omit<Student, 'title'>

const student: StudentType = {
  name: 'xxx',
  age: 18
}