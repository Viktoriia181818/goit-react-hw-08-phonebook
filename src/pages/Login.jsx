import { Heading } from '@chakra-ui/react';
import { LoginForm } from 'components/LoginForm/LoginForm';
 
export function Login() {
    return (
        <div>
            <Heading>
                <title>Login</title>
            </Heading>
            <LoginForm />
        </div>
    )
}
