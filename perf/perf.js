export function execTest (name, testCount, fn) {
  const before = Date.now()
  for (var i = 0; i < testCount; i++) {
    fn()
  }
  const after = Date.now()

  console.log(`${name} takes ${after - before} ms within ${testCount} loop`)
}

export function createArray (size) {
  const data = []
  for (var i = 0; i < size; i++) {
    data.push(Math.random() * 1000)
  }
  return data
}

export function createSet (size) {
  return new Set(createArray(size))
}
