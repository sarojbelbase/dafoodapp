import axios from "axios"
import { v4 as uuidv4 } from "uuid";

export const state = () => ({
    fooddata: [],
    cart: []
})

export const getters = {
    totalPrice: state => {
        if (!state.cart.length) return 0;
        return state.cart.reduce((ac, next) => ac + +next.combinedPrice, 0)
    }
}

export const mutations = {
    updateFoodData: (state, data) => {
        state.fooddata = data
    },

    addToCart: (state, formOutput) => {
        formOutput.id = uuidv4()
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
