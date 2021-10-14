import React from 'react';
import { Wrapper, Hero, Connect, Button } from './FirstSection';
import ParticleBg from "./ParticlesBg.jsx"

export default function FirstSection() {
    return (
        <Wrapper>
            <ParticleBg/>
            <Hero>
                <Connect>Connect to talents and developers for your startup, companies or Enterpreneurs</Connect>
                <Button><span></span>Hire</Button>
            </Hero>
        </Wrapper>
    )
}