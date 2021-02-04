import { Link } from 'react-scroll';

export const ReactScrollLink = ({id, title}) => {
    return (
        <li>
            <a>
                <Link activeClass="active" to={id} spy={true} smooth={true} duration={400}>
                    {title}
                </Link>
            </a>
        </li>
    )
};