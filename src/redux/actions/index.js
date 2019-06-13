//Action creator
export const updateKeyStore = (keystore)=>{
	//it returns an action
	return{
		type: 'keystore',
		payload:keystore
	}
}

export const updateUserData = (userData)=>{
	//it returns an action
	return{
		type: 'userData',
		payload:userData
	}
}