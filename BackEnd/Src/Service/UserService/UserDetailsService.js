const UserDetailsService = async (Request, UserModel) => {
    try {

        let data = await UserModel.aggregate(
            [
                {
                    $match: { UserEmail: Request.headers['email'] }
                }
            ]
        )

        if(data[0].UserEmail === Request.headers['email']){

            return { status: "Success", data: data }
            
        }else{
            
            return { status: "Faild" }
        }


    } catch (error) {

        return { status: "fail", data: error.toString() }

    }
}
module.exports = UserDetailsService