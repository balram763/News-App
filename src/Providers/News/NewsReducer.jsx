const NewsReducer = (state , action) => {
    switch(action.type){


        case "Get_News" :
            return{
                ...state,
                allNews : action.payload,
            }





        default : 
        state;
    }
  
}

export default NewsReducer