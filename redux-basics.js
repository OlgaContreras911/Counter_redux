const redux = require("redux"); //node import sintax
const createStore = redux.createStore; //let us to create a new redux store
const initialState = {
  counter: 0
}; //initialize the state, could be a number or something else, but is common to be an object

//Reducer
//add the value of intialState as default when state is undefined
// wich creating the store, then the current state will be our initial state and can be change
const rootReducer = (state = initialState, action) => {
  //recibes two arguments state(old that may update) and action
  if (action.type === "INC_COUNTER") {
    //state.counter++ NOT INMUTABLE
    return {
      ...state, //copy the old state
      counter: state.counter + 1 //overwrite the property
    };
  }
  if (action.type === "ADD_COUNTER") {
    //state.counter++ NOT INMUTABLE
    return {
      ...state, //copy the old state
      counter: state.counter + action.value //overwrite the property
      //action.value comes from dispatching actions
    };
  }
  return state;
  //return state; //onlu with this, returns old state
};

//Store
//with rootReducer as argument, the store is created with the reducer in mind
const store = createStore(rootReducer); //to work need a reducer, the only thing that update the state
console.log(store.getState());

//Dispatching Action
store.dispatch({ type: "INC_COUNTER" }); //like this we acces to the store, dispatch accept an argument
//this argument is an action, javascript object with type of action
store.dispatch({ type: "ADD_COUNTER", value: 10 }); //type action allways go this way, after you can add more properties
console.log(store.getState());

//Subscription
//make sure we dont have to manually call get state
