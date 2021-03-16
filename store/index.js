import axios from "axios"

export const state = () => ({
    fooddata: []
})

// export const getters = {
//   getterValue: state => {
//     return state.value
//   }
// }

// export const mutations = {
//   updateValue: (state, payload) => {
//     state.value = payload
//   }
// }


export const actions = {
    async getFoodData({ state, commit }) {
        try {
            const url = 'https://dva9vm8f1h.execute-api.us-east-2.amazonaws.com/production/restaurants';
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    "x-api-key": process.env.AWS_API_KEY
                }
            }
            await axios.get(url, config).then(res => Response.json()).then(data => {
                console.log(data)
                commit('updateFoodData', data)
            })
        } catch (err) {
            console.log(err);
        }
    }
}
