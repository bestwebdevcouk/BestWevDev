import { useState } from "react";
import "../../App.css";
import { sendCustomEmail } from "./SendEmail";

import styles from "./Form.module.css";

export const Form = () => {
    const [details, setDetails] = useState({
        from_name: "",
        reply_to: "",
        message: "",
    });

    const handleDetailsChange = (event) => {
        const { name, value } = event.target;

        setDetails((prevDetails) => {
            return {
            ...prevDetails,
            [name]: value,
            };
        });
    };

    const handleSendEmail = () => {
        sendCustomEmail(details);
        resetFields();
        popUpText();
    };

    const resetFields = () => {
        document.getElementById('nameInput').value = "";
        document.getElementById('emailInput').value = "";
        document.getElementById('messageInput').value = "";
    };

    const popUpText = () => {
        var popup = document.getElementById("myPopup");
        popup.classList.toggle("show");
    }

    return (
        <div className="container">
            <div className={styles.content}>
                <input 
                    id="nameInput"
                    name="from_name"
                    value={details.from_name}
                    onChange={handleDetailsChange}
                    type="text"
                    placeholder="Name"
                />
                <input
                    id="emailInput"
                    name="reply_to"
                    value={details.reply_to}
                    onChange={handleDetailsChange}
                    type="email"
                    placeholder="Email Address"
                />
                <textarea
                    id="messageInput"
                    name="message"
                    value={details.message}
                    onChange={handleDetailsChange}
                    type="text"
                    placeholder="Please enter your message"
                />
                <button
                    disabled={!details.from_name || !details.reply_to || !details.message}
                    onClick={handleSendEmail}
                    type=""
                >
                <span>Send Email</span>
                </button>

                <div className={styles.popup}>
                    <span className={styles.popuptext} id="myPopup">Popup text...</span>
                </div>
            </div>
        </div>
    );
};
