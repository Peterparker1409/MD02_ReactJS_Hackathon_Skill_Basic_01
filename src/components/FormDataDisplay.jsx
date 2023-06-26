// import { useState } from 'react';
import React from 'react';


const FormDataDisplay = ({ formData }) => {
    if (!formData) {
        return null;
    }

    return (
        <div>
            <h2>Submitted Data:</h2>
            <p>Name: {formData.name}</p>
            <p>Email: {formData.email}</p>
            <p>Phone: {formData.phone}</p>
            <p>Message: {formData.message}</p>
        </div>
    );
};

export default FormDataDisplay;
