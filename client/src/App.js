import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux'
import './styles/App.css';
import {Header} from "./components/Header";
import {Filter} from "./components/Filter";
import {Stat} from "./components/Stat";
import {DataViewer} from "./components/DataViewer";
import { updateAge, updateSex, updateHappy, updateSad, updateAngry,
    updateSurprised, updateAfraid, updateDisgusted,
    updateNeutral, updateRace } from './app/reducers/filterSlice'
import { updateData } from './app/reducers/statSlice'
import { getData, buildData } from './client/client.js'

function App() {
    const page = useSelector((state) => state.page.page)
    const age = useSelector((state) => state.filter.age)
    const sex = useSelector((state) => state.filter.sex)
    const happy = useSelector((state) => state.filter.happy)
    const sad = useSelector((state) => state.filter.sad)
    const angry = useSelector((state) => state.filter.angry)
    const surprised = useSelector((state) => state.filter.surprised)
    const afraid = useSelector((state) => state.filter.afraid)
    const disgusted = useSelector((state) => state.filter.disgusted)
    const neutral = useSelector((state) => state.filter.neutral)
    const race = useSelector((state) => state.filter.race)
    const dispatch = useDispatch()

    useEffect(() => {
      getData(buildData(age, sex, happy, sad, angry, surprised, afraid, disgusted, neutral, race),(x) => dispatch(updateData(x)))
    }, []);

    var pageObject = null
    switch (page) {
        case 'stat':
            pageObject = <Stat/>;
            break;
        case 'data':
            pageObject = <DataViewer/>;
            break;
    }

    return (
        <div className="App">
            <Header/>
            <div className='site-body'>
                <Filter/>
                <div className="main">
                    {pageObject}
                </div>
            </div>
        </div>
    );
}

export default App;
