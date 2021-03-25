import { createSlice } from "@reduxjs/toolkit";

export const paginationSlice = createSlice({
    name: 'pagination',
    initialState: {
        pageTeam: 0,
        sizeTeam: 0,
        pagePlayers: 0,
        sizePlayers: 0
    },
    reducers: {
        pageTeamCount: (state, data) => {
            state.pageTeam = data.payload;
        },
        sizeTeamCount: (state, data) => {
            state.sizeTeam = data.payload;
        },
        sizePlayersCount: (state, data) => {
            state.pagePlayers = data.payload;
        },
        pagePlayersCount: (state, data) => {
            state.sizePlayers = data.payload;
        },
    }
});

export const { pageTeamCount, sizeTeamCount, sizePlayersCount, pagePlayersCount } = paginationSlice.actions;
export const selectTeamPage = (state: any) => state.pagination.pageTeam;
export const selectTeamSize = (state: any) => state.pagination.sizeTeam;
export const selectPlayersPage = (state: any) => state.pagination.sizePlayers;
export const selectPlayersSize = (state: any) => state.pagination.pagePlayers;
export default paginationSlice.reducer;