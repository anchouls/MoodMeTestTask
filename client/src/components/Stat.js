import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import InputRange from 'react-input-range';
import { VictoryPie } from "victory";
import { VictoryTheme } from "victory";
import { VictoryTooltip } from "victory";
import { VictoryHistogram } from "victory";
import { VictoryChart } from "victory";
import { VictoryArea } from "victory";
import { VictoryPolarAxis } from "victory";
import { VictoryLabel } from "victory";
import { merge, random, range } from "lodash";
import { updateEmotion } from '../app/reducers/statSlice'

import styles from '../styles/Stat.css';


export function Stat() {
    const data = useSelector((state) => state.stat.data)
    const emotion = useSelector((state) => state.stat.emotion)
    const dispatch = useDispatch()
    console.log(data)
    const d = {0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0}
    const e = {0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0}
    for(var i = 0; i < data.length; i++) {
        d[data[i]['race']] += 1
        e[0] += data[i]['happy']
        e[1] += data[i]['sad']
        e[2] += data[i]['angry']
        e[3] += data[i]['surprised']
        e[4] += data[i]['afraid']
        e[5] += data[i]['disgusted']
        e[6] += data[i]['neutral']
    }
    const pieData = []
    var index = 0
    if (d[0] != 0) {
      pieData[index] = { x: 'Caucasoid', y: d[0] }
      index++;
    }
    if (d[1] != 0) {
      pieData[index] = { x: 'Negroid', y: d[1] }
      index++;
    }
    if (d[2] != 0) {
      pieData[index] = { x: 'Ethiopian', y: d[2] }
      index++;
    }
    if (d[3] != 0) {
      pieData[index] = { x: 'Mongoloid', y: d[3] }
      index++;
    }
    if (d[4] != 0) {
      pieData[index] = { x: 'Americanoid', y: d[4] }
      index++;
    }
    if (d[5] != 0) {
      pieData[index] = { x: 'Weddo-australoid', y: d[5] }
      index++;
    }
    const emotionData = [
      { x: 'Happy', y: e[0] },
      { x: 'Sad', y: e[1] },
      { x: 'Angry', y: e[2] },
      { x: 'Surprised', y: e[3] },
      { x: 'Afraid', y: e[4] },
      { x: 'Disgusted', y: e[5] },
      { x: 'Neutral', y: e[6] }
    ]
    const dataHistogram = []
    for(var i = 0; i < data.length; i++) {
        dataHistogram[i] = {x: data[i][emotion]}
    }
    console.log(dataHistogram)
    const containerStyle = {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "center"
    };
    const parentStyle = {
      margin: "2%",
      maxWidth: "90%",
      padding: "30px"
    };
    return (
        <div style={containerStyle}>
          <div className="block">
              <VictoryChart polar
                theme={VictoryTheme.material}
              >
                <VictoryArea
                  data={emotionData}
                  style={{
                    parent: parentStyle,
                    data: { stroke: "#7d977d", strokeWidth: 1, fill: "#94aaa3" }
                  }}
                  animate={{
                    duration: 2000,
                    onLoad: { duration: 1000 }
                  }}
                />
                <VictoryPolarAxis/>
              </VictoryChart>
          </div>
          <div className="block">
              <VictoryPie
                  style={{ parent: parentStyle }}
                  theme={VictoryTheme.material}
                  data={ pieData }
                  colorScale={["#eff0f2", "#bfc0bd", "#94aaa3", "#7d977d", "#2d433c", "#f6f8fa" ]}
                  animate={{
                    duration: 2000
                  }}
                  labelPlacement={"perpendicular"}
              />
          </div>
          <div className="block">
              <div className="block-item">
                  <VictoryChart
                  domainPadding={1}
                  >
                      <VictoryHistogram
                          binSpacing={50}
                          style={{
                            parent: parentStyle,
                            data: { stroke: "#7d977d", strokeWidth: 1, fill: "#94aaa3" }
                          }}
                          data={dataHistogram}
                          bins={[0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]}
                          animate={{
                            duration: 2000,
                            onLoad: { duration: 1000 }
                          }}
                      />
                  </VictoryChart>
              </div>
              <div className="block-item">
                  <button
                      className={"block-item-button " + (emotion === 'happy' ? 'selected' : '')}
                      onClick={() => dispatch(updateEmotion('happy'))}>
                     Happy
                  </button>
                  <button
                      className={"block-item-button " + (emotion === 'sad' ? 'selected' : '')}
                      onClick={() => dispatch(updateEmotion('sad'))}>
                     Sad
                  </button>
                  <button
                      className={"block-item-button " + (emotion === 'angry' ? 'selected' : '')}
                      onClick={() => dispatch(updateEmotion('angry'))}>
                    Angry
                  </button>
                  <button
                      className={"block-item-button " + (emotion === 'surprised' ? 'selected' : '')}
                      onClick={() => dispatch(updateEmotion('surprised'))}>
                     Surprised
                  </button>
                  <button
                      className={"block-item-button " + (emotion === 'afraid' ? 'selected' : '')}
                      onClick={() => dispatch(updateEmotion('afraid'))}>
                    Afraid
                  </button>
                  <button
                      className={"block-item-button " + (emotion === 'disgusted' ? 'selected' : '')}
                      onClick={() => dispatch(updateEmotion('disgusted'))}>
                    Disgusted
                  </button>
                  <button
                      className={"block-item-button " + (emotion === 'neutral' ? 'selected' : '')}
                      onClick={() => dispatch(updateEmotion('neutral'))}>
                    Neutral
                  </button>
              </div>
          </div>
        </div>
    );
}
