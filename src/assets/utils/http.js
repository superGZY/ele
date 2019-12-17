import axios from 'axios'

export const http = ({
    url,
    params,
    method
})=>{
    return axios({
        url,
        params,
        method
    })
    .then((result) => {
        return result.data
    })
    .catch((err) => {
        return err.message
    })
}