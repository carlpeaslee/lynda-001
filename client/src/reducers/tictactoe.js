import {TEST_REDUX} from '../actions/tictactoe'

function tictactoe (state = {}, action) {
  switch (action.type) {
    case TEST_REDUX: {
      return {
        ...state,
      }
    }
    default: {
      return {
        ...state,
      }
    }
  }
}

export default tictactoe
