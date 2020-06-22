import {storage} from '@core/utils'
import {defaultStyles, defaultTitle} from '@/constans';

const defaultState = {
  rowState: {},
  colState: {},
  dataState: {}, // {'0:1': 'text'}
  stylesState: {},
  title: defaultTitle,
  currentText: '',
  currentStyles: defaultStyles,

}

const normolize = state => ({
  ...state,
  currentStyles: defaultStyles,
  currentText: ''
})

export const initialState = storage('excel-state')
  ? normolize(storage('excel-state'))
  : defaultState