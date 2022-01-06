import { unpack, pack } from 'msgpackr';

var consu;
var ws = new WebSocket("ws://moodme-test.azurewebsites.net/get_data");
ws.onmessage = function(event) {
    var reader = new FileReader();

    reader.onload = () => {
        const buffer = new Uint8Array(reader.result);
        var answer = unpack(buffer);
        consu(answer);
    };
    reader.readAsArrayBuffer(event.data);
};

const waitForConnection = function (callback, interval) {
    if (ws.readyState === 1) {
        callback();
    } else {
        setTimeout(function () {
            waitForConnection(callback, interval);
        }, interval);
    }
};

export function getData(data, consumer) {
    waitForConnection(function() {
      ws.send(pack(data));
      consu = consumer;
    }, 1000);
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
