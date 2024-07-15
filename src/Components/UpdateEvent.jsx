import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function UpdateEvent() {
    const { id } = useParams();
    const navigate = useNavigate();
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
            })
            .catch(err => console.log(err));
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:3001/update/${id}`, {
            name: eventName,
            date: eventDate,
            description: eventDescription
        })
        .then(response => {
            console.log(response.data);
            navigate('/'); // redirect to home or another page after successful update
        })
        .catch(err => console.log(err));
    }

    return (
        <div className="container mt-5">
            <form onSubmit={handleSubmit}>
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
                <div className="mb-2">
                    <label htmlFor="date" className="form-label">
                        Event Date
                    </label>
                    <input
                        type="date"
                        className="form-control border-bottom border-warning bg-dark text-light"
                        value={eventDate}
                        onChange={(e) => setEventDate(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-2">
                    <label htmlFor="description" className="form-label">
                        Event Description
                    </label>
                    <textarea
                        className="form-control border-bottom border-warning bg-dark text-light"
                        value={eventDescription}
                        onChange={(e) => setEventDescription(e.target.value)}
                        required
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="btn btn-light"
                    data-bs-dismiss="modal"
                >
                    Update Event
                </button>
            </form>
        </div>
    );
}

export default UpdateEvent;
