import { unpack, pack } from 'msgpackr';
import axios from 'axios';

const url = "http://moodme-test.azurewebsites.net/get_data";
var consu;

export function getData(data, consumer) {
    consu = consumer;
    console.log(pack(data));
    console.log(unpack(pack(data)));
    fetch(url, {
        method: 'POST',
        body: pack(data),
        headers: new Headers({'content-type': 'text/plain'})
    }).then((res) => {
        return res.arrayBuffer();
    }).then((data) => {
        consu(unpack(new Uint8Array(data)));
    }).catch((err) => console.log(err));
}


export function buildData(age, sex, happy, sad, angry, surprised, afraid, disgusted, neutral, race) {
    let list_sex = [];
    for(var i = 0; i < sex.length; i++) {
      if (sex[i]) {
        list_sex[i] = i;
      }
    }
    let list_race = [];
    for(var i = 0; i < race.length; i++) {
      if (race[i]) {
        list_race[i] = i;
      }
    }
    let data = {
      age_left: age[0], age_right: age[1],
      sex: list_sex,
      happy_left: happy[0], happy_right: happy[1],
      sad_left: sad[0], sad_right: sad[1],
      angry_left: angry[0], angry_right: angry[1],
      surprised_left: surprised[0], surprised_right: surprised[1],
      afraid_left: afraid[0], afraid_right: afraid[1],
      disgusted_left: disgusted[0], disgusted_right: disgusted[1],
      neutral_left: neutral[0], neutral_right: neutral[1],
      race: list_race
    };
    return data;
}
