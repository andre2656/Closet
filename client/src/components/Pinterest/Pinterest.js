import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "./Grid";

// Exporting both RecipeList and RecipeListItem from this file

// PinterestList renders a bootstrap list item
export function PinterestList({ children }) {
    return <ul className="list-group">{children}</ul>;
}


var params = {
    fields: 'id,note,link,image'
};

var pins = [];
PDK.request('/boards/<board_id>/pins/', function (response) { // Make sure to change the board_id
    if (!response || response.error) {
        alert('Error occurred');
    } else {
        pins = pins.concat(response.data);
        console.log(response.data)
        if (response.hasNext) {
            response.next(); // this will recursively go to this same callback
        }
    }
});

// PinterestListItem renders a bootstrap list item containing data from the recipe api call
export function PinterestListItem(props) {
    return (
        <li className="list-group-item">
            <Container>
                <Row>
                    <Col size="xs-4 sm-2">
                        <Thumbnail src={props.thumbnail} />
                    </Col>
                    <Col size="xs-8 sm-9">
                        <h3>{props.title}</h3>
                        <p>
                            {props.ingredients}
                        </p>
                        <a
                            rel="noreferrer noopener"
                            target="_blank"
                            href={props.href}
                        >
                            Go to recipe!
            </a>
                    </Col>
                </Row>
            </Container>
        </li>
    );
}