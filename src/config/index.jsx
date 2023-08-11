class CONFIG {


    crm_masters() {
        return {
            url: 'https://api.staging.your-space.in',
            path: {
                city: {
                    getCity: `crm_dashboard/v1/admin/cities`,
                    addCity: `crm_dashboard/v1/admin/cities`,
                    updateCity: `crm_dashboard/v1/admin/cities`
                },
                cluster: {
                    getCluster: "crm_dashboard/v1/admin/clusters",
                    addCluster: "crm_dashboard/v1/admin/clusters",
                    updateCluster: "crm_dashboard/v1/admin/clusters",
                },
                state: {
                    getState: "crm_dashboard/v1/admin/states",
                    addState: "crm_dashboard/v1/admin/states",
                    getStateDetails: "crm_dashboard/v1/admin/states",
                },
                institutes: {
                    getInstitutes: "crm_dashboard/v1/admin/institutions",
                    addInstitutes: "crm_dashboard/v1/admin/institutions",
                    updateInstitutes: "crm_dashboard/v1/admin/institutions",
                    getInstitutesDetails: "crm_dashboard/v1/admin/institutions",
                },
                nearBy:{
                    getNearBy: "crm_dashboard/v1/admin/nearby_places",
                    addNearBy: "crm_dashboard/v1/admin/nearby_places",
                    updateNearBy: "crm_dashboard/v1/admin/nearby_places",
                    getNearByDetails: "crm_dashboard/v1/admin/nearby_places",     
                },
                roomType:{
                    getRoomType: "crm_dashboard/v1/admin/room_types",
                    addRoomType: "crm_dashboard/v1/admin/room_types",
                    updateRoomType: "crm_dashboard/v1/admin/room_types",
                    getRoomTypeDetails: "crm_dashboard/v1/admin/room_types",     
                },
                paymentPlan:{
                    getPaymentPlan: "crm_dashboard/v1/admin/payment_plans",
                    addPaymentPlan: "crm_dashboard/v1/admin/payment_plans",
                    updatePaymentPlan: "crm_dashboard/v1/admin/payment_plans",
                    getPaymentPlanDetails: "crm_dashboard/v1/admin/payment_plans",     
                },
                directServices:{
                    getDirectService: "crm_dashboard/v1/admin/direct_services",
                    addDirectService: "crm_dashboard/v1/admin/direct_services",
                    updateDirectService: "crm_dashboard/v1/admin/direct_services",
                    getDirectServiceDetails: "crm_dashboard/v1/admin/direct_services",     
                },
                property:{
                    getProperties:"crm_dashboard/v1/admin/properties",
                    addProperties:"crm_dashboard/v1/admin/properties"
                }
            },

        }
    }
    food_erp() {
        return {
            url: 'https://api.staging.your-space.in/food_erp_dashboard/v1/admin', 
            path:{
                foodCategory: {
                    getFoodCategory: `food_category`,
                    addFoodCategory: `food_categorys`,
                    updateFoodCategory: `food_category`
                },
                foodItem: {
                    getFoodItems: `food_item`,
                    addFoodItem: `food_item`,
                    updateFoodItem: `food_item`
                },
            }
        } 
    }
}

const configService = new CONFIG();
export default configService;
