import styles from './Message.module.css'
import { useState } from 'react'


const Message = () => {
    const [type, setType] = useState("")

  return (
    <div className={`${styles.message} ${styles[type]}`}>
    <p>Message</p>
    </div>
  )
}

export default Message