import axios from "axios";
import configService from "../config";
import HTTP_METHODS from "../constants";


class crmService {
    crmConfig = configService.crm_masters();

    getState() {
        return axios({
            method: HTTP_METHODS.GET,
            url: `${this.crmConfig.url}/${this.crmConfig.path.state.getState}`,

        });
    }
    addState(data) {
        return axios({
            method: HTTP_METHODS.POST,
            url: `${this.crmConfig.url}/${this.crmConfig.path.state.addState}`,
            data
        });
    }
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
    getInstitutes() {
        return axios({
            method: HTTP_METHODS.GET,
            url: `${this.crmConfig.url}/${this.crmConfig.path.institutes.getInstitutes}`,

        });
    }
    getInstituteDetails() {
        return axios({
            method: HTTP_METHODS.GET,
            url: `${this.crmConfig.url}/${this.crmConfig.path.institutes.getInstitutesDetails}`,

        });
    }
    addInstitute(data) {
        return axios({
            method: HTTP_METHODS.POST,
            url: `${this.crmConfig.url}/${this.crmConfig.path.institutes.addInstitutes}`,
            data
        });
    }
    updateInstitute(data) {
        return axios({
            method: HTTP_METHODS.PUT,
            url: `${this.crmConfig.url}/${this.crmConfig.path.institutes.updateInstitutes}/${data?.id}`,
            data
        });
    }
    getNearBy() {
        return axios({
            method: HTTP_METHODS.GET,
            url: `${this.crmConfig.url}/${this.crmConfig.path.nearBy.getNearBy}`,

        });
    }
    getNearByDetails() {
        return axios({
            method: HTTP_METHODS.GET,
            url: `${this.crmConfig.url}/${this.crmConfig.path.nearBy.getNearByDetails}`,

        });
    }
    addNearBy(data) {
        return axios({
            method: HTTP_METHODS.POST,
            url: `${this.crmConfig.url}/${this.crmConfig.path.nearBy.addNearBy}`,
            data
        });
    }
    updateNearBy(data) {
        return axios({
            method: HTTP_METHODS.PUT,
            url: `${this.crmConfig.url}/${this.crmConfig.path.nearBy.updateNearBy}/${data?.id}`,
            data
        });
    }
    getRoomTypes() {
        return axios({
            method: HTTP_METHODS.GET,
            url: `${this.crmConfig.url}/${this.crmConfig.path.roomType.getRoomType}`,

        });
    }
    getRoomTypeDetails() {
        return axios({
            method: HTTP_METHODS.GET,
            url: `${this.crmConfig.url}/${this.crmConfig.path.roomType.getRoomTypeDetails}`,

        });
    }
    addRoomType(data) {
        return axios({
            method: HTTP_METHODS.POST,
            url: `${this.crmConfig.url}/${this.crmConfig.path.roomType.addRoomType}`,
            data
        });
    }
    updateRoomType(data) {
        return axios({
            method: HTTP_METHODS.PUT,
            url: `${this.crmConfig.url}/${this.crmConfig.path.roomType.updateRoomType}/${data?.id}`,
            data
        });
    }
    getPaymentPlans() {
        return axios({
            method: HTTP_METHODS.GET,
            url: `${this.crmConfig.url}/${this.crmConfig.path.paymentPlan.getPaymentPlan}`,

        });
    }
    getPaymentPlanDetails() {
        return axios({
            method: HTTP_METHODS.GET,
            url: `${this.crmConfig.url}/${this.crmConfig.path.paymentPlan.getPaymentPlanDetails}`,

        });
    }
    addPaymentPlan(data) {
        return axios({
            method: HTTP_METHODS.POST,
            url: `${this.crmConfig.url}/${this.crmConfig.path.paymentPlan.addPaymentPlan}`,
            data
        });
    }
    updatePaymentPlan(data) {
        return axios({
            method: HTTP_METHODS.PUT,
            url: `${this.crmConfig.url}/${this.crmConfig.path.paymentPlan.updatePaymentPlan}/${data?.id}`,
            data
        });
    }
    getDirectServices() {
        return axios({
            method: HTTP_METHODS.GET,
            url: `${this.crmConfig.url}/${this.crmConfig.path.directServices?.getDirectService}`,

        });
    }
    getDirectServiceDetails() {
        return axios({
            method: HTTP_METHODS.GET,
            url: `${this.crmConfig.url}/${this.crmConfig.path.directServices.getDirectServiceDetails}`,

        });
    }
    addDirectService(data) {
        return axios({
            method: HTTP_METHODS.POST,
            url: `${this.crmConfig.url}/${this.crmConfig.path.directServices.addDirectService}`,
            data
        });
    }
    updateDirectService(data) {
        return axios({
            method: HTTP_METHODS.PUT,
            url: `${this.crmConfig.url}/${this.crmConfig.path.directServices.updateDirectService}/${data?.id}`,
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
    addProperties(data) {
        return axios({
            method: HTTP_METHODS.POST,
            url: `${this.crmConfig.url}/${this.crmConfig.path.property.addProperties}`,
            data
        });
    }

    


}

const CrmService = new crmService();
export default CrmService;