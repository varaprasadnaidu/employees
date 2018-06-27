const initialState = [
];
export function viewBillReducer(state = initialState, action) {
    switch (action.type) {
        case 'SELECTEDdata':
        return  [...state,action.payload]
          
            console.log('reducers data',action.payload)
        default:
            return state;
    }
}