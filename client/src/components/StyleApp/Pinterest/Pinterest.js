import React from "react";


export default class PinterestListItem extends React.Component {
    state = {
        board: 'project3-w-fashion/',
        data: ''
    }

    componentDidMount() {
        if (!window.doBuild) {
            this.preloadWidgetScript();
        } else {
            window.doBuild();
        }
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