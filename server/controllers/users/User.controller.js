const registerUser = async (req, res) => {
    try{
         console.log("hello from registerUser")

    }catch(error) {
        console.log(error)
    }
}

const loginUser = async (req, res) => {
    try{
        const {email, password} = req.body
        console.log("hello from server" , email , password)

    }catch(error) {
        console.log(error)
    }
}


export {
    registerUser, loginUser
}