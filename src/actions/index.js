import { SAVE_COMMENT } from './types'

// eslint-disable-next-line import/prefer-default-export
export const submitComment = comment => ({
  type: SAVE_COMMENT,
  payload: comment
})
