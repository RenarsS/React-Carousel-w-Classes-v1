import React from "react";
import {css, StyleSheet} from "aphrodite";
import SlideContext from "../context/SlideContext";

class Slider extends React.Component {
    constructor(props){
        super(props);
        this.state={ position: 0, enter: 0, press: false, base:0, width: 0};
        this.handlePress = this.handlePress.bind(this);
        this.handleMove = this.handleMove.bind(this);
        this.handleUp = this.handleUp.bind(this);
    }



    handlePress = event => {
        if (this.state.enter === 0){
            if (event?.clientX !== undefined){
                this.setState({enter: event.clientX, press: true});
            }
            else{
                this.setState({enter: event.touches[0].clientX, press: true});
            }
        } else{
            if (event?.clientX !== undefined) {
                this.setState({enter: event.clientX + -this.state.position, press: true});
            }
            else {
                this.setState({enter: event.touches[0]?.clientX + -this.state.position, press: true});
            }
        }
    }

    handleMove = event => {
        if (this.state.press) {
            if (event?.clientX !== undefined){
                this.setState({position: event.clientX - this.state.enter});
            }
            else {
                this.setState({position: event.touches[0].clientX - this.state.enter});
            }
        }
    }

    handleUp = () =>{
        const { positSlide } = this.context;
        const {children, slidesDisplay} = this.props;
        const {position, width} = this.state;

        this.setState({press: false});

        if(position <= 0 && Math.abs(Math.round(position/(width/slidesDisplay))) < children.length){
            positSlide(Math.abs(Math.round(position/(width/slidesDisplay))));
        }

    }

    componentDidMount() {
        const s = document.querySelector(".screen");
        this.setState({width: s.offsetWidth});
    }

    componentDidUpdate(prevProps, prevState) {

        const { positCount } = this.context;
        const { width} = this.state;
        const { children, slidesDisplay } = this.props;

        if(prevState.width !== width){
            this.setState({base: ((width * children.length)/slidesDisplay)});
            positCount(children.length);
        }

    }

    render(){

        const { currentSlide } = this.context;
        const { press, base, position, width } = this.state;
        const { children, slidesDisplay } = this.props;

        const translateKeyFrames = {
            'from': {
                transform: 'translateX('+position+'px)',
            },
            'to': {
                transform: 'translateX('+(-currentSlide*(width/slidesDisplay))+'px)'
            }
        };

        const style = StyleSheet.create({
            slider:{
                width: `${base}px`,
                height: '100%',
                position:'relative',
                transform: `translateX(${position}px)`,
                display:"flex",
                flexDirection: "row",
                userSelect:"none",
            },
           animation: {
                animationName:[translateKeyFrames],
                animationDuration: '0.5s',
            },
            slide: {
                width: (width/slidesDisplay) +'px',
            },
        });

        return(
            <div className={ css(style.slider,  !press ? style.animation : "") + " base" }
                 onMouseDown={this.handlePress}
                 onMouseMove={this.handleMove}
                 onMouseUp={this.handleUp}
                 onMouseLeave={() => this.setState({press: false})}
                 onTouchStart={this.handlePress}
                 onTouchMove={this.handleMove}
                 onTouchEnd={this.handleUp}
                 onAnimationEnd={() => {this.setState({position: -currentSlide*(width/this.props.slidesDisplay)})}}
            >
                {children.map(child => <div key={children.indexOf(child)} className={css(style.slide)}>{child}</div>)}
            </div>
        )
    }
}

Slider.contextType = SlideContext;
export default Slider;