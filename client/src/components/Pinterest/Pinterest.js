import React from "react";
import { Container, Row, Col } from "./Grid";
import Axios from "axios";




// let PDK = require('node-pinterest');
// var pinterest = PDK.init({
//     appId: "5024274572904540720", // Change this
//     cookie: true
// });
// pinterest.api('me').then(console.log);
// var options = {
//     qs: {
//         fields: "id,first_name",
//         limit: 10
//     }
// };
// pinterest.api('me/pins', options).then(console.log);


// pinterest.api('me/following/users').then(function (json) {
//     console.log(json);
//     if (json.page) {
//         pinterest.api(json.page.next).then(console.log);
//     }
// });


// window.pAsyncInit = function () {
//     PDK.init();
// };

// (function (d, s, id) {
//     var js, pjs = d.getElementsByTagName(s)[0];
//     if (d.getElementById(id)) { return; }
//     js = d.createElement(s); js.id = id;
//     js.src = "//assets.pinterest.com/sdk/sdk.js";
//     pjs.parentNode.insertBefore(js, pjs);
// }(document, 'script', 'pinterest-jssdk'));


// var params = {
//     fields: 'id,note,link,image'
// };

// var pins = [];
// PDK.request(params.fields, function (response) { // Make sure to change the board_id
//     if (!response || response.error) {
//         alert('Error occurred');
//     } else {
//         pins = pins.concat(response.data);
//         console.log(response.data)
//         if (response.hasNext) {
//             response.next(); // this will recursively go to this same callback
//         }
//     }
// });
// PinterestList renders a bootstrap list item
export function PinterestList({ children }) {
    return <ul className="list-group">{children}</ul>;
}

// PinterestListItem renders a bootstrap list item containing data from the recipe api call
export default class PinterestListItem extends React.Component {

    componentDidMount() {
        Axios.get('https://cors-anywhere.herokuapp.com/https://www.pinterest.com/writerella/feed.rss')
            .then(res => {
                console.log(res)
                // res.json()
            })
            .then(
                (result) => {
                    console.log(result)
                });
    }

    render() {
        return (
            <div>
                <li className="list-group-item">
                    <Container>
                        <Row>
                            <Col size="xs-4 sm-2">
                            </Col>
                            <Col size="xs-8 sm-9">
                                {/* <h3>{props.title}</h3> */}
                                <p>
                                    {/* {pins} */}
                                </p>
                                <a
                                    rel="noreferrer noopener"
                                    target="_blank"
                                // href={props.href}
                                >
                                    Go to recipe!
                                 </a>
                            </Col>
                        </Row>
                    </Container>
                </li>
            </div >

        );
    }
}