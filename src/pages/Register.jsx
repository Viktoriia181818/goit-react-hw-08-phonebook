import { Heading } from '@chakra-ui/react';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';

export function Register() {
    return (
        <div>
            <Heading>
                <h1>Registration</h1>
            </Heading>
            <RegisterForm />
        </div>
        
    )
}