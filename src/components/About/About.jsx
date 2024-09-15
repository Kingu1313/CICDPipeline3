import React from "react";
import styles from "./About.module.css";
import {getImageUrl} from "../../utils";

export const About = () => {
    return (
    <section className={styles.container}>
        <h2 className={styles.title} id="about">About Me</h2>
        <div className={styles.content}>
            <img src={getImageUrl("about/drone.png")} alt="Me sitting with a laptop" className={styles.aboutImage}/>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cybersecurityIcon.png")} alt="Cybersecurity Icon" className={styles.icon}/>
                    <div className={styles.aboutItemText}>
                        <h3>Cybersecurity Engineer</h3>
                        <p>As a final-year cybersecurity student, I'm specializing in threat intelligence, penetration testing, and incident response.</p>
                        </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/botIcon.png")} alt="Bot Icon" className={styles.icon}/>
                    <div className={styles.aboutItemText}>
                        <h3>Bot Enthusiast</h3>
                        <p>I build bots with microcontrollers and compete regularly to develop my skills and network with people.</p>                            
                        </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/droneIcon.png")} alt="Drone Icon" className={styles.icon}/>
                    <div className={styles.aboutItemText}>
                        <h3>From Land to Air</h3>
                        <p>I develop powertrain systems for MPSTME Racing Team and built autonomous drones for MPSTME AeroXperts.</p>
                    </div>
                </li>
               
            </ul>
        </div>
    </section>
    );
};