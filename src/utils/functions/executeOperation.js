export const executeOperation = (a, b, operation) => {
  return eval(`${a}${operation}${b}`)
}