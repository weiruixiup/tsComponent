import React from 'react';
import classNames from 'classnames';
import './index.scss';

// 定义常量的时候可以使用枚举
export enum BtnSize {
    Large = 'lg',
    Small = 'sm'
}

export enum BtnType {
    Primary = 'primary',
    Default = 'default',
    Danger = 'danger',
    Link = 'link'
}

type Type = 'primary' | 'default' | 'danger' | 'link'

// 定义变量使用接口
interface BaseBtnProps {
    children: React.ReactNode
    className?: string
    disabled?: boolean
    size?: BtnSize
    btnType?: BtnType,
    href?: string,
    type2?: Type
}

// 定义了button接收的参数，但是类似button的原生属性还不能使用 使用下面方式获取原生的属性（a标签属性同理）
// 我们需要将原始类型和自定义属性合并 不可以使用 | 联合类型 使用交叉类型 &
type NativeButtonProps = React.ButtonHTMLAttributes<HTMLElement> & BaseBtnProps
type AnchorButtonProps = React.AnchorHTMLAttributes<HTMLElement> & BaseBtnProps

// 最终确定按钮的属性，但是不是button的属性就是a标签的属性 所以使用Partial设置属性为可选
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

const Button: React.FC<ButtonProps> = ({children, className, disabled = false, size, btnType = BtnType.Default, href, type = 'default', ...restProps}) => {


    // 处理class 使用ts项目，需要安装 @types/classnames 一般@types是用在ts项目中做解析
    const classes = classNames('btn', className, {
        [`btn-${btnType}`]: btnType,
        [`btn-${btnType}`]: size,
        'disabled': btnType === BtnType.Link && disabled
    });


    return (
        <article className='cus-btn'>
            {
                btnType === BtnType.Link && href ? <>
                    <a href={href} className={classes} {...restProps}>{children}</a>
                </> : <>
                    <button className={classes} disabled={disabled} {...restProps}>{children}</button>
                </>
            }
        </article>
    );
};


export default Button;
