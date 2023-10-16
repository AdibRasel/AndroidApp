const AllListService = async (Request, DataModel) => {
    let ID = Request.params.id

    try{

        // PostBody.UserEmail = Request.headers['email']
        UserEmail = Request.headers['email']
        
        let DataList = await DataModel.aggregate(
            [
                
                { $match: { UserEmail :  UserEmail} },
            
            ]
        )

        return {status: "success ", DataList: DataList}


    }catch (error) {

        return {status: "fail catch ", data: error}

    }

}
module.exports= AllListService