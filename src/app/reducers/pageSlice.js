import { createSlice } from '@reduxjs/toolkit'

export const pageSlice = createSlice({
    name: 'page',
    initialState: {
        page: 'data',
    },
    reducers: {
        toData: (state) => {
            state.page = 'data'
        },
        toStat: (state) => {
            state.page = 'stat'
        },
    },
})

// Action creators are generated for each case reducer function
export const { toData, toStat } = pageSlice.actions

export default pageSlice.reducer