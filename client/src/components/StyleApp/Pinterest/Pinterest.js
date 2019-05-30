import React from "react";
import loginController from "../../../controllers/LoginController";
import axios from 'axios';

export default class PinterestListItem extends React.Component {
    state = {
        email: '',
        board: '',//project3-w-fashion/
        data: ''
    }
    componentDidMount() {
        if (!window.doBuild) {
            this.preloadWidgetScript();
        } else {
            window.doBuild();
        }
        loginController.addUserChangedListener(this.setUser);
        loginController.recheckLogin();
    }
    getEthnicity = () => {
        let ethnicity;
        axios.get('api/set/ethnicity', {
            params: {
                email: this.state.email
            }
        }).then(settings => {
            ethnicity = settings.data.ethnicity
            this.setEthnicity(ethnicity)
        })
    }
    setEthnicity = (ethnicity) => {
        if (ethnicity === 'Black or African American') {
            this.setState({ board: 'styles-for-you' })
        } else if (ethnicity === 'White') {
            this.setState({ board: 'your-styles' })
        } else if (ethnicity === 'Asian') {
            this.setState({ board: 'our-styles-for-you' })
        } else if (ethnicity === 'American Indian') {
            this.setState({ board: 'look-inspiration' })
        } else if (ethnicity === 'Native Hawaiian or Other Pacific Islander') {
            this.setState({ board: 'looks-for-you' })
        } else if (ethnicity === 'Hispanic') {
            this.setState({ board: 'your-looks' })
        } else {

        }
    }

    componentWillUnmount() {
        loginController.removeUserChangedListener(this.setUser);
    }

    setUser = (user) => {
        this.setState({ email: user.user.email });
        this.getEthnicity();
    }

    preloadWidgetScript = () => {
        const script = document.createElement('script');
        script.async = true;
        script.dataset.pinBuild = 'doBuild';
        script.src = '//assets.pinterest.com/js/pinit.js';
        document.body.appendChild(script);
    }

    render() {
        return (
            <div>
                <h1>Curated Looks</h1>
                <a data-pin-do="embedBoard" data-pin-board-width="auto" data-pin-scale-height="800" data-pin-scale-width="60" href={'https://www.pinterest.com/writerella/' + this.state.board}> </a>
            </div >
        );
    }
}