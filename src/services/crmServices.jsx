import axios from "axios";
import configService from "../config";
import HTTP_METHODS from "../constants";


class crmService {
    crmConfig = configService.crm_masters();


    getCity() {
        return axios({
            method: HTTP_METHODS.GET,
            url: `${this.crmConfig.url}/${this.crmConfig.path.city.getCity}`,

        });
    }
    addCity(data) {
        return axios({
            method: HTTP_METHODS.POST,
            url: `${this.crmConfig.url}/${this.crmConfig.path.city.addCity}`,
            data
        });
    }
    updateCity(data) {
        return axios({
            method: HTTP_METHODS.PUT,
            url: `${this.crmConfig.url}/${this.crmConfig.path.city.updateCity}/${data?.id}`,
            data
        });
    }
    getCluster() {
        return axios({
            method: HTTP_METHODS.GET,
            url: `${this.crmConfig.url}/${this.crmConfig.path.cluster.getCluster}`,

        });
    }
    addCluster(data) {
        return axios({
            method: HTTP_METHODS.POST,
            url: `${this.crmConfig.url}/${this.crmConfig.path.cluster.addCluster}`,
            data
        });
    }
    updateCluster(data) {
        return axios({
            method: HTTP_METHODS.PUT,
            url: `${this.crmConfig.url}/${this.crmConfig.path.cluster.updateCluster}/${data?.id}`,
            data
        });
    }
    getProperties() {
        return axios({
            method: HTTP_METHODS.GET,
            url: `${this.crmConfig.url}/${this.crmConfig.path.property.getProperties}`,

        });
    }


}

const CrmService = new crmService();
export default CrmService;