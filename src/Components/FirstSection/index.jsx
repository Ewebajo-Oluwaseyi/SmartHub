import React from 'react';
import { Wrapper, Hero, Connect, Button } from './FirstSection';
import ParticleBg from "./ParticlesBg.jsx"

export default function FirstSection() {
    return (
        <Wrapper>
            <ParticleBg/>
            <Hero>
                <Connect>Connect to talents for your startup and companies</Connect>
                <Button><span></span>Find Them</Button>
            </Hero>
        </Wrapper>
    )
}