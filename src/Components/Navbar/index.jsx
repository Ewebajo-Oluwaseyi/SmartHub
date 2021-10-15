import React, { useState, useContext } from 'react';
import { Wrapper, LeftNavbar, RightNavbar, Search, Drop, Profile, DropContent } from './Navbar';
import { DropdownButton, Dropdown } from 'react-bootstrap'
import { CgProfile } from "react-icons/cg";
import {AuthContext} from '../../store/AuthContext'

export default function Navbar() {
    const ctx = useContext(AuthContext);

    const [scroll, setScroll] = useState(false);

    const toggleNav = () => {
        if (window.scrollY >= 80) {
            setScroll(true);
        } else setScroll(false);
    };
    window.addEventListener("scroll", toggleNav);

   return (
       <Wrapper scroll={scroll}>
        <LeftNavbar scroll={scroll}>
            <h2>SmartHub</h2>
        </LeftNavbar>
        <Search>
            <input type="text" placeholder="Search for talent"  />
        </Search>
          <RightNavbar>
            <button onClick={ctx.signUp}>Join SmartHub</button>
            <button onClick={ctx.signIn}>Sign In</button>
          </RightNavbar>
        <Drop>
          <Profile>
            <DropdownButton id="dropdown-basic-button" title={<i><CgProfile /></i>}>
                <DropContent>
                  <div><Dropdown.Item onClick={ctx.signUp}>Join SmartHub</Dropdown.Item></div>
                  <div><Dropdown.Item onClick={ctx.signIn}>Sign In</Dropdown.Item></div>
                </DropContent>
            </DropdownButton>
            {/*<i className="fas fa-caret-down"></i>*/}
          </Profile>
          
        </Drop>
        
       </Wrapper>
   ) 
}