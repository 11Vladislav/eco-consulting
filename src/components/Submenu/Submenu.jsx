import { Link } from 'react-router-dom';

import { ServiceList, ServiceItem } from './Submenu.styled';

export const Submenu = () => {
  return (
    <div>
      <ServiceList>
        <ServiceItem>
          <Link to="/services/order1">Дозвіл на викиди в атмосферу</Link>
        </ServiceItem>
        <ServiceItem>
          <Link to="/services/order2">Дозвіл на спецводокористування</Link>
        </ServiceItem>
        <ServiceItem>
          <Link to="/services/markering">Оцінка впливу на довкілля (ОВД)</Link>
        </ServiceItem>
        <ServiceItem>
          <Link to="/services/development">Розробка розділу (ОВНС)</Link>
        </ServiceItem>
        <ServiceItem>
          <Link to="/services/register">Реєстрація декларації про відходи</Link>
        </ServiceItem>
             <ServiceItem>
          <Link to="/services/cards">Розробка реєстрових карт</Link>
        </ServiceItem>
      </ServiceList>
    </div>
  );
};