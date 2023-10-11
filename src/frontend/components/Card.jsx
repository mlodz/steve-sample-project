import {Children, useState, useCallback} from 'react';

import './Card.css';

export default function Card({children}) {
  let [title, body, footer] =  Children.toArray(children);
  const defaultTitle = 'Missing Title';
  const defaultBody = 'Missing Body';
  const defaultFooter = 'Missing Footer';
  return (
    <div className="Card">
      <h1 className="title nowrap">{title || defaultTitle}</h1>
      <div className="body">
        {body || defaultBody}
      </div>
      <div className="footer nowrap">
        {footer || defaultFooter}
      </div>
    </div>
  );
}
