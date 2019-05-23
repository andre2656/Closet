import React from 'react';
import $ from 'jquery'
import './StyleRecognition.css'

class StyleRecognition extends React.Component {
    state = {
        data: [],
        img: null
    };
    componentWillReceiveProps = (props) => {
        this.setState({ img: props.img },
            () => {
                this.getImages();
            })
    }
    getImages = () => {
        $(() => {
            var params = {
                "image": this.state.img,
                // "gender": "Female",
                "limit": "5",
            };
            $.ajax({
                url: "https://api.mirrorthatlook.com/v2/mirrorthatlook?" + $.param(params),
                beforeSend: function (xhrObj) {
                    xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", '');
                    xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", 'ee49e91b55354cd2a1f10f49bc6e1d3b');
                },
                type: "GET",
                data: "{body}",
            })
                .done(function (data) {
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
                            $('#pictures').append(div);
                        }
                    }
                })
                .fail(function () {
                    console.log("error");
                });
        });
    }
    componentDidMount = () => {
        this.setState({ img: this.props.img });
        // this.getImages();
    };
    render() {
        return (
            <div id='pictures' className='col-md-12'></div>
        );
    }
};
export default StyleRecognition;
