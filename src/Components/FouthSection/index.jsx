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
                 <p>“Every one of the SmartHub engineers I have worked with has been stellar. They are great
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
                  <p>“SmartHub engineers are well vetted enginners. I have no regreat hiring from them,
                    They are always ready to deliver a good job.”</p>
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
                  <div class="r-div quote">Jennifer Smith</div>
                </div>
               </Testimonies>
              </InnerWrapper>
            </WrapperContent>
        </Wrapper>
    )
}