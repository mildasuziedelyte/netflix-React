import React, { useState } from 'react'; 
import { FooterContainer } from '../containers/footer';
import { HeaderContainer } from '../containers/header';
import { Form } from '../components';


export default function Signin() {
    const [emailAdress, setEmailAdress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError ] = useState('');

    const isInvalid = password === '' || emailAdress === '' ;
    const handleSignIn = (event) => {
        event.preventDefault();
        // firebase work here
    }

    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign In</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}
                    <Form.Base onSubmit={handleSignIn} method="POST">
                        <Form.Input 
                            placeholder='Email adress' 
                            type='text' 
                            value={emailAdress}
                            onChange={({target}) =>setEmailAdress(target.value)}>
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
                                Sign In
                        </Form.Submit>
                    </Form.Base>
                    <Form.Text>New to Netflix? <Form.Link to="/signup">Sign up now.</Form.Link></Form.Text>
                    <Form.TextSmall>This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.</Form.TextSmall>
                </Form>


            </HeaderContainer>
            <FooterContainer></FooterContainer>
        </>
    );
}