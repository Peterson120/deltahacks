import {
    Navbar,
    Typography,
} from "@material-tailwind/react";
import './Nav.css';
import { ReactComponent as Rocket } from './rocketship.svg';
import { name } from '../../consts';

export default function Nav() {
    return (
        <Navbar className="self-start pl-40 max-w-screen-xl py-2 lg:py-4 flex flex-row items-center">
            <Rocket/>
            <Typography
                as="h3"
                href="#"
                className="ml-3 title tracking-wide drop-shadow-2xl mr-4 cursor-pointer py-2 font-extrabold">
                <span>{name}</span>
            </Typography>
        </Navbar>
    );
}
