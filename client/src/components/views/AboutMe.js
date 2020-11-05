import React from "react";
import "../css/AboutMe.css";
import hiking from "../img/hiking.png";

export const AboutMe = () => {
    return (
        <div className="about_me_container Yborder">
            <div className="row about_me_inner_container d-flex align-items-center">
                <div className="about_me_content col-lg-7 Yborder">
                    <p>
                        As of October 23, 2020 I will have graduated from a
                        coding bootcamp called CodingDojo in Bellevue, WA. In
                        this program we focused on web development and covered 3
                        full stacks: Django with Python and a SQLight db, MERN,
                        and C# using ASP.Net. I achieved a “black belt” status
                        on the exam for each of these stacks. This program has
                        given me some tools in my toolbox as well as the ability
                        to continue to learn new tools in a timely manner.
                        Before coming to CodingDojo I worked as an elementary
                        teacher overseas for 3 years. Before getting my teaching
                        degree I served in the US Navy for 5 years as a logistic
                        specialist. However, throughout both of these careers my
                        favorite pastime has been dabbling in computer
                        programming. I am excited to finally put that dabbling
                        into a career. I have learned many skills throughout my
                        adult life, from the experiences in the Navy to my
                        teaching career, as well as being a husband and a father
                        of two. Some of these skills include how to communicate
                        effectively with people as well as working in unison
                        with a variety of personalities and despite cultural
                        differences.
                    </p>
                </div>
                <div className="col-lg-3">
                    <img className="about_me_img" src={hiking} alt="" />
                </div>
                <div className="label col-lg-1">
                    <h1>My Story</h1>
                </div>
            </div>
        </div>
    );
};
