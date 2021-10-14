import React from 'react';
import { Wrapper, Match, Main, Item, Image, Description } from './ThirdSection';
import bg1 from "../../assests/homeBg2.jpg"
import bg2 from "../../assests/homeBg3.jpg"
import bg3 from "../../assests/homeBg4.jpg"

export default function ThirdSection() {
    return (
        <Wrapper>
           <Match>Find the most vetted engineers from around the world here </Match>
            <Main>
                <Item>
                    <Image>
                        <img src={bg1} alt=""/>
                    </Image>
                    <Description>
                        <h2>Assessing Engineers</h2>
                        <p>Do not worry about spending time interviewing, put more time building
                            connecting with engineers we've already assessed.
                        </p>
                        <a href="!#">Learn More...</a>
                    </Description>
                </Item>
                <Item>
                    <Description>
                        <h2>Talent Around The Globe</h2>
                        <p>Tap into a talent pool that spans around Africa, America, United Kingdom and so on. The best engineers aren’t always in your backyard
                        </p>
                        <a href="!#">Learn More...</a>
                    </Description>
                    <Image>
                        <img src={bg2} alt=""/>
                    </Image>
                </Item>
                <Item>
                    <Image>
                        <img src={bg3} alt=""/>
                    </Image>
                    <Description>
                        <h2>Hands-On Support</h2>
                        <p>From helping with onboarding to sharing best practices, our success team is there every step of the way.
                        </p>
                        <a href="!#">Learn More...</a> 
                    </Description>
                </Item>
            </Main>
        </Wrapper>
    )
}