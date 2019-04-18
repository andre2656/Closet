// import axios from 'axios';
import React from 'react';
// import API from "../../../utils/API";
import $ from 'jquery'
import './StyleRecognition.css'

class StyleRecognition extends React.Component {
    state = {
        data: [],
        img: null
    };

    componentWillReceiveProps = (props) => {
        console.log('receiving props')
        console.log(props.img) //this will get whenever state changes after initial render
        this.setState({img: props.img},
            () => {
                this.getImages();
            })
        
    }
        
        getImages = () => {
            $(() => {
                var params = {
                    // Request parameters
                    "image": this.state.img,
                    // "gender": "Female",
                    "limit": "5",
                };

                $.ajax({
                    url: "https://api.mirrorthatlook.com/v2/mirrorthatlook?" + $.param(params),
                    beforeSend: function (xhrObj) {
                        // Request headers
                        xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "");
                        xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "0a37d052f5a240829ef1d12f5f06e6ec");
                    },
                    type: "GET",
                    // Request body
                    data: "{body}",
                })
                    .done(function (data) {
                        // alert("success");
                        console.log(data)
                                $('#pictures').empty()
                        for (let t = 0; t < data.result.length; t++) {
                            for (let i = 0; i < data.result[t].products.length; i++) {
                                let div = $('<div>');

                                let img = $('<img>');
                                let brandName = $('<p>');
                                let directUrl = $('<a>');


                                brandName.append(data.result[t].products[i].retailer.name);
                                directUrl.attr('href', data.result[t].products[i].direct_url);
                                directUrl.append(brandName)
                                img.attr('src', data.result[t].products[i].image);
                                directUrl.addClass('directUrl')
                                img.addClass('retunedImages');
                                div.append(directUrl);
                                div.append(img);
                                div.addClass('divStyles');
                                div.addClass('col-md-4')
                                // div.addClass('col-md-12')

                                $('#pictures').append(div);

                            }
                        }



                    })
                    .fail(function () {
                        alert("error");
                    });
            });
        }


    componentDidMount = () => {
        // API.getStyles('https://cdn.shopify.com/s/files/1/0033/7939/6672/products/product_906861_royal-blue-jacquar_1_400x.jpg?v=1554340311')
        //     .then(res => console.log( res))
        //     .catch(err => console.log(err));
        this.setState({img: this.props.img});
        
        this.getImages();

        
    };
    render() {
        return (
        <div id= 'pictures' className= 'col-md-12'>

        </div>
            );
        }
};
export default StyleRecognition;