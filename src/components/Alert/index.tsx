import React, {useState} from 'react';
import classNames from 'classnames';
import './index.scss';

type Type = 'success' | 'info' | 'warning' | 'error'

// const AlertProps =React.DivHTMLAttributes<HTMLElement>

interface AlertProps {
    title: string
    des?: React.ReactNode
    type?: Type
    allowClose?: boolean
    callback?: () => void
}


const Alert: React.FC<AlertProps> = ({type = 'info', title, des, allowClose = true, callback}) => {

    const [closeState, setCloseState] = useState(true);
    const close = () => {
        setCloseState(false);
        callback?.()
    };

    const classes = classNames('alert',
        {[`alert-${type}`]: type}
        // {'allowclose': closeState}
    );
    return (
        <>
            {
                closeState && <article className='cus-alert'>
                    <div className={classes}>
                        <section className='header'>
                            <div className='title'>{title}</div>
                            {
                                allowClose && <div className='close' onClick={close}>X</div>
                            }
                        </section>
                        {
                            des && <section className='des'>
                                {des}
                            </section>
                        }
                    </div>
                </article>
            }
        </>
    );
};

export default Alert;
