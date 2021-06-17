// 1° Questão

function someFun(obj, callback) {
  callback(obj.someProperty)

  return 1
}

// 2° Questão

function someFn(numero) {
  const funcaoRetorno = (valor) => {
    switch (valor) {
      case 3:
        return 4
      case 1:
        return 5
      case 5:
        return 10
    }
  }

  return funcaoRetorno
}

// 3° Questão

function calculator(n1, n2) {
  return function(callback) {
    return callback(n1, n2)
  }
}

// 4° Questão

// Irá aparecer: 4, 1, 5, 1

// 5° Questão

function tabuada(n) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${n} X ${i} = ${n * i}`)
  }
}
