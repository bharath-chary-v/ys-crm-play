import axios from "axios";
import configService from "../config";
import HTTP_METHODS from "../constants";


class foodService {
    foodConfig = configService.food_erp();


    getFoodCategories() {
        return axios({
            method: HTTP_METHODS.GET,
            url: `${this.foodConfig.url}/${this.foodConfig.path.foodCategory.getFoodCategory}`,

        });
    }
    addFoodCategory(data) {
        return axios({
            method: HTTP_METHODS.POST,
            url: `${this.foodConfig.url}/${this.foodConfig.path.foodCategory.addFoodCategory}`,
            data
        });
    }
    updateFoodCategory(data) {
        return axios({
            method: HTTP_METHODS.PUT,
            url: `${this.foodConfig.url}/${this.foodConfig.path.foodCategory.updateFoodCategory}/${data?.id}`,
            data
        });
    }
    getFoodItems() {
        return axios({
            method: HTTP_METHODS.GET,
            url: `${this.foodConfig.url}/${this.foodConfig.path.foodItem.getFoodItems}`,

        });
    }
    addFoodItem(data) {
        return axios({
            method: HTTP_METHODS.POST,
            url: `${this.foodConfig.url}/${this.foodConfig.path.foodItem.addFoodItem}`,
            data
        });
    }
    updateFoodItem(data) {
        return axios({
            method: HTTP_METHODS.PUT,
            url: `${this.foodConfig.url}/${this.foodConfig.path.foodItem.updateFoodItem}/${data?.id}`,
            data
        });
    }


}

const FoodService = new foodService();
export default FoodService;