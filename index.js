const redux = require("redux");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

function buyCake() {
	// the function return a action
	return {
		type: BUY_CAKE,
		info: "Redux first action",
	};
}

function buyIceCream() {
	return {
		type: BUY_ICECREAM,
	};
}

// (previousState, action) => newState;

// const initialState = {
// 	numberOfCaks: 10,
// 	numberOfIceCreams: 20,
// };

const initialCakeState = {
	numberOfCakes: 10,
};

const initialIceCreamState = {
	numberOfIceCreams: 20,
};

// const reducer = (state = initialState, action) => {
// 	switch (action.type) {
// 		case BUY_CAKE:
// 			return {
// 				...state,
// 				numberOfCaks: state.numberOfCaks - 1,
// 			};

// 		case BUY_ICECREAM:
// 			return {
// 				...state,
// 				numberOfIceCreams: state.numberOfIceCreams - 1,
// 			};

// 		default:
// 			return state;
// 	}
// };

const cakeReducer = (state = initialCakeState, action) => {
	switch (action.type) {
		case BUY_CAKE:
			return {
				...state,
				numberOfCakes: state.numberOfCakes - 1,
			};

		default:
			return state;
	}
};

const iceCreamReducer = (state = initialIceCreamState, action) => {
	switch (action.type) {
		case BUY_CAKE:
			return {
				...state,
				numberOfIceCreams: state.numberOfIceCreams - 1,
			};

		default:
			return state;
	}
};

const rootReducer = combineReducers({
	cake: cakeReducer,
	iceCream: iceCreamReducer,
});
const store = createStore(rootReducer); // holding application state
console.log("Initial State", store.getState());
const unsubscribe = store.subscribe(() =>
	console.log("Update state", store.getState())
);
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe();
