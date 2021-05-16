import { Link } from 'react-scroll';
import { StyledAnimatedUnderline, StyledReactScrollIconLinkWrapper, StyledReactScrollLinkContainer, StyledReactScrollLinkWrapper, StyledReactScrollIconLinkContainer } from './ReactScrollComponentStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const ReactScrollLink = ({id, title, faIcon, delay = 0}) => {
    return (
        <StyledReactScrollLinkWrapper>
            <StyledReactScrollLinkContainer>
                <a>
                    <Link activeClass="active" to={id} spy={true} smooth={true} duration={400} delay={delay}>
                        <StyledAnimatedUnderline/>
                        <div>
                            <FontAwesomeIcon icon={faIcon} size="2x" />
                        </div>
                        {title}
                    </Link>
                </a>
            </StyledReactScrollLinkContainer>
        </StyledReactScrollLinkWrapper>
    )
};