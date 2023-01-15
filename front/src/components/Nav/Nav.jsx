import {
    Navbar,
    Typography,
} from "@material-tailwind/react";
import './Nav.css';
import { ReactComponent as Rocket } from './rocketship.svg';
import { name } from '../../consts';

export default function Nav() {
    return (
        <Navbar className="max-w-screen-xl py-1 lg:py-2 flex flex-row mt-5">
            <Rocket className="rocket"/>
            <Typography
                as="a"
                href="#"
                className="title tracking-wide drop-shadow-2xl cursor-pointer pt-8 font-extrabold">
                <span>{name}</span>
            </Typography>
        </Navbar>
    );
}
