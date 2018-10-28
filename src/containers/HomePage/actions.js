import { INCREMENT_NUM, GET_STUFF, GOT_STUFF, GOT_NO_STUFF }
  from './constants'

/**
 * Increment number
 *
 * @return {object} An action object with a type of INCREMENT_NUM
 */
export function incrementNum() {
  return {
    type: INCREMENT_NUM,
  };
}

/**
 * Get stuff
 *
 * @return {object} An action object with a type of GET_STUFF
 */
export function getStuff() {
  return {
    type: GET_STUFF,
  };
}

/**
 * Got stuff
 *
 * @return {object} An action object with a type of GOT_STUFF
 */
export function gotStuff(data) {
  return {
    type: GOT_STUFF,
    data
  };
}

/**
 * Got no stuff
 *
 * @return {object} An action object with a type of GOT_NO_STUFF
 */
export function gotNoStuff(error) {
  return {
    type: GOT_NO_STUFF,
    error
  };
}