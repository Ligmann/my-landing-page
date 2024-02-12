import * as React from "react";
import './social-navigation.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faCodepen, faLinkedin,faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faBlog } from '@fortawesome/free-solid-svg-icons';

const SocialNavigation = (props) => {
    return (
        <div className="socjal-media__social-media-container">
            <div className="socjal-media__social-media-box">
                {media.map((link) => {
                    return (
                        <a className="socjal-media__social-media-wraper-icon" href={link.url} aria-label={link.aria} target="noopener">
                            <FontAwesomeIcon icon={link.iconComponent}/>
                        </a>
                    )
                })}
            </div>
        </div>
    );
};

const media = [
    {
        url: 'https://github.com/Ligmann',
        iconComponent: faGithub,
        aria: 'Repozytorium kodu',
    },
    {
        url: 'https://codepen.io/ligmann/',
        iconComponent: faCodepen,
        aria: 'Projekty front end',
    },
    {
        url: 'https://www.linkedin.com/in/damian-ligmann-b91a4214a/',
        iconComponent: faLinkedin,
        aria: 'Portfolio Damian Ligmann',
    },
    {
        url: 'https://www.instagram.com/dligmann',
        iconComponent: faInstagram,
        aria: 'Instagram Damian Ligmann',
    },
    {
        url: 'https://nerdlife.pl/',
        iconComponent: faBlog,
        aria: '"Blog autora Damian Ligmann',
    },
];

export default SocialNavigation;