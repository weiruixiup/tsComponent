import React, { createContext, useState } from 'react';
import './index.scss';
import classNames from 'classnames';
import { MenuItemProps } from './components/MenuItem';

// vertical=>竖直
type Mode = 'vertical' | 'horizontal'

type SelectCb = (selectedIndex: number) => void

// menu类型
interface MenuProps {
    defaultIndex?: number
    className?: string
    mode?: Mode
    style?: React.CSSProperties
    onSelect?: SelectCb
}

// 创建context类型
interface IMenuContext {
    index: number,
    onSelect?: SelectCb
}

export const MenuContext = createContext<IMenuContext>({index: 0});
const Menu: React.FC<MenuProps> = ({defaultIndex = 0, className, mode = 'horizontal', style, onSelect, children}) => {

    // 默认选中项
    const [currentActive, setCurrentActive] = useState(defaultIndex);

    const classes = classNames('cus-menu-ul', className, {
        'menu-vertical': mode === 'vertical',
        'menu-horizontal': mode === 'horizontal'
    });

    const handClick = (index: number) => {
        setCurrentActive(index);
        onSelect?.(index);
    };

    // 最终传递给子组件的context
    const passedContext: IMenuContext = {
        index: currentActive ? currentActive : 0,
        onSelect: handClick
    };

    // react api中内置对children的操作
    // 第一个参数是this.props.children 第二个是回掉
    const renderChildren = () => {
        return React.Children.map(children, (el, i) => {
            const childrenEle = el as React.FunctionComponentElement<MenuItemProps>;
            const {displayName} = childrenEle.type;
            if (displayName === 'MenuItem') {
                // 将属性添加到元素上，使用react clone
                // 第一个参数是ReactEle 第二个参数是要clone的属性
                return React.cloneElement(childrenEle, {
                    index: i
                });
            } else {
                console.error('不是传入的MenuItem组件');
            }
        });
    };
    return (
        <ul className={classes} style={style}>
            {/*<div className={`${test?'123':'1234'}`}></div>*/}

            {/*需要把menu的值传递给子组件*/}
            <MenuContext.Provider value={passedContext}>
                {renderChildren()}
            </MenuContext.Provider>
        </ul>
    );
};

export default Menu;
