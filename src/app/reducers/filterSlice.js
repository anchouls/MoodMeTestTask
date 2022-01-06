import { createSlice } from '@reduxjs/toolkit'

export const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        age: [14, 100],
        sex: [true, true],
        happy: [0, 1],
        sad: [0, 1],
        angry: [0, 1],
        surprised: [0, 1],
        afraid: [0, 1],
        disgusted: [0, 1],
        neutral: [0, 1],
        race: [true, true, true, true, true, true]
    },
    reducers: {
        updateAge: (state, action) => {
            console.log(action)
            state.age = action.payload
        },
        updateSex: (state, action) => {
            console.log(action)
            state.sex[action.payload[0]] = action.payload[1].target.checked
        },
        updateHappy: (state, action) => {
            console.log(action)
            state.happy = action.payload
        },
        updateSad: (state, action) => {
            console.log(action)
            state.sad = action.payload
        },
        updateAngry: (state, action) => {
            console.log(action)
            state.angry = action.payload
        },
        updateSurprised: (state, action) => {
            console.log(action)
            state.surprised = action.payload
        },
        updateAfraid: (state, action) => {
            console.log(action)
            state.afraid = action.payload
        },
        updateDisgusted: (state, action) => {
            console.log(action)
            state.disgusted = action.payload
        },
        updateNeutral: (state, action) => {
            console.log(action)
            state.neutral = action.payload
        },
        updateRace: (state, action) => {
            console.log(action)
            state.race[action.payload[0]] = action.payload[1].target.checked
        }
    },
})

// Action creators are generated for each case reducer function
export const { updateAge, updateSex, updateHappy, updateSad, updateAngry,
    updateSurprised, updateAfraid, updateDisgusted,
    updateNeutral, updateRace } = filterSlice.actions

export default filterSlice.reducer
