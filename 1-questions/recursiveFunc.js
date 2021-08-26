const func = (val, target) => {
  console.log(val, target)

  if (val === target) return true

  return func(++val, target)
}

func(0, 5)

