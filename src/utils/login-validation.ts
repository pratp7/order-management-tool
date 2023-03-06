export const formValidation = (username:string, password:string) => {
 let errors = {isValid:true, userNameMsg:'', passwordMsg:''}
    if(!username.length){
        return {
            ...errors,
            isValid:false,
            userNameMsg:'Username cannot be Empty!'
        }
    }

    if(!password.length){
        return {
            ...errors,
            isValid:false,
            passwordMsg:'Password cannot be Empty!'

        }
    }


 return errors

}