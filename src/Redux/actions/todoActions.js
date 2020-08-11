import {REMOVE_ITEM} from './../types';

export const addItem = (item) => (dispatch) => {
  //   dispatch({
  //     type: SAYI_DEGISTIR,
  //     payload: sayi,
  //   });
};

export const removeItem = (index) => {
  return {
    type: REMOVE_ITEM,
    payload: index
  };
};

export const updateItem = (index, item) => {
  //   dispatch({
  //     type: SAYI_DEGISTIR,
  //     payload: sayi,
  //   });
};
