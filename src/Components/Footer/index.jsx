import React from 'react';
import { Wrapper, Line, Footer, Section, SectionItem, Email, Form, Text, Icons } from './footer';
import twitter from "../../assests/twitter.svg";
import linkedin from "../../assests/linkedin.svg";
import instagram from "../../assests/instagram.svg";
import facebook from "../../assests/facebook.svg";
import send from "../../assests/send.svg";

export default function ThirdSection() {
    return (
        <Wrapper>
             <Line></Line>
            <Footer>
                <Section>
                <SectionItem>
                    <h2>JOIN SmartHub</h2>
                    <div>
                        <h3>
                            For Engineers
                        </h3>
                        <h3>Learning Community</h3>
                        <h3>Technical Programs</h3>
                    </div>
                </SectionItem>
                <SectionItem>
                    <h2>About Us</h2>
                    <div>
                        <h3>Resources</h3>
                        <h3>Events</h3>
                        <h3>Careers</h3>
                        <h3>Blog</h3>
                        <h3>About SmartHub</h3>
                    </div>
                </SectionItem>
                </Section>
                <Email>
                    <h2>Send a mail</h2>
                    <Form>
                        <input type="email" placeholder="Enter your email" />
                        <textarea cols="15" rows="5" type="text" placeholder="Message"/>
                        <button><img src={send} alt="" /></button>
                    </Form>
                </Email>
            </Footer>
            <footer><Text>&copy; COPYRIGHT 2021 - SMARTHUB ALL RIGHTS RESERVED</Text>
                <Icons>
                    <img src={facebook} alt="" />
                    <img src={instagram} alt="" />
                    <img src={twitter} alt="" />
                    <img src={linkedin} alt="" />
                </Icons>
            </footer>
        </Wrapper>
    )
}