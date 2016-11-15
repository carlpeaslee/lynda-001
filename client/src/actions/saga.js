export function* testSaga() {
  yield console.log('Hello this is saga!')
}

export function* rootSaga() {
  yield [
    testSaga()
  ]
}
