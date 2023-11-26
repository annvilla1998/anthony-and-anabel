import { useState } from 'react';
import useSWR from "swr";
import "./rsvp.css";

  
const fetcher = (url, options) => {
return fetch(url, options).then((res) => res.json());
};
  
const RSVP = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const { data, error } = useSWR('/api/guests', fetcher);

    const guests = !data ? (<div>Loading...</div>) : (data.map((guest, i) => (
        <li key={i}>{guest.firstName} {guest.lastName}</li>
    )));


    const addGuest = () => {
        const newGuest = {
        firstName: firstName,
        lastName: lastName
        }

        fetch('/api/guests', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newGuest),
        }).then(function (res) { return res.json(); })
        .then(function (data) { console.log(data) })
    }


    return (
        <div className="rsvp">
        <div className="rsvp-section">
            <button>Need to RSVP?</button>
            <form onSubmit={addGuest} >
            <label>First Name:
                <input
                type="text"
                name="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                />
            </label>
            <label>Last Name:
                <input
                type="text"
                name="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                />
            </label>
            <button type="submit">Submit</button>
            </form>
        </div>
        <div className="guest-list">
            <h1>Guest List</h1>
            <ol>
            {error !== undefined ? (
                <div>Could not load guests at this moment.</div>
            ) : guests
            }
            </ol>
        </div>
        </div>
    )
}

export default RSVP
