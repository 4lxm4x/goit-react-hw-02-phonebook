import './Contacts.css';
import { nanoid } from 'nanoid';

const Contacts = ({ contactsList, onDelete }) => {
  return (
    <ul>
      {contactsList.map(contact => {
        return (
          <li key={nanoid()}>
            {contact.name}: {contact.number}
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
