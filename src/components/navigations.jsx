import React from 'react';
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    IconButton,
    Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Navigations = () => {
    return (
        <div className="navigations">
            <Menu>
                <MenuHandler>
                    <IconButton>
                        <i className="fas fa-bars" />
                    </IconButton>
                </MenuHandler>
                <MenuList className="flex flex-col gap-2">
                    <MenuItem className="flex items-center gap-4 py-2 pr-8 pl-2">
                        <i className="fa-solid fa-house"></i>
                        <Link to="/portfolio">
                            <Typography variant="small" className="font-normal">
                                Home
                            </Typography>
                        </Link>
                    </MenuItem>
                    <MenuItem className="flex items-center gap-4 py-2 pr-8 pl-2">
                        <i className="fa-solid fa-user"></i>
                        <Link to="/portfolio/about-me">
                            <Typography variant="small" className="font-normal">
                                About Me
                            </Typography>
                        </Link>
                    </MenuItem>
                    <MenuItem className="flex items-center gap-4 py-2 pr-8 pl-2">
                        <i className="fa-solid fa-suitcase"></i>
                        <Link to="/portfolio/portfolio">
                            <Typography variant="small" className="font-normal">
                                Portfolio
                            </Typography>
                        </Link>
                    </MenuItem>
                    <MenuItem className="flex items-center gap-4 py-2 pr-8 pl-2">
                        <i className="fa-solid fa-address-book"></i>
                        <Link to="/portfolio/contact">
                            <Typography variant="small" className="font-normal">
                                Contact
                            </Typography>
                        </Link>
                    </MenuItem>
                </MenuList>
            </Menu>
        </div>
    );
}

export default Navigations