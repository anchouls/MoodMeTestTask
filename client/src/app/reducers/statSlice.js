import { createSlice } from '@reduxjs/toolkit'

export const statSlice = createSlice({
    name: 'stat',
    initialState: {
        data: [],
        emotion: 'happy',
    },
    reducers: {
        updateData: (state, action) => {
            state.data = action.payload
        },
        updateEmotion: (state, action) => {
            state.emotion = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { updateData, updateEmotion } = statSlice.actions

export default statSlice.reducer
