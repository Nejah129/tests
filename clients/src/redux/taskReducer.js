
import {ADD, DELET, GET} from "./actionsType"


const init={
    users:[],//chniya 7keytha
    loading:true
}


const reducer=(state=init,{type,payload})=>{
    switch (type) {
        case GET:
            return {
                ...state, //kifech 3milneha maghir man3mlo import liha
                users:payload,
                loading:false,
            };
            case DELET:
                return{
                    ...state,users:state.users.filter(user=>user._id!==payload._id)
                }
            
          case ADD:
              return{
                  ...state,users:[...state.users,payload]
              }
        default:
           return state
    }

}

export default reducer;