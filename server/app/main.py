import os
import certifi as certifi
import pymongo as pymongo
from random import seed
from fastapi import FastAPI, WebSocket
from fastapi.middleware.cors import CORSMiddleware
import msgpack

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
client = pymongo.MongoClient(os.environ['DB_URL'], tlsCAFile=certifi.where())
db = client.college


@app.get("/")
def read_root():
    return {"Hello": "World"}

seed(1)

@app.websocket("/get_data")
async def read_item(ws: WebSocket):
    # for i in range(100):
    #     name = names.get_full_name()
    #     age = randint(14, 100)
    #     sex = randint(0, 1)
    #     happy = random()
    #     sad = random()
    #     angry = random()
    #     surprised = random()
    #     afraid = random()
    #     disgusted = random()
    #     neutral = random()
    #     race = randint(0, 5)
    #     db["people"].insert_one({'name': name, 'age': age, 'sex': sex, 'happy': happy, 'sad': sad, 'angry': angry, 'surprised': surprised, 'afraid': afraid, 'disgusted': disgusted, 'neutral': neutral, 'race': race})
    await ws.accept()
    while True:
        data = await ws.receive_bytes()
        filters = msgpack.unpackb(data, raw=False)
        people = db["people"].find({
            'age': {'$gte': filters['age_left'], '$lte': filters['age_right']},
            'sex': {'$in': filters['sex']},
            'happy': {'$gte': filters['happy_left'], '$lte': filters['happy_right']},
            'sad': {'$gte': filters['sad_left'], '$lte': filters['sad_right']},
            'angry': {'$gte': filters['angry_left'], '$lte': filters['angry_right']},
            'surprised': {'$gte': filters['surprised_left'], '$lte': filters['surprised_right']},
            'afraid': {'$gte': filters['afraid_left'], '$lte': filters['afraid_right']},
            'disgusted': {'$gte': filters['disgusted_left'], '$lte': filters['disgusted_right']},
            'neutral': {'$gte': filters['neutral_left'], '$lte': filters['neutral_right']},
            'race': {'$in': filters['race']}
        })
        answer = []
        for p in people:
            p['id'] = str(p['_id'])
            p['_id'] = str(p['_id'])
            answer.append(p)
        answer = msgpack.packb(answer, use_bin_type=True)
        await ws.send_bytes(answer)

