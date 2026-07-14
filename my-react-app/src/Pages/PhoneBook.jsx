import { useState } from "react";

function ContactPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const [contacts, setContacts] = useState([
    {
      name: "Alex Mercer",
      phone: "555-0199",
    },
    {
      name: "Jane Doe",
      phone: "555-0143",
    },
     {
      name: "Jane Doe",
      phone: "555-0143",
    },
  ]);

  function saveContact() {
    if (name === "" || phone === "") {
      alert("Please fill in all fields.");
      return;
    }

    const newContact = {
      name: name,
      phone: phone,
    };

    setContacts([...contacts, newContact]);

    setName("");
    setPhone("");
  }

  function deleteContact(index) {
    const newContacts = contacts.filter((_, i) => i !== index);
    setContacts(newContacts);
  }

  return (
    <div className="contact-page">

      <div className="contact-header">
        <h1>📞 Contact Manager</h1>
        <p>Manage your contacts easily</p>
      </div>

      <div className="contact-count">
        <h3>Total Contacts: {contacts.length}</h3>
      </div>

      <div className="contact-form">

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <button
          className="save-contact-btn"
          onClick={saveContact}
        >
          Save Contact
        </button>

      </div>

      <div className="contacts-list">

        {contacts.map((person, index) => (

          <div
            key={index}
            className="contact-card"
          >

            <div>

              <h3>{person.name}</h3>

              <p>📱 {person.phone}</p>

            </div>

            <button
              className="delete-contact-btn"
              onClick={() => deleteContact(index)}
            >
              Delete
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}

export default ContactPage;