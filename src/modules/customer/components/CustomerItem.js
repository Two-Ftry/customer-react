/**
 * Created by jfhuang on 17/7/8.
 */

import React, { Component } from 'react';

import '../assets/CustomerItem.css';

class CustomerItem extends Component {
    render () {
        return (
            <li className="customer-list-item">
                <div className="left-part">
                    <span>客户名称</span>
                    <p>客户地址</p>
                </div>
                <p className="right-part">
                    <span>创建人</span>
                </p>
            </li>
        );
    }
}

export default CustomerItem;
