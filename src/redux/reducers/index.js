import {combineReducers} from 'redux';

const keyStoreReducer =(newKeyStore=null, action)=>{
	if(action.type === 'keystore'){
		return action.payload;
	}
	return newKeyStore;

}

const userDataReducer =(userData=null, action)=>{
	if(action.type === 'userData'){
		return action.payload;
	}
	return userData;
}

export default combineReducers ({
	keystore:keyStoreReducer,
	userData:userDataReducer
})