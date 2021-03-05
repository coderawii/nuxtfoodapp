import { v4 as uuidv4 } from "uuid";

export const state = () => ({
  fooddata: [],
  cart: []
});

export const getters = {
  cartCount: state => {
    if (!state.cart.length) return 0;
    return state.cart.reduce((ac, next) => ac + +next.count, 0);
  },
  totalPrice: state => {
    if (!state.cart.length) return 0;
    return state.cart.reduce((ac, next) => ac + +next.combinedPrice, 0); //! pogledaj Sarah Drasner's blog gde opisuje reduce() metod
  }
};

export const mutations = {
  updateFoodData: (state, data) => {
    state.fooddata = data;
  },
  addToCart: (state, formOutput) => {
    formOutput.id = uuidv4();
    state.cart.push(formOutput);
  }
};

export const actions = {
  //! async
  async getFoodData({ state, commit }) {
    if (state.fooddata.length) return; // dakle ako vec imamo ove infos, nemoj da ih dohvatas
    try {
      await fetch(
        //! videcemo da u konzoli pise da je u sada fetch depricated, ali posto nuxt koristi polyfill ipakk ce radini u svim brauzerima
        "https://dva9vm8f1h.execute-api.us-east-2.amazonaws.com/production/restaurants", //?https://www.netlify.com/guides/creating-an-api-with-aws-lambda-dynamodb-and-api-gateway
        {
          headers: {
            "Content-Type": "application/json",
            "x-api-key": process.env.AWS_API_KEY //! pa kreiramo u rootu .env fajl gde smestamo na API key pod nazivom AWS_API_KEY, ali cemo proveriti da li se u .gitignore nalazi .env cisto da ne bismo exposed nas API key na github
          }
        }
      )
        .then(response => response.json()) // moramo da ga prasiramo kroz json jer ono sto dobijemo kao odg od api-ja je json
        .then(data => {
          console.log(data);
          commit("updateFoodData", data);
        });
    } catch (error) {
      console.log(error);
    }
  }
};
