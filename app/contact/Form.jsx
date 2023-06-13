'use client'

import { useState } from "react"
import { sendEmail } from "./action";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function onSubmit(e) {
    e.preventDefault()
    sendEmail({name,email,message}).then((res) => {
      setName('')
      setEmail('')
      setMessage('')
      alert(res)
    })
  }

  return (
    <form onSubmit={onSubmit} className="p-8 rounded-lg border border-accent text-xl max-lg:max-w-lg">
      <input required value={name} onChange={ e => setName(e.target.value)}
             type="text" name="name" placeholder="Name"
             className="bg-transparent border-b border-primary py-3 outline-none w-full placeholder:text-primary text-accent focus:border-accent transition-all"/>
      <input required value={email} onChange={ e => setEmail(e.target.value)}
             type="email" name="email" placeholder="Email"
             className="bg-transparent border-b border-primary py-3 outline-none w-full placeholder:text-primary text-accent focus:border-accent transition-all"/>
      <textarea required value={message} onChange={ e => setMessage(e.target.value)}
             rows="" cols="" name="message" placeholder="Message" spellCheck="false"
             className="bg-transparent border-b border-primary py-12 mb-12 outline-none w-full placeholder:text-primary text-accent focus:border-accent transition-all resize-none"></textarea>
      <button type='submit' className="h-10 w-28 rounded-xl uppercase text-xl text-primary border border-primary font-bold hover:text-accent hover:border-accent hover:border-2">Send</button>
    </form>
  )
}
