import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import EmailIcon from "@mui/icons-material/Email";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";

const ContactSection = () => {
    // Each icon will lead to the desired platform
    const socialLinks = [
        "https://www.instagram.com/perrellex.official/",
        "https://www.youtube.com/@perrellex/videos",
        "perrellex@gmail.com",
    ];

    const handleClick = (listNumber: number) => {
        window.open(socialLinks[listNumber], "_blank");
    };

    const handleCopyToClipboard = (listNumber: number, attribute: string) => {
        navigator.clipboard.writeText(socialLinks[listNumber]);
        return alert(attribute + " copied to clipboard!");
    };

    return (
        <div>
            <section id="CONTACT">
                <h1>CONTACT</h1>
                <p className="contact-field">
                    <InstagramIcon
                        onClick={() => handleClick(0)}
                        style={{ cursor: "pointer" }}
                    />
                    <br />
                    <YouTubeIcon
                        onClick={() => handleClick(1)}
                        style={{ cursor: "pointer" }}
                    />
                    <br />
                    <EmailIcon
                        onClick={() => handleCopyToClipboard(2, "e-mail")}
                        style={{ cursor: "pointer" }}
                    />
                    <br />
                </p>
            </section>
            <footer>
                <p>© 2024 Perrellex</p>
                <p
                    onClick={() =>
                        window.open(
                            "https://www.instagram.com/studio_haedin/",
                            "_blank"
                        )
                    }
                    style={{ cursor: "pointer" }}
                >
                    Website made by Haedin
                </p>
            </footer>
        </div>
    );
};

export default ContactSection;
