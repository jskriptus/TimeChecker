import React from 'react';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const dropdownLists = [
    { name: 'день', type: 'day' },
    { name: 'неделю', type: 'week' },
    { name: 'месяц', type: 'mounth' },
];

const menu = (
    <Menu>
        {dropdownLists.map((list, index) => {
            return (
                <Menu.Item key={index}>
                    <span>{list.name}</span>
                </Menu.Item>
            );
        })}
    </Menu>
);

const SortStat = () => {
    return (
        <Dropdown overlay={menu} trigger={['click']}>
            <b>
                Статистика за:{' '}
                <a href="#top" className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
                    день <DownOutlined />
                </a>
            </b>
        </Dropdown>
    );
};

export default SortStat;
