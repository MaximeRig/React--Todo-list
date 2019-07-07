// NPM import
import React from 'react';

import { MdDeleteForever } from 'react-icons/md';

// locals imports
import './list.scss';

// components
const List = () => (
  <ul className="list">
    <li className="list-item">Première tache <MdDeleteForever className="list-item--delete" /></li>
    <li className="list-item">Seconde tache <MdDeleteForever className="list-item--delete" /></li>
    <li className="list-item">Troisième tache <MdDeleteForever className="list-item--delete" /></li>
  </ul>
);

// export
export default List;
