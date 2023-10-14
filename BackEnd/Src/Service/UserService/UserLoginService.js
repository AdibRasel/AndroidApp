const CreateToken = require("../../Utility/CreateToken")



const UserLoginService = async (Request, DataModel) => {
    try {

        let data = await DataModel.aggregate(
            [
                { $match: Request.body },
                {
                    $project:
                        { _id: 0, UserEmail: 1, FirstName: 1, LastName: 1, Title: 1, Mobile: 1, Photo: 1, Password: 1 }
                }
            ]
        )

        if (data.length > 0) {

            const UserEmail = data[0]["UserEmail"];
            const Password = data[0]["Password"]

            let Token = await CreateToken(UserEmail, Password)

            return { status: "Success", data: data[0], Token: Token}

        } else {
            return { status: "Unauthorized" }
        }

    } catch (error) {
        return { status: "fail", data: error.toString() }
    }
}
module.exports = UserLoginService