import commonAPI from "./CommonApi";
import SERVER_URL from "./server_url";


//add details of videos - add.jsx

export const addVideo = async (video) => {

    return await commonAPI("POST", `${SERVER_URL}/allVideos`, video)

}




// to get all videos details
// empty str "" is used if nthg to pass

export const getAllVideos = async () => {
    return await commonAPI("GET", `${SERVER_URL}/allVideos`, "")
}



//to delete card videocard.jsx

export const deleteVideo = async (id) => {
    return await commonAPI('DELETE', `${SERVER_URL}/allVideos/${id}`, {})
}



//save history api call videocard.jsx

export const saveHistory = async (video) => {

    return await commonAPI("POST", `${SERVER_URL}/watchHistory`, video)

}



//Get watchHistory apicall

export const getAllHistory = async () => {
    return await commonAPI("GET", `${SERVER_URL}/watchHistory`, "")
}


//deleteHistory

export const deleteHistory = async (id) => {
    return await commonAPI('DELETE', `${SERVER_URL}/watchHistory/${id}`, {})
}



//add Post new category

export const addCategory = async (categoryDetails) => {
    return await commonAPI("POST", `${SERVER_URL}/category`, categoryDetails)
}

//Get new category
export const getAllCategory = async () => {
    return await commonAPI("GET", `${SERVER_URL}/category`, "")
}



//delete category

export const deleteCategory = async (id) => {
    return await commonAPI("DELETE", `${SERVER_URL}/category/${id}`, {})
}



//api call for getting single video

export const getSingleVideo = async (videoId) => {
    return await commonAPI("GET", `${SERVER_URL}/allVideos/${videoId}`, "")
}



//api call for update category

export const updateCategory = async (categoryId, categoryDetails) => {
    return await commonAPI("PUT", `${SERVER_URL}/category/${categoryId}`, categoryDetails)
}




//api call for getting single category

export const getSinglecategory = async (categoryId) => {
    return await commonAPI("GET", `${SERVER_URL}/category/${categoryId}`, "")
}




