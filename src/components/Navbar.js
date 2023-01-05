import {Link} from 'react-router-dom';
import '../App.css'
import logo from '../assets/logo.svg';
import styled from 'styled-components';
import {ButtonContainer} from './Button';
import { Component } from 'react';



class Navbar extends Component{
    render(){
        return (
            <NavWrapper className='navbar navbar-expand-ml navbar-dark px-sm-5 p-3 '>
                <Link to='/'>
                    <img src={logo} alt='store' className='navbar-brand'/>
                </Link>
                <ul className='navbar-nav align-items-center'>
                    <li className='nav-item ml-5'>
                        <Link to='/' className='nav-link'>
                            Products
                        </Link>
                    </li>
                </ul>
                <Link to='/Cart' className='ml-auto'>
                    <ButtonContainer >
                        <span className='mr-2' >
                            <i class='fas fa-cart-plus'></i>
                        </span>
                        my cart
                    </ButtonContainer>
                </Link>
            </NavWrapper>
        );
    }
    
}

const NavWrapper=styled.nav`

    background:var(--mainBlue);
    .nav-link{
        color:var(--mainWhite) !important;
        font-size:1.3rem;
        text-transform:capitalize;
    }
`;

export default Navbar;