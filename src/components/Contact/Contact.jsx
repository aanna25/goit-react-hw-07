import { FaUser, FaPhone } from "react-icons/fa";
import style from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

function Contact({ contact }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };
  return (
    <li className={style.item}>
      <div>
        <p>
          <FaUser className={style.icon} />
          {contact.name}
        </p>
        <p>
          <FaPhone className={style.icon} />
          {contact.number}
        </p>
      </div>
      <button className={style.button} onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
}

export default Contact;
