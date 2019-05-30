import React from 'react';
import $ from 'jquery'
import './StyleRecognition.css'

class StyleRecognition extends React.Component {
    state = {
        data: {},
        img: 'https://www.davidjones.com/images/assetimages/blog/Happening/Denim-street-style-trend-hero.jpg'
    };
    // componentDidMount (){
    //     console.log('call once')
    //     // this.callOnce()
    // }
    // callOnce = () => {
    //     if ($('#pictures').val() === 'empty') {
    //         // this.getImages();
    //     }
    // }   
    // componentWillReceiveProps = (props) => {
    //     this.CheckImg(props.img)
    // }
      
//     CheckImg = (img) => {
//         if (this.state.img !== img){
//             this.setState({ img: img},
//                 () => {
//                     if (this.state.img) {
//                         // this.getImages();
//                     }
//                     else {
//                         console.log('no img')
//                     }
//                 })
//         }else{
//             console.log('Same Img')
//         }
//     }

//     componentDidMount = () => {
//         this.setState({ img: this.props.img });
//         // this.getImages();
//     };
    render() {
        return (
          <div>

          </div> 
        );
    }
};
export default StyleRecognition;
