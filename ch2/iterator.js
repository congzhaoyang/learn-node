// 简易迭代器

function makeIterator (arr) {
  let nextIndex = 0

  return {
    next: () => {
      if (nextIndex < arr.length) {
        return {
          value: arr[nextIndex++],
          done: false
        }
      } else {
        return {
          done: true
        }
      }
    }
  }
}

const it = makeIterator(['吃饭', '睡觉', '打豆豆'])
console.log(1 + it.next().value)
console.log(2 + it.next().value)
console.log(3 + it.next().value)
console.log('4' + it.next().done)