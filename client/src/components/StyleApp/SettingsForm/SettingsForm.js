import React, { Component } from "react";
import axios from 'axios';
import './SettingsForm.css';

class SettingsForm extends Component {
    state = {
        question1: '',
        question2: '',
        question3: '',
        question4: '',
        question5: ''
    };
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-2" />
                        <div className="col-md-8">
                            <h1>Let's Get to Know You</h1>
                            <p>Answer these 5 quick questions to construct your personalized shopping site.</p>
                            <form>
                                <div class="form-group">
                                    <label for="question1">How old are you?</label>
                                    <select class="form-control" id="question1">
                                        <option selected disabled hidden>Select an Option</option>
                                        <option>18-25</option>
                                        <option>26-34</option>
                                        <option>35-44</option>
                                        <option>45-52</option>
                                        <option>53-60</option>
                                        <option>61-68</option>
                                        <option>68-74</option>
                                        <option>75+</option>
                                    </select>
                                </div>

                                <div class="form-group">
                                    <label for="question2">What's your ethnicity?</label>
                                    <select class="form-control" id="question2">
                                        <option selected disabled hidden>Select an Option</option>
                                        <option>White</option>
                                        <option>Black or African American</option>
                                        <option>Asian</option>
                                        <option>American Indian</option>
                                        <option>Native Hawaiian or Other Pacific Islander</option>
                                        <option>Hispanic</option>
                                        <option>Other</option>
                                    </select>
                                </div>

                                <div class="form-group">
                                    <label for="question3">What's your hair color?</label>
                                    <select class="form-control" id="question3">
                                        <option selected disabled hidden>Select an Option</option>
                                        <option>Blonde</option>
                                        <option>Red</option>
                                        <option>Brunette</option>
                                        <option>White</option>
                                        <option>Grey</option>
                                        <option>Black</option>
                                        <option>Other</option>
                                    </select>
                                </div>

                                <div class="form-group">
                                    <label for="question4">What style do you like on others?</label>
                                    <select class="form-control" id="question4">
                                        <option selected disabled hidden>Select an Option</option>
                                        <option>Chic</option>
                                        <option>Tomboy</option>
                                        <option>Street</option>
                                        <option>Preppy</option>
                                        <option>Vintage</option>
                                        <option>Bohemian</option>
                                        <option>Sophisticated</option>
                                        <option>Other</option>
                                    </select>
                                </div>

                                <div class="form-group">
                                    <label for="question5">How would you characterize your wardrobe?</label>
                                    <select class="form-control" id="question5">
                                        <option selected disabled hidden>Select an Option</option>
                                        <option>Ecclectic</option>
                                        <option>Confused</option>
                                        <option>Cohesive</option>
                                        <option>Bohemian</option>
                                        <option>Other</option>
                                    </select>
                                </div>

                                <button type="submit" class="btn btn-dark">Submit</button>
                                <div className="col-md-2" />
                            </form>
                        </div>
                    </div>
                </div>
            </div >

        );
    }

};

export default SettingsForm;