import os
from typing import Any
import certifi as certifi
import pymongo as pymongo
from random import seed
from fastapi import FastAPI, Response, Body
from fastapi.middleware.cors import CORSMiddleware
import msgpack
from fastapi.responses import RedirectResponse, PlainTextResponse
from fastapi.staticfiles import StaticFiles

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.mount("/site", StaticFiles(directory="site"), name="site")

client = pymongo.MongoClient(os.environ['DB_URL'], tlsCAFile=certifi.where())
db = client.college


@app.get("/")
async def redirect():
    return RedirectResponse(url='/site/index.html')


@app.post("/get_data", response_class=Response)
async def get_data(data: Any = Body(..., media_type="text/plain")):
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
    return PlainTextResponse(answer)

