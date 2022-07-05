import { Box, Button, FormControl, FormErrorMessage, FormLabel, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/authContext";
import theme from "../theme";

export const LogInForm = ( {setAccountCreated} ) => {

    const { logIn, emailError, passwordError }= useAuth()
    const navigate = useNavigate()

    const [logInemail, setLogInEmail] = useState("");
    const [logInpassword, setLogInPassword] = useState("");

    const handleEmail = (e) => {
        setLogInEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setLogInPassword(e.target.value)
    }

    const verifyLogIn = async() => {
        await logIn(logInemail, logInpassword)
        navigate('/home')
    }

    const wrongEmail = emailError ? <FormErrorMessage>Minimum eight characters, at least one upper case letter and one number</FormErrorMessage> : null
    const wrongPassword = passwordError ? <FormErrorMessage>Your Email is invalid</FormErrorMessage> : null

    return (
        <>
            <Box>
                <Text color='rgba(0, 0, 0, 0.9)' fontSize='28px' fontWeight='600' textAlign='center' mb='0'>¡Hola! Ingresá tu teléfono, e‑mail o usuario</Text>
            </Box>
            <Box mt='2em'>
                <FormControl variant="floating" id="email" mt='2em' width='100%'>
                    <Input
                        value={logInemail}
                        type="email"
                        onChange={handleEmail}
                        border="1px solid grey"
                        _focus={{ border: `2px solid ${theme.colors.blue}` }}
                        isInvalid={emailError}
                        borderRadius='.375rem'
                        placeholder=" "
                        maxW='260px'
                        borderColor='#bebebe'
                    />
                    {/* It is important that the Label comes after the Control due to css selectors */}
                    <FormLabel htmlFor='email'>Email</FormLabel>
                    {wrongPassword}
                </FormControl>

                <FormControl variant="floating" id="password" mt='2em'>
                    <Input
                        value={logInpassword}
                        type='password'
                        onChange={handlePassword}
                        border="1px solid grey"
                        _focus={{ border: `2px solid ${theme.colors.blue}` }}
                        isInvalid={passwordError}
                        borderRadius='.375rem'
                        placeholder=" "
                        maxW='260px'
                        borderColor='#bebebe'
                    />
                    {/* It is important that the Label comes after the Control due to css selectors */}
                    <FormLabel htmlFor='password'>Clave</FormLabel>
                    {wrongEmail}
                </FormControl>
            </Box>
            <Link to='/forgot-password'>
                <Text textAlign='center' color={theme.colors.blue}>¿Olvidaste tu contraseña?</Text>
            </Link>
            <Box mt='1.5em' textAlign='center'>
                <Button onClick={verifyLogIn} type="submit" className="btn-submit btn-azul" aria-disabled="false" h='48px' w='250px'>Ingresar</Button>
            </Box>
            {/* <Box mt='1em' textAlign='center'>
                <Button onClick={() => Navigate("/home")} className="btn-submit btn-azulaseo" aria-disabled="false" h='48px' w='250px'>Ingresar como invitado</Button>
            </Box> */}
            <Box mt='1em' textAlign='center'>
                <Button onClick={() => setAccountCreated(true)} type="submit" className="btn-submit btn-azulaseo" aria-disabled="false" h='48px' w='250px'>Crear cuenta</Button>
            </Box>
        </>
    )
}

