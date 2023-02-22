import { Heading } from '@chakra-ui/react';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contactinfo/operation';
import { getIsLoading } from 'redux/contactinfo/selector';

export function Contacts() {
    const dispatch = useDispatch();
    const isLoading = useSelector(getIsLoading);

    useEffect(() => {
        dispatch(fetchContacts());

    }, [dispatch]);

    return (
        <>
            <Heading><h1>Phonebook</h1></Heading>
            <ContactForm />
            <div>{isLoading && 'Procces..'}</div>
            <Filter />
            <ContactList />
        </>
    )
    
}