const DARK_THEME = 'DARK_THEME'
const LIGHT_THEME = 'LIGHT_THEME'

export const BG_KEY = 'bgStore'

const initialState = {
    color : '#ffffff'
}

const bgReducer = (state = initialState, action) =>{
    const {type} = action
    switch(type){
        case DARK_THEME:
            return{
                color: '#000000'     
            }

        case LIGHT_THEME:
            return{
                color:'#ffffff'      
            }    
        
        default: return state
    }

}
export {bgReducer}