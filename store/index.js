import axios from "axios"

export const state = () => ({
    fooddata: [],
    cart: []
})

// export const getters = {
//   getterValue: state => {
//     return state.value
//   }
// }

export const mutations = {
    updateFoodData: (state, data) => {
        state.fooddata = data
    },

    addtoCart: (state, formOutput) => {
        state.cart.push(formOutput)
    }
}


export const actions = {
    async getFoodData({ state, commit }) {
        if (state.fooddata.length) return
        try {
            const url = process.env.URL;
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    "x-api-key": process.env.AWS_API_KEY
                }
            }
            await axios.get(url, config).then(res => res.data).then(data => {
                commit('updateFoodData', data)
            })
        } catch (err) {
            console.log(err);
        }
    }
}
