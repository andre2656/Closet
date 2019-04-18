import axios from "axios";

class PinterestController {
    // This is a list of callbacks that are remembered for when the user changes. (login/logout)

    userChangedListeners = [];

    email = null;


    getEthnicity(email) {
        this.email = email;
        console.log('email should be - \n \n \n \n')
        console.log(email)
        axios.get('api/set/ethnicity', email).then(settings => {
            console.log(settings);
        })

    }

}

export default new PinterestController();