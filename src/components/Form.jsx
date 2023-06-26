import React, { useState } from 'react';

const FormDataDisplay = ({ formData }) => {
    return (
        <div style={{backgroundColor:"#3636e5",padding:"40px"}}>
            <h2> Contac Info:</h2>
            <p>Name: {formData.name}</p>
            <p>Email: {formData.email}</p>
            <p>Phone: {formData.phone}</p>
            <p>Message: {formData.message}</p>
        </div>
    );
};

const Form = () => {
    const [formData, setFormData] = useState({});
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate input
        const errors = {};
        if (!name) {
            errors.name = 'Please enter your name';
        }
        if (!email) {
            errors.email = 'Please enter your email';
        }
        if (!phone) {
            errors.phone = 'Please enter your phone number';
        }
        if (!message) {
            errors.message = 'Please enter your message';
        }

        if (Object.keys(errors).length > 0) {
            setErrors(errors);
        } else {
            const newFormData = {
                name: name,
                email: email,
                phone: phone,
                message: message,
            };
            setFormData(newFormData);
            setName('');
            setEmail('');
            setPhone('');
            setMessage('');
            setSubmitted(true);
            setErrors({});
        }
    };

    return (
        <div
            style={{
                display: 'flex',
                gap: '140px',
                flexDirection: 'row-reverse',
                justifyContent: 'center',
                alignItems: 'flex-end',
                marginTop: '80px',
            }}
        >
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <br />
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
                <br />

                <label>Email:</label>
                <br />
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
                <br />

                <label>Phone:</label>
                <br />
                <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                {errors.phone && <span style={{ color: 'red' }}>{errors.phone}</span>}
                <br />

                <label>Message:</label>
                <br />
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                {errors.message && (
                    <span style={{ color: 'red' }}>{errors.message}</span>
                )}
                <br />

                <button type="submit">Submit</button>
            </form>

            {submitted && <FormDataDisplay formData={formData} />}
        </div>
    );
};

export default Form;
