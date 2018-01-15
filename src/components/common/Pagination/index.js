import React from 'react';
import './pagination.css';

const Pagination = ({total, perPage, setActivePage}) => {
   let _calculateNumberOfPages = () => {
      return Math.ceil(total / perPage);
   };

   let buttons = [];
    for(let i = 0; i < _calculateNumberOfPages(); i++){
        buttons.push(<button key={i} onClick={() => {
            setActivePage(i)
        }}>{i + 1}</button>)
    }

    return buttons;

};

export default Pagination;
