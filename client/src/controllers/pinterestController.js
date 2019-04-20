import axios from "axios";

class PinterestController {
    // This is a list of callbacks that are remembered for when the user changes. (login/logout)


    email = null;

    ethnicity= null;


    getEthnicity(email, ethnicity) {
        this.email = email;
        console.log('email should be - \n \n \n \n')
        console.log(email)
        axios.get('api/set/ethnicity', {
            params: {
                email: email
            }
        }).then(settings => {
            console.log(settings.data.ethnicity);
            ethnicity = settings.data.ethnicity
            console.log('Eth= ' + ethnicity)
            
           
        })

    }

}

export default new PinterestController();