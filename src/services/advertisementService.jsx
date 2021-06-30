import axios from "axios"

export default class AdvertisementService{
    getAdvertisements(){
        return axios.get("http://localhost:8080/api/jobadvertisements/getActive")
    }

    getAdvertisementsByJobName(jobName){
        return axios.get("http://localhost:8080/api/jobadvertisements/getByJobName?jobName="+jobName)
    }
}