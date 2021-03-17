import React, { useState, useContext } from 'react'; 
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase';
import { FooterContainer } from '../containers/footer';
import { HeaderContainer } from '../containers/header';
import { Form } from '../components';
import * as ROUTES from '../constants/routes'

export default function Signup() {
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);
    const [firstName, setFirstName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError ] = useState('');

    const isInvalid = firstName === '' || password === '' || emailAddress === '' ;

    const handleSignUp = (event) => {
        event.preventDefault();

        //firebase
    }

    return (
        <>
        <HeaderContainer>
            <Form>
                <Form.Title>Sign Up</Form.Title>
                {error && <Form.Error>{error}</Form.Error>}
                <Form.Base onSubmit={handleSignUp} method="POST">
                    <Form.Input 
                        placeholder='First Name' 
                        type='text' 
                        value={firstName}
                        onChange={({target}) =>setFirstName(target.value)}>
                    </Form.Input>
                    <Form.Input 
                        placeholder='Email adress' 
                        type='text' 
                        value={emailAddress}
                        onChange={({target}) =>setEmailAddress(target.value)}>
                    </Form.Input>
                    <Form.Input
                        placeholder='Password' 
                        type='password'
                        autoComplete="off"
                        value={password}
                        onChange={({target}) =>setPassword(target.value)}>
                    </Form.Input>
                    <Form.Submit 
                        disabled={isInvalid} 
                        type='submit'>
                            Sign Up
                    </Form.Submit>
                </Form.Base>
                <Form.Text>Already a user? <Form.Link to="/signin">Sign in now.</Form.Link></Form.Text>
                <Form.TextSmall>This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.</Form.TextSmall>
            </Form>


        </HeaderContainer>
        <FooterContainer></FooterContainer>
    </>

    );
}