iterator-util
==============

[![Build Status](https://travis-ci.org/HyeonuPark/iterator-util.svg?branch=master)](https://travis-ci.org/HyeonuPark/iterator-util)

Some useful iterator utilities

# Usage

## resolve

Force value to be a iterable

```js
import {resolve} from 'iterator-util'

const iterable = ['foo', 'bar']
const nonIterable = 'baz'

for (let elem of resolve(iterable)) {
  console.lot(elem)
}

for (let elem of resolve(nonIterable)) {
  console.log(elem)
}

// result: foo bar baz
```

## map

`Array#map` but lazy as iterator

```js
import {map} from 'iterator-util'

const iterable = [1, 2, 3]

for (let elem of map(iterable, num => num ** 2)) {
  console.log(elem)
}

// result: 1 4 9
```

## concat

`Array#concat` but lazy as iterator

```js
import {concat} from 'iterator-util'

const head = [1, 2, 3]
const tail = [4, 5, 6]

for (let elem of concat(head, tail)) {
  console.log(elem)
}

// result: 1 2 3 4 5 6
```

## product

Provide cartesian product with given iterables

```js
import {product} from 'iterator-util'

const xCoord = [1, 2, 3]
const yCoord = [1, 2]

for (let [x, y] of product(xCoord, yCoord)) {
  console.log(`(${x}, ${y})`)
}

// result: (1, 1) (1, 2) (2, 1) (2, 2) (3, 1) (3, 2)
```
