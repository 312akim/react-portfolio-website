import { Link } from 'react-scroll';
import { StyledAnimatedUnderline, StyledReactScrollLinkContainer, StyledReactScrollLinkWrapper, StyledIconTextWrapper, StyledHomeLinkContainer, StyledHomeLinkIconTextContainer } from './ReactScrollComponentStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


interface ReactScrollLinkProps {
    id: string,
    title: string,
    faIcon?: any,
    delay?: number,
    underline?: boolean,
    marginBottom?: string
}

export const ReactScrollLink = ({id, title, faIcon, delay = 0, underline = true, marginBottom = '4vh'}: ReactScrollLinkProps) => {
    return (
        <StyledReactScrollLinkWrapper>
            <StyledReactScrollLinkContainer marginBottom={marginBottom}>
                <Link activeClass="active" to={id} spy={true} smooth={true} duration={400} delay={delay}>
                    <StyledIconTextWrapper>
                        <FontAwesomeIcon icon={faIcon} size="2x" />
                        <div>
                            {title}
                            <StyledAnimatedUnderline underline={underline}/>
                        </div>
                    </StyledIconTextWrapper>
                </Link>
            </StyledReactScrollLinkContainer>
        </StyledReactScrollLinkWrapper>
    )
};

interface ReactScrollHomeLinkProps {
    id: string,
    title: string,
    faIcon: any,
    delay?: number
}

export const ReactScrollHomeLink = ({id, title, faIcon, delay = 0}: ReactScrollHomeLinkProps) => {
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