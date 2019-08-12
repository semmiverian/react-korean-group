function sum(num1, num2) {
  return num1 + num2
}
it('should return 2 when 1 + 1', () => {
  const result = sum(1, 1)

  expect(result).toBe(2)
})