import React from 'react';
import { Wrapper,WrapperContent, Header, Image, Testimonies,InnerWrapper, Stars } from './FouthSection';


export default function ThirdSection() {
    return (
        <Wrapper>
            <div>
                <Header>Testimonies</Header>
            </div>
            <WrapperContent>
              <InnerWrapper>
               <Testimonies>
                 <p>“Every one of the Andela engineers I have worked with has been stellar. They are great
                  engineers,
                 really driven to deliver, and they’re just great people.”</p>
                <Stars>
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                </Stars>
                <div style={{display: 'flex', alignItems: 'center'}}>
                  <Image>
                   <img alt="" src="image/1.jpg" width="50px;"/>
                  </Image>
                  <div class="r-div quote">Michael Archibald</div>
                </div>
               </Testimonies>
             </InnerWrapper>
              <InnerWrapper>
                <Testimonies>
                  <p>“Every one of the Andela engineers I have worked with has been stellar. They are great
                    engineers,
                    really driven to deliver, and they’re just great people.”</p>
                <Stars>
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                  <li><i class="fas fa-star"></i></li>
                </Stars>
                <div style={{display: 'flex', alignItems: 'center'}}>
                <Image>
                  <img alt="" src="image/2.jpg" width="50px;"/>
                </Image>
                  <div class="r-div quote">Michael Archibald</div>
                </div>
               </Testimonies>
              </InnerWrapper>
            </WrapperContent>
        </Wrapper>
    )
}