import { Link } from 'react-scroll';
import { StyledAnimatedUnderline, StyledReactScrollIconLinkWrapper, StyledReactScrollLinkContainer, StyledReactScrollLinkWrapper, StyledReactScrollIconLinkContainer, StyledIconTextWrapper } from './ReactScrollComponentStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const ReactScrollLink = ({id, title, faIcon, delay = 0}) => {
    return (
        <StyledReactScrollLinkWrapper>
            <StyledReactScrollLinkContainer>
                <a>
                    <Link activeClass="active" to={id} spy={true} smooth={true} duration={400} delay={delay}>
                        <StyledAnimatedUnderline/>
                        <StyledIconTextWrapper>
                            <FontAwesomeIcon icon={faIcon} size="2x" />
                            <div>
                                {title}
                            </div>
                        </StyledIconTextWrapper>
                    </Link>
                </a>
            </StyledReactScrollLinkContainer>
        </StyledReactScrollLinkWrapper>
    )
};