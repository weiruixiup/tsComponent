import React, { useContext } from 'react';
import './index.scss';
import classNames from 'classnames';
import { MenuContext } from './../../index';


export interface MenuItemProps {
    // 与defaultIndex比较 然后高亮
    index?: number
    disabled?: boolean
    className?: string
    style?: React.CSSProperties
}

const MenuItem: React.FC<MenuItemProps> = ({index, disabled, className, style, children}) => {

    const menuContext = useContext(MenuContext);

    const classes = classNames('menu-item', className, {
        'is-disabled': disabled,
        'is-active': menuContext.index === index
    });

    const handClick = () => {
        if (menuContext.onSelect && !disabled && typeof (index) === 'number') menuContext.onSelect(index);
    };
    return (
        <li className={classes} style={style} onClick={handClick}>
            {children}
        </li>
    );
};

MenuItem.displayName = 'MenuItem';
export default MenuItem;
