const counter = () => {
  let iArr = [];
  for(let i =0; i < 10; i++) {
    iArr.push(i + 1);
  }
  return iArr;
}

function log1(num) {
  console.log(1, num);
}

function log2(num) {
  console.log(2, num);
}

function print(array, callback) {
  console.log(array);
  const rand = Math.random();
  callback(rand);
}



print(counter(), log1);
print(counter(), log2);
