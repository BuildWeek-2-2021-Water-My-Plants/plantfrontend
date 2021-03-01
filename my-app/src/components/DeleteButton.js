import React from 'react';
import { FETCH_PLANT_START } from '../actions';

import { axiosWithAuth } from '../utils/axiosWithAuth';

const DeleteButton = () => {

const deleteColor = plant => {
    axiosWithAuth()
    .delete(`/api/plants/${plant.id}`)
    .then((res) => {
      console.log(res)
      updateColors(colors.filter((color) => color.id !== res.data))
    })
    .catch((err) => {
      console.log(err)
    })
  };

  return (
    <div className="colors-wrap">
      <p>colors</p>
      <ul>
        {colors.map(color => (
          <li key={color.color} onClick={() => editColor(color)}>
            <span>
              <span className="delete" onClick={e => {
                    e.stopPropagation();
                    deleteColor(color)
                  }
                }>
                  x
              </span>{" "}
              {color.color}
            </span>
            <div
              className="color-box"
              style={{ backgroundColor: color.code.hex }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeleteButton;