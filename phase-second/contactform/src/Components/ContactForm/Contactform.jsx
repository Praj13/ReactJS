import React from 'react'
import styles from './Contactform.module.css'
import Button from '../Button/Button.jsx'
import { FiMessageCircle } from "react-icons/fi";
import { IoIosCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import {useState} from 'react';



const Contactform = () => {
  const [name,setName]=useState("John")
const [email,setEmail]=useState("john@example.com")
const [text,setText]=useState("Hey there")

  const onSubmit=(event)=>{
    event.preventDefault();
    setName(event.target[0].value)
    setEmail(event.target[1].value)
    setText(event.target[2].value)
  }
  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.topbtn}>
          <Button text="VIA SUPPORT CHAT" icon={<FiMessageCircle />} />
          <Button text="VIA call" icon={<IoIosCall />} />
        </div>
        <div>
          <Button isOutline={true} text="VIA EMAIL FORM" icon={<MdAlternateEmail />} />
        </div>

        <form action="" onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="" />
          </div>

          <div className={styles.form_control}>
            <label htmlFor="name">Email</label>
            <input type="email" name="email" id="" />
          </div>

          <div className={styles.form_control}>
            <label htmlFor="name">Text</label>
            <textarea cols="10" name="text" id="" rows={4}></textarea>
          </div>
<div style={{
 marginLeft:'520px',
}}>
<Button text="Submit"/>
</div>
<div className="display">
  {"Name:"+" "+name}
  <hr />
  {"Email:"+" "+email}
  <hr />
  {"Text:"+" "+text}


</div>
          

        </form>

      </div>
      <div className={styles.contact_image}>
<img src="./images/contact.svg" alt="" />
      </div>
    </section>
  )
}

export default Contactform
