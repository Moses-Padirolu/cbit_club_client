import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function UpdateEvent() {
    const { id } = useParams();
    const [eventName, setEventName] = useState('');
    const [eventDate, setEventDate] = useState('');
    const [eventDescription, setEventDescription] = useState('');

    useEffect(() => {
        axios.get(`http://localhost:3001/update/${id}`)
            .then(response => {
                const { data } = response;
                setEventName(data.name);
                setEventDate(data.date);
                setEventDescription(data.description);
                console.log(response)
            })
            .catch(err => console.log(err));
    }, [id]);
    

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("hello");
    }

    return (
        <>
            <div className="container mt-5">
                <form onSubmit={handleSubmit}>
                    {/* Your form input fields go here */}
                    <div className="mb-2">
                        <h4 className="text-center">Update Event Details</h4>
                        <label htmlFor="name" className="form-label">
                            Event Name
                        </label>
                        <input
                            type="text"
                            className="form-control border-bottom border-warning bg-dark text-light"
                            value={eventName}
                            onChange={(e) => setEventName(e.target.value)}
                            required
                        />
                    </div>

                    {/* Other input fields go here */}

                    <button
                        type="submit"
                        className="btn btn-light"
                        data-bs-dismiss="modal"
                    >
                        Update Event
                    </button>
                </form>
            </div>
        </>
    );
}

export default UpdateEvent;
