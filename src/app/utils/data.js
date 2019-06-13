const uuidv1 = require('uuid/v1')

export function makeItems (title, description, date, id = null) {
  id = id || uuidv1()
  return { id, title, description, date }
}

export function makeLists (title, items = []) {
  const id = uuidv1()
  return { id, title, items }
}

export function makeData () {
  return [
    makeLists('TO_DO', []),
    makeLists('IN_PROGRESS', []),
    makeLists('DONE', []),
  ]
}
