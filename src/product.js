import {resolve} from './resolve'

function* productInner (iterableList) {
  if (iterableList.length === 0) {
    return
  }
  if (iterableList.length === 1) {
    for (let elem of iterableList[0]) {
      yield [elem]
    }
    return
  }

  for (let outer of iterableList[0]) {
    for (let elem of productInner(iterableList.slice(1))) {
      elem.unshift(outer)
      yield elem
    }
  }
}

export function product (...iterable) {
  return productInner(iterable.map(resolve))
}
