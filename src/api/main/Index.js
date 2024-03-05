import {delData,getData,postData,putData} from "../handler/Index.js"

class Apis {
    constructor(){}

    async getAllProducts(url){
        try {
            return await getData(url)
        } catch (error) {
            console.log(error)
        }
    }

    async getAllCategories(url){
        try {
            return await getData(url)
        } catch (error) {
            console.log(error)
        }
    }

    async getCategorySelected(url, model){
        try {
            return await getData(url)
        } catch (error) {
            console.log(error)
        }
    }

}

export default Apis