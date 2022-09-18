import axios from "axios";

const BASE_URL = "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary"

export const getPlacesData = async (ne,sw) => {
    try {
        const {data:{data}} = await axios.get(BASE_URL, {
            params: {
                bl_latitude: sw.lat,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
            },
            headers: {
                'X-RapidAPI-Key': 'bb90c887camshcbc56ebef74a386p1f745djsnadf3a530ca56',
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
        });
        return data;
    }
    catch (err) {
        console.log(err);
    }
}