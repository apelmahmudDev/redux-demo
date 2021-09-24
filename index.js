const redux = require("redux");
const createStore = redux.createStore;

const BUY_CAKE = "BUY_CAKE";

function buyCake() { // the function return a action
	return {
		type: BUY_CAKE, 
		info: "Redux first action",
	};
}

// (previousState, action) => newState;

const initialState = {
	numberOfCaks: 10,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case BUY_CAKE:
			return {
				...state,
				numberOfCaks: state.numberOfCaks - 1,
			};
		default:
			return state;
	}
};

const store = createStore(reducer); // holding application state 
console.log("Initial State", store.getState());
const unsubscribe = store.subscribe(() =>
	console.log("Update state", store.getState())
);
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
unsubscribe();
