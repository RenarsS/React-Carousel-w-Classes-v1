import React from "react";
import { StyleSheet, css } from "aphrodite";
import SlideContext from "../context/SlideContext";

class Indicator extends React.Component{
    render(){
        const { currentSlide, slidesCount, positSlide } = this.context;

        const style = StyleSheet.create({
            indicatorBox:{
                width: "100%",
                justifyContent:"center",
                display:"flex",
                flexDirection:"row",
            },
            indicator: {
                width:"5px",
                height:"5px",
                backgroundColor:"white",
                border: "#757C95 solid 1px",
                borderRadius:"100%",
                margin:"4px",
            },
            currentIndicator: {
                backgroundColor:"#595E73",

            }
        });

        let indicators = [];

        if (slidesCount !== 0){

            for (let i = 0; i < slidesCount; i++){
                indicators.push(<div key={i} className={css(style.indicator, i === currentSlide ? style.currentIndicator : "")} onClick={()=>positSlide(i)}/>);
            }

            return(
                <div className={css(style.indicatorBox)}>
                    {indicators}
                </div>
            )
        }else{
            return <></>;
        }
    }
}

Indicator.contextType = SlideContext;
export default Indicator;