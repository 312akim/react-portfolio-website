import { Link } from 'react-scroll';

export const ReactScrollLink = ({id, title, delay = 0}) => {
    return (
        <li>
            <a>
                <Link activeClass="active" to={id} spy={true} smooth={true} duration={400} delay={delay}>
                    {title}
                </Link>
            </a>
        </li>
    )
};