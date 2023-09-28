understanding the redux
redux is used for to maintaining state and use it in any component, to avoids the propsdreling for using the state in child(any).
steps
create('-'==="folder" & '#'===".js file")
step1
-redux
    -action
        #index.js//for defining a function which will return a dispatch that will have a type and payload of action
    -reducers
        #nameReducers//a function who takes the state and action and use if/switch and perform actions w.r.t them
        #index.js//for combining all reducers
    #index.js/for exporting all actions(optional)
    #store//creaing a store with createdStore(reducers,{},middlewares)

step2
wrap the index app component with provider(redux) and assign store value to your store(import)
step3
use useSelector and useDispatch for getting and using the state

