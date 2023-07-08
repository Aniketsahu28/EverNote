import React from "react";

const About = () => {
  return (
    <div className="container ">
      <p>
        <strong style={{ fontSize: "24px" }}> Welcome to EverNote! </strong>
        <br />
        <br />
        EverNote is a powerful note-making application designed to help you stay
        organized and capture your thoughts and ideas effortlessly. With a sleek
        and intuitive user interface built with React, a robust backend powered
        by Node.js and Express, and a reliable MongoDB database hosted on
        MongoDB Atlas, EverNote offers a seamless note-taking experience. <br />
        <br />
        <strong style={{ fontSize: "20px" }}>Key Features:</strong>
        <br />
        <strong style={{ fontSize: "25px" }}>👉</strong>{" "}
        <b>Create, Read, Update, and Delete:</b>
        <br /> EverNote allows you to create new notes, view existing ones,
        update their content, and delete them when they're no longer needed.
        This comprehensive set of functionalities ensures that you have full
        control over your notes at all times. <br />
        <strong style={{ fontSize: "25px" }}>👉</strong>
        <b>Title, Description, and Tags:</b> <br />
        Each note in EverNote comes with a title, a descriptive body, and the
        option to assign relevant tags. This enables you to categorize and
        easily locate your notes based on specific topics or themes, making it
        effortless to organize and retrieve information. <br />
        <strong style={{ fontSize: "25px" }}>👉</strong>
        <b> Seamless Synchronization: </b>
        <br />
        With your data stored securely on MongoDB Atlas, EverNote ensures that
        your notes are always available across multiple devices. Whether you're
        accessing the application from your computer, tablet, or smartphone,
        your notes will be synchronized in real-time, allowing you to access and
        update them wherever you are.
        <br />
        <strong style={{ fontSize: "25px" }}>👉</strong>
        <b> User-Friendly Interface: </b>
        <br />
        EverNote features a modern and intuitive user interface, making it easy
        to navigate and use. The React frontend provides a smooth and responsive
        experience, allowing you to focus on capturing and managing your ideas
        without any distractions.
        <br />
        <br />
        Stay organized, increase productivity, and never miss a great idea with
        EverNote. Start using it today and experience the power of seamless
        note-taking! <strong style={{ fontSize: "25px" }}>📝💯</strong>
      </p>
    </div>
  );
};

export default About;
