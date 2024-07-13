import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "userLocation",
    initialState: {
        cityName: "Dehradun, Uttarakhand",
        displayName: "Dehradun, Uttarakhand",
        latitude: "18.5204303",
        longitude: "73.8567437"
    },
    reducers: {
        setUserLocation : (state, action)=>{
            state.cityName = action.payload.name
            state.displayName = action.payload.display_name
            state.latitude = action.payload.lat
            state.longitude = action.payload.lon
        }
    }
})

export const { setUserLocation } = userSlice.actions;
export default userSlice.reducer;
