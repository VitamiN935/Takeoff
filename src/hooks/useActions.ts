import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import actions from '../store/actions';

export function useActions() {
  const dispatch = useDispatch()
  return bindActionCreators(actions, dispatch)
}