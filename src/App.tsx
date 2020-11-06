import React from 'react';
import 'normalize.css';
import { Button, Alert, Menu } from './components';
import { MenuItem } from './components/Menu/components';
import { BtnSize, BtnType } from './components/Button';
import FontAwesome from 'react-fontawesome';
import faStyles from 'font-awesome/css/font-awesome.css';

function App() {

    return (
        <article className="app">
            <Button>normal</Button>
            <Button autoFocus>normal</Button>
            <Button disabled>disabled</Button>
            <Button btnType={BtnType.Primary} size={BtnSize.Small}>Primary,Small</Button>
            {/*写法上 直接定义type 而不是枚举；*/}
            <Button type2='danger' size={BtnSize.Small}>Primary,Small</Button>
            <Button btnType={BtnType.Link} size={BtnSize.Large}
                    href='https://www.npmjs.com/package/classnames'>Primary,Small</Button>


            <Alert type='success' title='das' callback={() => console.log(1)} />
            <Alert title='das' allowClose={false} des='这是内容 哈哈哈哈哈😄'>123123</Alert>
            <Alert type='warning' title='das' />
            <Alert type='error' title='das' />


            <Menu mode='vertical'>
                <MenuItem>
                    导航1
                </MenuItem>
                <MenuItem disabled>
                    导航2
                </MenuItem>
                <MenuItem>
                    导航3
                </MenuItem>
            </Menu>
        </article>
    );
}


export default App;
