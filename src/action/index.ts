
/* action types */
export const ADD_DATA = 'ADD_DATA'

export const REMOVE_DATA = 'REMOVE_DATA'

/* Action Creator */

// Add Data
export function add(add_text:string) {
    return {type: ADD_DATA, add_text}
}

// Remove Data
 export function remove(remove_text: string) {
   return {type: REMOVE_DATA, remove_text}
 }