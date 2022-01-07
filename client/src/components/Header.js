import React, { useState } from 'react';
import logo from '../img/123.png';
import { toData, toStat } from '../app/reducers/pageSlice'
import { useSelector, useDispatch } from 'react-redux';

import styles from '../styles/Header.css';

export function Header() {
    const page = useSelector((state) => state.page.page)
    const dispatch = useDispatch()
    return (
        <div className='site-header'>
            <img className="logo-img" src={logo}>
            </img>
            <div className='navigate'>
                <button
                    className={"stat " + (page === 'stat' ? 'selected' : '')}
                    aria-label="stat"
                    onClick={() => dispatch(toStat())}>
                    Statistic
                </button>
                <button
                    className={"d-viewer " + (page === 'data' ? 'selected' : '')}
                    aria-label="d-viewer"
                    onClick={() => dispatch(toData())}>
                    Data
                </button>
            </div>
        </div>
    );
}
