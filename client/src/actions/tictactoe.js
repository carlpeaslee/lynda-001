

export const TEST_REDUX = 'TEST_REDUX'

export function testRedux() {
  console.log('We are testing redux.')
  return {
    type: TEST_REDUX,
  }
}
