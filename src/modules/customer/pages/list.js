/**
 * Created by jfhuang on 17/7/4.
 */

import React, { Component } from 'react';
import CustomerItem from '../components/CustomerItem';
import EmptyPage from '../components/empty';

import '../assets/list.css';

const customerList = [];

class CustomerList extends Component {
    render () {
        const list = customerList.map((item) => {
                return (<CustomerItem key={item} />)
            });
        return (
            <div className="customer-list-box">
                {
                    list && list.length > 0 ?
                        (<ul>
                            { list }
                        </ul>)
                    :
                        (<EmptyPage />)

                }


            </div>
        );
    }
}

export default CustomerList;
