import { useDispatch, useSelector } from 'react-redux';
import { delContact } from 'redux/contactinfo/operation';
import { getContacts, getFilter } from 'redux/contactinfo/selector';
import css from './ContactList.module.css';

const findContacts = (contacts, filter) => {
  if (!filter) {
    return contacts;
  } else {
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  }
};

export const ContactList = () => {
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);
    const findVisContacts = findContacts(contacts, filter);

    const dispatch = useDispatch();
    const handleDelete = id => dispatch(delContact(id));

    return (
          <>
    <div className={css.wraperContactList}>
      <ul className={css.contactList}>
        {findVisContacts.map((contact, id) => (
          <li key={id} className={css.contactListItem}>
            {contact.name}: {contact.phone}
            <button
              type="button"
              className={css.contactListItemBtn}
              onClick={() => handleDelete(contact.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
      </>
    )
}