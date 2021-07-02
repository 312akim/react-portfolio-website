import { Link } from 'react-scroll';
import { StyledAnimatedUnderline, StyledReactScrollLinkContainer, StyledReactScrollLinkWrapper, StyledIconTextWrapper } from './ReactScrollComponentStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const ReactScrollLink = ({id, title, faIcon, delay = 0}) => {
    return (
        <StyledReactScrollLinkWrapper>
            <StyledReactScrollLinkContainer>
                <a>
                    <Link activeClass="active" to={id} spy={true} smooth={true} duration={400} delay={delay}>
                        <StyledIconTextWrapper>
                            <FontAwesomeIcon icon={faIcon} size="2x" />
                            <div>
                                {title}
                                <StyledAnimatedUnderline/>
                            </div>
                        </StyledIconTextWrapper>
                    </Link>
                </a>
            </StyledReactScrollLinkContainer>
        </StyledReactScrollLinkWrapper>
    )
};