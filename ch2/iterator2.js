// 生成器是为了更方便的使用迭代器

function *makeIterator(arr) {
  for (let i = 0; i < arr.length; i++) {
    yield arr[i]
  }
}

const it = makeIterator(['吃放', '睡觉', '打豆豆'])
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())