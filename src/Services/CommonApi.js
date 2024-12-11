import axios from "axios";


const commonAPI = async(httpmethod, url, reqbody) => {


   const reqConfig = {

        method: httpmethod,

        url,

        data: reqbody

    }

  return await  axios(reqConfig).then(res => {
        return res
    }).catch(error => {
        return error
    })

}

export default commonAPI