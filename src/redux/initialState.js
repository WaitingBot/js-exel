import {clone, storage} from '@core/utils'
import {defaultStyles, defaultTitle} from '@/constans';

const defaultState = {
  rowState: {},
  colState: {},
  dataState: {}, // {'0:1': 'text'}
  stylesState: {},
  openedDate : new Date().toJSON(),
  title: defaultTitle,
  currentText: '',
  currentStyles: defaultStyles,

}

const normalize = state => ({
  ...state,
  currentStyles: defaultStyles,
  currentText: ''
})

export function normalizeInitialState(state) {
  return state ? normalize(state) : clone(defaultState)
}

