import { Link } from 'react-scroll';
import { ReactScrollLinkWrapper } from './ReactScrollComponentStyles';

export const ReactScrollLink = ({id, title, delay = 0}) => {
    return (
        <ReactScrollLinkWrapper>
            <a>
                <Link activeClass="active" to={id} spy={true} smooth={true} duration={400} delay={delay}>
                    {title}
                </Link>
            </a>
        </ReactScrollLinkWrapper>
    )
};