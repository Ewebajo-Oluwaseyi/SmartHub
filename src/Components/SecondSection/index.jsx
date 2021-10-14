import React from 'react';
import { Wrapper, Message, Read } from './SecondSection';


export default function SecondSection() {
    return (
        <Wrapper>
           <Message>
               A Message from SmartHub's CEO: Announcemet of Series
           </Message>
           <Read>
               <button>Read it now</button>
           </Read>
        </Wrapper>
    )
}