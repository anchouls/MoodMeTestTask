import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateAge, updateSex, updateHappy, updateSad, updateAngry,
    updateSurprised, updateAfraid, updateDisgusted,
    updateNeutral, updateRace } from '../app/reducers/filterSlice'
import { updateData } from '../app/reducers/statSlice'
import InputRange from 'react-input-range';
import Slider from "rc-slider";
import styles from '../styles/Filter.css';
import 'rc-slider/assets/index.css';
import { getData, buildData } from '../client/client.js'

const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);

export function Filter() {
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

    return (
        <div className="filter">
            <div className="filter-item">
                <strong> Sex </strong>
                <div className="filter-checkboxes">
                    <div className="filter-column">
                      <input className={'checkbox'} type="checkbox" id={'sex-male'}
                             name="sex" value="male" defaultChecked={true}
                             onChange={(v) => dispatch(updateSex([0, v]))}/>
                      <label htmlFor="sex-male"> male </label>
                    </div>
                    <div className="filter-column">
                      <input className={'checkbox'} type="checkbox" id={'sex-female'}
                             name="sex" value="female" defaultChecked={true}
                             onChange={(v) => dispatch(updateSex([1, v]))}/>
                      <label htmlFor="sex-female"> female </label>
                    </div>
                </div>
            </div>
            <div className="filter-item">
                <strong> Age </strong>
                <div className="sliderArea sliderAreaAge">
                  <Range
                      marks={{
                          14: '14',
                          100: '100'
                      }}
                      min={14}
                      max={100}
                      defaultValue={[14, 100]}
                      tipProps={{
                          placement: "top",
                          visible: true
                      }}
                      onAfterChange={(v) => dispatch(updateAge(v))}
                  />
                </div>
            </div>
            <div className="filter-item">
                <strong> Emotion </strong>
                <div className="filter-emotion">
                    <div> Happy </div>
                    <div className="sliderArea">
                      <Range
                          marks={{
                              0: '0',
                              1: '1'
                          }}
                          min={0}
                          max={1}
                          step={0.1}
                          defaultValue={[0, 1]}
                          tipProps={{
                              placement: "top",
                              visible: true
                          }}
                          onAfterChange={(v) => dispatch(updateHappy(v))}
                      />
                    </div>
                </div>
                <div className="filter-emotion">
                    <div> Sad </div>
                    <div className="sliderArea">
                      <Range
                          marks={{
                              0: '0',
                              1: '1'
                          }}
                          min={0}
                          max={1}
                          step={0.1}
                          defaultValue={[0, 1]}
                          tipProps={{
                              placement: "top",
                              visible: true
                          }}
                          onAfterChange={(v) => dispatch(updateSad(v))}
                      />
                    </div>
                </div>
                <div className="filter-emotion">
                    <div> Angry </div>
                    <div className="sliderArea">
                      <Range
                          marks={{
                              0: '0',
                              1: '1'
                          }}
                          min={0}
                          max={1}
                          step={0.1}
                          defaultValue={[0, 1]}
                          tipProps={{
                              placement: "top",
                              visible: true
                          }}
                          onAfterChange={(v) => dispatch(updateAngry(v))}
                      />
                    </div>
                </div>
                <div className="filter-emotion">
                    <div> Surprised </div>
                    <div className="sliderArea">
                      <Range
                          marks={{
                              0: '0',
                              1: '1'
                          }}
                          min={0}
                          max={1}
                          step={0.1}
                          defaultValue={[0, 1]}
                          tipProps={{
                              placement: "top",
                              visible: true
                          }}
                          onAfterChange={(v) => dispatch(updateSurprised(v))}
                      />
                    </div>
                </div>
                <div className="filter-emotion">
                    <div> Afraid </div>
                    <div className="sliderArea">
                      <Range
                          marks={{
                              0: '0',
                              1: '1'
                          }}
                          min={0}
                          max={1}
                          step={0.1}
                          defaultValue={[0, 1]}
                          tipProps={{
                              placement: "top",
                              visible: true
                          }}
                          onAfterChange={(v) => dispatch(updateAfraid(v))}
                      />
                    </div>
                </div>
                <div className="filter-emotion">
                    <div> Disgusted </div>
                    <div className="sliderArea">
                      <Range
                          marks={{
                              0: '0',
                              1: '1'
                          }}
                          min={0}
                          max={1}
                          step={0.1}
                          defaultValue={[0, 1]}
                          tipProps={{
                              placement: "top",
                              visible: true
                          }}
                          onAfterChange={(v) => dispatch(updateDisgusted(v))}
                      />
                    </div>
                </div>
                <div className="filter-emotion">
                    <div> Neutral </div>
                    <div className="sliderArea">
                      <Range
                          marks={{
                              0: '0',
                              1: '1'
                          }}
                          min={0}
                          max={1}
                          step={0.1}
                          defaultValue={[0, 1]}
                          tipProps={{
                              placement: "top",
                              visible: true
                          }}
                          onAfterChange={(v) => dispatch(updateNeutral(v))}
                      />
                    </div>
                </div>
            </div>
            <div className="filter-item">
                  <strong> Race </strong>
                  <div className="filter-checkboxes">
                      <div className="filter-column">
                          <div>
                              <input className={'checkbox'} type="checkbox" id={'race-caucasoid'}
                                     name="race" value="caucasoid" defaultChecked={true}
                                     onChange={(v) => dispatch(updateRace([0, v]))}/>
                              <label htmlFor="race-caucasoid"> Caucasoid </label>
                          </div>
                          <div>
                              <input className={'checkbox'} type="checkbox" id={'race-negroid'}
                                     name="race" value="negroid" defaultChecked={true}
                                     onChange={(v) => dispatch(updateRace([1, v]))}/>
                              <label htmlFor="race-negroid"> Negroid </label>
                          </div>
                          <div>
                              <input className={'checkbox'} type="checkbox" id={'race-ethiopian'}
                                     name="race" value="ethiopian" defaultChecked={true}
                                     onChange={(v) => dispatch(updateRace([2, v]))}/>
                              <label htmlFor="race-ethiopian"> Ethiopian </label>
                          </div>
                      </div>
                      <div className="filter-column">
                          <div>
                              <input className={'checkbox'} type="checkbox" id={'race-mongoloid'}
                                     name="race" value="mongoloid" defaultChecked={true}
                                     onChange={(v) => dispatch(updateRace([3, v]))}/>
                              <label htmlFor="race-mongoloid"> Mongoloid </label>
                          </div>
                          <div>
                              <input className={'checkbox'} type="checkbox" id={'race-americanoid'}
                                     name="race" value="americanoid" defaultChecked={true}
                                     onChange={(v) => dispatch(updateRace([4, v]))}/>
                              <label htmlFor="race-americanoid"> Americanoid </label>
                          </div>
                          <div>
                              <input className={'checkbox'} type="checkbox" id={'race-weddo-australoid'}
                                     name="race" value="weddo-australoid" defaultChecked={true}
                                     onChange={(v) => dispatch(updateRace([5, v]))}/>
                              <label htmlFor="race-weddo-australoid"> Weddo-australoid </label>
                          </div>
                      </div>
                  </div>
            </div>
            <div className="filter-apply">
                <button onClick={() => getData(buildData(age, sex, happy, sad, angry, surprised, afraid, disgusted, neutral, race),(x) => dispatch(updateData(x)))}>
                    apply
                </button>
            </div>
        </div>
    );
}
