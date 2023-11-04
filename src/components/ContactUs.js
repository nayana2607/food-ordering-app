const ContactUs = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl p-4 m-4">Please reach out to us on:</h1>
      <form className="p-2">
        <input className="border border-black p-2 m-2" type="text" placeholder="Name"/>
        <input className="border border-black p-2 m-2" type="text" placeholder="Message"/>
        <button className="border border-black p-2 m-2 bg-blue-500 rounded-lg">Submit</button>
      </form>
      <ul className="p-2 m-2">
        <li>gmail:sweatshop@gmail.com</li>
        <li>phone: 8523697410</li>
        <li>instagram: @naynuz_99</li>
      </ul>
    </div>
  )
}

export default ContactUs
