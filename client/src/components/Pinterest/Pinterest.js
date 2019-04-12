import React from "react";


export default class PinterestListItem extends React.Component {
    state = {
        board: ''
    }
    render() {
        return (
            <div>
                <a data-pin-do="embedBoard" data-pin-board-width="auto" data-pin-scale-height="800" data-pin-scale-width="60" href="https://www.pinterest.com/writerella/project3-w-fashion/"> </a>
            </div >

        );
    }
}