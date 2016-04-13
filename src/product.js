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

  const innerIterable = [...productInner(iterableList.slice(1))]
  for (let outer of iterableList[0]) {
    for (let inner of innerIterable) {
      yield [outer, ...inner]
    }
  }
}

export function product (...iterable) {
  return productInner(iterable.map(resolve))
}
