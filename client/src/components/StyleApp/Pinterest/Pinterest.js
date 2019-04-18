import React from "react";
import loginController from "../../../controllers/LoginController"
import pinterestController from '../../../controllers/pinterestController'

export default class PinterestListItem extends React.Component {
    state = {
        email: '',
        board: 'project3-w-fashion/',
        data: ''
    }
    componentDidMount() {
        console.log("componentDidMount");
        loginController.addUserChangedListener(this.setUser);

        loginController.recheckLogin();

        
    }
    componentDidMount() {
        if (!window.doBuild) {
            this.preloadWidgetScript();
        } else {
            window.doBuild();
        }

        if ('ethnicity' === 'Black or African American'){
            this.setState({ board: 'project3-b-fashion'})
        } else if ('ethnicity' === 'White'){
            this.setState({ board: 'project3-w-fashion' })
        } else if ('ethnicity' === 'Asian') {
            this.setState({ board: 'project3-a-fashion' })
        } else if ('ethnicity' === 'American Indian') {
            this.setState({ board: 'project3-ai-fashion' })
        } else if ('ethnicity' === 'Native Hawaiian or Other Pacific Islander') {
            this.setState({ board: 'project3-hp-fashion' })
        } else if ('ethnicity' === 'Hispanic') {
            this.setState({ board: 'project3-h-fashion' })
        }else{

        }

    }
    getEthnicity = () => {
        console.log('get ethnicity was called')
        pinterestController.getEthnicity(this.state.email)
    }

    componentWillUnmount() {
        console.log("WillUnmount");
        loginController.removeUserChangedListener(this.setUser);
    }

    setUser = (user) => {
        console.log('setUser Email- ' + user.user.email);
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