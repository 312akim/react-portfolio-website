import { Link } from 'react-scroll';
import { StyledAnimatedUnderline, StyledReactScrollLinkContainer, StyledReactScrollLinkWrapper, StyledIconTextWrapper, StyledHomeLinkContainer, StyledHomeLinkIconTextContainer } from './ReactScrollComponentStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const ReactScrollLink = ({id, title, faIcon, delay = 0, underline = true}) => {
    return (
        <StyledReactScrollLinkWrapper>
            <StyledReactScrollLinkContainer>
                <a>
                    <Link activeClass="active" to={id} spy={true} smooth={true} duration={400} delay={delay}>
                        <StyledIconTextWrapper>
                            <FontAwesomeIcon icon={faIcon} size="2x" />
                            <div>
                                {title}
                                <StyledAnimatedUnderline underline={underline}/>
                            </div>
                        </StyledIconTextWrapper>
                    </Link>
                </a>
            </StyledReactScrollLinkContainer>
        </StyledReactScrollLinkWrapper>
    )
};

export const ReactScrollHomeLink = ({id, title, faIcon, delay = 0}) => {
    return (
        <StyledHomeLinkContainer>
            <Link activeClass="active" to={id} spy={true} smooth={true} duration={400} delay={delay}>
                <StyledHomeLinkIconTextContainer>
                    <FontAwesomeIcon icon={faIcon} size="2x" />
                    <div>
                        {title}
                    </div>
                </StyledHomeLinkIconTextContainer>
            </Link>
        </StyledHomeLinkContainer>
    )
}