import style from './style.module.css'
import Contacts from "./contacts";
import ComponentMap from "./map";


const ContactsBlock = () => {
  return (
    <div className={style.contactsBlock}>
      <Contacts />
     < ComponentMap />
    </div>
  );
};
export default ContactsBlock;
