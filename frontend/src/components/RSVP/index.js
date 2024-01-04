import { useState } from 'react';
import useSWR, { mutate } from "swr";
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


    const addGuest = async () => {
        const newGuest = {
            firstName: firstName,
            lastName: lastName
        };
    
        try {
            // Make the POST request
            const response = await fetch('/api/guests', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newGuest),
            });
    
            // Check if the request was successful (status code 2xx)
            if (response.ok) {
                // Refetch the data after a successful POST request
                mutate('/api/guests');
                // Clear the form fields
                setFirstName('');
                setLastName('');
            } else {
                // Handle error cases if needed
                console.error('Failed to add guest:', response.status, response.statusText);
            }
        } catch (error) {
            console.error('Error adding guest:', error);
        }
    };


    return (
        <div className="rsvp">
            <div className="rsvp-section">
                <dialog id="guest-form-modal" className="modal">
                    <div className="modal-box flex flex-col h-1/2 justify-center items-center gap-8">
                        <h3 className="font-bold text-2xl text-center">RSVP</h3>
                        <p style={{ color: "red" }}>No kids!</p>
                        <form className="flex flex-col gap-4" method="dialog" onSubmit={addGuest} >
                            <input
                                className="input input-bordered w-full max-w-xs"
                                type="text"
                                name="firstName"
                                value={firstName}
                                placeholder="First Name"
                                onChange={(e) => setFirstName(e.target.value)}
                                required
                            />
                            <input
                                className="input input-bordered w-full max-w-xs"
                                type="text"
                                name="lastName"
                                value={lastName}
                                placeholder="Last Name"
                                onChange={(e) => setLastName(e.target.value)}
                                required
                            />
                            <button className="btn btn-block" type="submit">Submit</button>
                        </form>
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => document.getElementById('guest-form-modal').removeAttribute("open")}>✕</button>
                    </div>
                </dialog>
            </div>
            <div className="guest-list mt-6 flex flex-col justify-center items-center w-full overflox-x-auto gap-3">
                <div className="rsvp flex justify-around items-center flex-wrap gap-6 w-full">
                    <h1 className="text-2xl font-bold">Guest List</h1>
                    <button className="btn btn-outline btn-accent" onClick={() => document.getElementById('guest-form-modal').setAttribute("open", "")}>Need to RSVP?</button>
                </div>
                {error !== undefined ? (
                    <div>Could not load guests at this moment.</div>
                ) : (
                    <table className="table w-4/5">
                        <thead>
                            <tr>
                                <th>#</th>
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
