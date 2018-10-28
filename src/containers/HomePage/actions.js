import { INCREMENT_NUM, GET_STUFF } from './constants'

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