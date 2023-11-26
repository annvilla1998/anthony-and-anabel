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
        <tr key={i}>
            <th>{i + 1}</th>
            <td>{guest.firstName} {guest.lastName}</td>
        </tr>
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
                <button className="btn-wide btn-md" onClick={() => document.getElementById('guest-form-modal').setAttribute("open", "")}>Need to RSVP?</button>
                <dialog id="guest-form-modal" className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">RSVP</h3>
                        <form method="dialog" onSubmit={addGuest} >
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
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => document.getElementById('guest-form-modal').removeAttribute("open")}>✕</button>
                    </div>
                </dialog>
            </div>
            <div className="guest-list text-center overflox-x-auto">
                <h1 className="text-xl font-bold">Guest List</h1>
                {error !== undefined ? (
                    <div>Could not load guests at this moment.</div>
                ) : (
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {guests}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    )
}

export default RSVP
