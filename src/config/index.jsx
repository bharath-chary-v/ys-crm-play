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
                property:{
                    getProperties:"crm_dashboard/v1/admin/properties"
                }
            },

        }
    }
}

const configService = new CONFIG();
export default configService;
