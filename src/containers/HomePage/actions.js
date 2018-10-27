import { INCREMENT_NUM } from './constants';

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