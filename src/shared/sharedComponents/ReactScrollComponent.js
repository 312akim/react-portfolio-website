import { Link } from 'react-scroll';
import { StyledAnimatedUnderline, StyledReactScrollLinkContainer, StyledReactScrollLinkWrapper } from './ReactScrollComponentStyles';

export const ReactScrollLink = ({id, title, delay = 0}) => {
    return (
        <StyledReactScrollLinkWrapper>
            <StyledReactScrollLinkContainer>
                <a>
                    <Link activeClass="active" to={id} spy={true} smooth={true} duration={400} delay={delay}>
                        <StyledAnimatedUnderline/>
                        {title}
                    </Link>
                </a>
            </StyledReactScrollLinkContainer>
        </StyledReactScrollLinkWrapper>
    )
};