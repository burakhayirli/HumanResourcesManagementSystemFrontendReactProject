import React, {useState} from 'react';
import { Button, Container, Dropdown, Menu } from 'semantic-ui-react';
import CartSummary from './CartSummary';
import SignedIn from './SignedIn';
import SignedOut from './SignedOut';
import { NavLink, useHistory } from 'react-router-dom';
import EmployerList from '../pages/EmployerList';

export default function Navi() {

    const [isAuthenticated, setIsAuthenticated] = useState(true)
    const history = useHistory()

    function handleSignOut(params) {
        setIsAuthenticated(false)
        history.push("/")
    }

    function handleSignIn(params) {
        setIsAuthenticated(true)
    }

    return (
        <div>
            <Menu inverted fixed="top">
                <Container>
                    <Menu.Item as={NavLink} to="/" name='Ana Sayfa' />
                    <Menu.Item  as={NavLink} to="/employers" name='İş Verenler'/>
                    <Menu.Item  as={NavLink} to="/candidates" name='Adaylar'/>
                    

                    <Menu.Menu position='right'>
                        <CartSummary />

                        {isAuthenticated
                            ? <SignedIn signOut={handleSignOut} />
                            : <SignedOut signIn={handleSignIn} />}

                    </Menu.Menu>
                </Container>
            </Menu>
        </div>
    )
}
