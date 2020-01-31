import { ADD_DATA, REMOVE_DATA } from "../action/index";
import { ReducersType } from "../interfaceReducer";

/* interface InterfaceReducer {  

  } */
  
  const initState = {
      add: [],
      remove: [],
      text: "Hello"
  }

export function rootReducer(state:any = initState, action: any){
    switch (action.type) {
        case ADD_DATA :
          //  console.log("Show", action);
            const a =state.add;
            a.push(action.add_text)
         //   console.log('>> state', state);
           return {...state, add: a};

        case REMOVE_DATA :
         //   console.log('>> action', action);
         //   console.log('>> state', state); 

            const b = state.add
      //      console.log("show array", b );

                      
         // Adding Interface - way(1)
         // const c = b.filter((eve:InterfaceReducer) =>eve !== action.remove_text)
         // way(2)
         const c = b.filter((eve:ReducersType) =>eve !== action.remove_text)
            
            return {...state, add:c }
    // using "add":c in return as you manipulate add in map (App.tsx) for Onclick event of span, always manipulate with one name  
        default:
            return state;
    }
    
}