import * as React from "react";
import './right-section.scss';
import SocialNavigation from "./social-navigation";

const RightSection = (props) => {
    return (
        <section className="right-section">
            <img className="right-section__image" src={props.image.sourceUrl} alt={props.image.altText}/>
            <SocialNavigation />
        </section>
    );
};

export default RightSection;