import React from "react";
import {css, StyleSheet} from "aphrodite";
import SlideContext from "../context/SlideContext";

class Screen extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const style = StyleSheet.create({
            screen: {
                width:'100%',
                height: "100%",
                overflow:'hidden',
            }
        });

        return(
            <>
                <div className={css(style.screen) + " screen"}>
                    {this.props.children}
                </div>
            </>
        );
    }
}

Screen.contextType = SlideContext;
export default Screen;