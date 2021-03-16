import axios from "axios"

export const state = () => ({
    fooddata: []
})

// export const getters = {
//   getterValue: state => {
//     return state.value
//   }
// }

export const mutations = {
    updateFoodData: (state, data) => {
        state.fooddata = data
    }
}


export const actions = {
    async getFoodData({ state, commit }) {
        if (state.fooddata.length) return
        try {
            const url = 'https://dva9vm8f1h.execute-api.us-east-2.amazonaws.com/production/restaurants';
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    "x-api-key": process.env.AWS_API_KEY
                }
            }
            await axios.get(url, config).then(res => res.data).then(data => {
                console.log(data)
                commit('updateFoodData', data)
            })
        } catch (err) {
            console.log(err);
        }
    }
}
