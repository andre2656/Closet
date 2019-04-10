import React, { Component } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';


class SettingsForm extends Component {
    state = {
        email: '',
        age: null,
        ethnicity: null,
        hairColor: null,
        style: null,
        wardrobe: null
    };

    handleAge = (event) => {
        this.setState({ age: event.target.value })
    }
    handleEthnicity = (event) => {
        this.setState({ ethnicity: event.target.value })
    }
    handleHairColor = (event) => {
        this.setState({ hairColor: event.target.value })
    }
    handleStyle = (event) => {
        this.setState({ style: event.target.value })
    }
    handleWardrobe = (event) => {
        this.setState({ wardrobe: event.target.value })
    }

    signup() {
        axios.post('api/set/settings', {
            email: this.state.email,
            age: this.state.age,
            ethnicity: this.state.ethnicity,
            hairColor: this.state.hairColor,
            style: this.state.style,
            wardrobe: this.state.wardrobe
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    InputValidation = (event) => {
        console.log(this.state);
        event.preventDefault();
        if (this.state.age == null || this.state.ethnicity == null || this.state.hairColor == null || this.state.style == null || this.state.wardrobe == null) {
            alert("Please fill out all fields before submitting.");
        } else {
            this.signup();
        }
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-2" />
                        <div className="col-md-8">
                            <h2>Let's Get to Know You</h2>
                            <p>Answer these 5 quick questions to construct your personalized shopping site.</p>
                            <br />
                            <form>
                                <div className="form-group row">
                                    <label for="question1" className="col-sm-6 col-form-label">How old are you?</label>
                                    <div className="col-sm-6">
                                        <select className="form-control" id="question1" onChange={this.handleAge}>
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
                                </div>

                                <div className="form-group row">
                                    <label for="question2" className="col-sm-6 col-form-label">What's your ethnicity?</label>
                                    <div className="col-sm-6">
                                        <select className="form-control" id="question2" onChange={this.handleEthnicity}>
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
                                </div>

                                <div className="form-group row">
                                    <label for="question3" className="col-sm-6 col-form-label">What's your hair color?</label>
                                    <div className="col-sm-6">
                                        <select className="form-control" id="question3" onChange={this.handleHairColor}>
                                            <option selected disabled hidden>Select an Option</option>
                                            <option>Blonde</option>
                                            <option>Red</option>
                                            <option>Brunette</option>
                                            <option>White</option>
                                            <option>Grey</option>
                                            <option>Black</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label for="question4" className="col-sm-6 col-form-label">What style do you like on others?</label>
                                    <div className="col-sm-6">
                                        <select className="form-control" id="question4" onChange={this.handleStyle}>
                                            <option selected disabled hidden>Select an Option</option>
                                            <option>Chic</option>
                                            <option>Tomboy</option>
                                            <option>Street</option>
                                            <option>Preppy</option>
                                            <option>Vintage</option>
                                            <option>Bohemian</option>
                                            <option>Sophisticated</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label for="question5" className="col-sm-6 col-form-label">What's your wardrobe like?</label>
                                    <div className="col-sm-6">
                                        <select className="form-control" id="question5" onChange={this.handleWardrobe}>
                                            <option selected disabled hidden>Select an Option</option>
                                            <option>Ecclectic</option>
                                            <option>Confused</option>
                                            <option>Cohesive</option>
                                        </select>
                                    </div>
                                </div>
                                <br />
                                <Link className="submit" to="/app"><button type="button" id="submitSettings" className="btn btn-dark" onClick={this.InputValidation}>Submit</button></Link>
                                <div className="col-md-2" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        );
    }

};

export default SettingsForm;
