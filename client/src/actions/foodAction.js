import axios from 'axios';

export const getAllFood = () => async (dispatch) => {
    dispatch({type: "GET_FOODS_REQUEST"});
    try {
        const res = await axios.get("http://localhost:5002/api/foodmenu/getmenu" );
        console.log(res.data, "response");
        dispatch({ type: "GET_FOODS_SUCCESS", payload: res.data });
    } catch (err) {
        dispatch({type: "GET_FOODS_FAIL", payload:err});
    }
}