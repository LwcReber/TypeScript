let recordType: Record<number, string> = {
  0: '全部',
  1: '启用'
}
 

type langType = 'zh' | 'en'

interface Lang  {
  home: string
  title: string
}

let lang: Record<langType, Lang> = {
  'zh': {home: 'aaa', title: 'bbb'},
  'en': {home: 'aaa', title: 'bbb'},
}