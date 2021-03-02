import React, {useState} from 'react'
import { Form } from '../components'
import {HeaderContainer} from '../containers/header'
import {FooterContainer} from '../containers/footer'
import * as ROUTES from '../constants/routes'

export default function SignUp() {
    const [firstName, setFirstName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('')
    const [error, setError] = useState('');

    const isInvalid = firstName === '' || password === '' || emailAddress === '';

    const handleSignUp = (e) => {
        e.preventDefault();
    }


    return(
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign Up</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}

                        <Form.Base onSubmit={handleSignUp} method='POST'>
                            <Form.Input
                                placeholder="First Name"
                                value={firstName}
                                onChange={({target}) => setFirstName(target.value)}
                            />
                            <Form.Input
                                placeholder="Email Address"
                                value={emailAddress}
                                onChange={({target}) => setEmailAddress(target.value)}
                            />
                            <Form.Input
                                type="password"
                                value={password}
                                autoComplete = "off"
                                placeholder="Password"
                                onChange={({target}) => setPassword(target.value)}
                            />
                            <Form.Submit disabled={isInvalid} type="submit">
                                Sign Up
                            </Form.Submit>

                            <Form.Text>
                                Have an account? <Form.Link to="/signin">Sign in now.</Form.Link>
                            </Form.Text>

                            <Form.TextSmall>
                                This page is protected by Google reCAPTCHA.
                            </Form.TextSmall>
                        </Form.Base>
                </Form>
            </HeaderContainer>

            <FooterContainer/>
        </>
    )
}