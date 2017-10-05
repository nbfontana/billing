import React from 'react';

import MenuItem from './menu-item';
import MenuTree from './menu-tree';

export default props => (
    <ul className="sidebar-menu">
        <MenuItem path="#dashboard" label="Dashboard" icon="dashboard"/>
        <MenuTree label="Cadastro" icon="edit">
            <MenuItem path="#billing-cycles" label="Cicos de Pagamentos" icon="usd"/>
        </MenuTree>
    </ul>
)