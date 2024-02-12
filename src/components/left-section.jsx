import * as React from "react";
import './left-section.scss';
import SocialNavigation from "./social-navigation";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPhoneVolume, faEnvelope} from '@fortawesome/free-solid-svg-icons';

const LeftSection = (props) => {
    return (<section className="my-description">
        <div>
            <h1 className="my-description__heading">
                    <span className="my-description__after-heading">
                        {props.Leftcontent.headerGroup.headerTop}
                    </span>
                {props.Leftcontent.headerGroup.headerCenter}
                <span className="my-description__heading-colors-name">
                           {props.Leftcontent.headerGroup.headerColor}
                    </span>
            </h1>
        </div>
        <span className="my-description__job">
                {props.Leftcontent.subHeader}
            </span>
        <div className="text">
                <span>
                    {props.Leftcontent.content}
                </span>
        </div>
        <div className="contakt">
            <h2 className="contakt__heading">Dane Konaktowe:</h2>
            <div className="wrap-columns">
                {props.Leftcontent.contaktDetaild.map((item, index) => (
                    <a key={index} className="contakt__box text" href={item.contakt.includes('@') ? `mailto:${item.contakt}` : item.contakt.includes('+') ? `tel:${item.contakt}` : '#'} aria-label={item.textAlternative}>
                        <span className="contakt__icons-box">
                            {item.contakt.includes('@') ? <FontAwesomeIcon icon={faEnvelope}/>  : item.contakt.includes('+') ?  <FontAwesomeIcon icon={faPhoneVolume}/> : ''}
                        </span>
                        <span className="contakt__text">{item.contakt}</span>
                    </a>
                ))}
            </div>
            <SocialNavigation/>
        </div>
    </section>)
}


export default LeftSection