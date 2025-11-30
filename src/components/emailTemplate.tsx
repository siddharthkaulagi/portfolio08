import * as React from "react";

interface EmailTemplateProps {
    name: string;
    email: string;
    message: string;
}

export const EmailTemplate = ({ name, email, message }: EmailTemplateProps) => (
    <div>
        <h2>New Message from {name}</h2>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Message:</strong> {message}</p>
    </div>
);
