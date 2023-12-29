import './Contacts.css';
import { nanoid } from 'nanoid';

const Contacts = ({ contactsList, onDelete }) => {
  console.log('🚀 ~ contactsList:', contactsList);

  return (
    <ul>
      {contactsList.map(contact => {
        console.log('🚀 ~ contact:', contact);
        return (
          <li key={nanoid()}>
            {contact.name} - {contact.number}
            <button className="deleteBtn" onClick={onDelete} id={contact.name}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Contacts;
