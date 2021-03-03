import React, {useState, useContext} from 'react'
import {useHistory} from 'react-router-dom'
import { FirebaseContext } from '../context/firebase'
import { Form } from '../components'
import {HeaderContainer} from '../containers/header'
import {FooterContainer} from '../containers/footer'
import * as ROUTES from '../constants/routes'


export default function SignUp() {
    const history = useHistory();
    const {firebase} = useContext(FirebaseContext);

    const [firstName, setFirstName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('')
    const [error, setError] = useState('');

    const isInvalid = firstName === '' || password === '' || emailAddress === '';

    const handleSignUp = (e) => {
        e.preventDefault();

        firebase
            .auth()
            .createUserWithEmailAndPassword(emailAddress, password)
            .then((result) => 
                result.user
                .updateProfile({
                    displayName: firstName,
                    photoURL: Math.floor(Math.random() * 5) + 1,
                })
                .then(()=> {
                    setEmailAddress('');
                    setPassword('');
                    setError('');
                    history.push(ROUTES.HOME)
                })
            ).catch((error)=> setError(error.Message))
    };

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
                                Already a user? <Form.Link to="/signin">Sign in now.</Form.Link>
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