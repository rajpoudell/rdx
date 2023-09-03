


let lastId =0;

function reducer(state =[],action){
    if(action.type === 'budAdded'){
        return[
            ...state,
            {
                id : ++lastId,
                description :action.payload.description,
                resolve:false
            }
        ];
    }
    else if(action.type==='bugRemoved'){
        return state.filter(bug =>bug.id !== action.payload.id)
    }
    else{
        return state;
    }

}














// function reducer(state =[],action){
//     switch (action.type){
//         case "budAdded":
//         return[
//             ...state,
//             {
//                 id : ++lastId,
//                 description :action.payload.description,
//                 resolve:false
//             }
//         ];
    
//     case 'bugRemoved':{
//         return state.filter(bug =>bug.id !== action.payload.id)
//     }
//     default :
//         return state;
//     }
// }

