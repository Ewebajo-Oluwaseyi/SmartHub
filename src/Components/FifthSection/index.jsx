import React from 'react';
import { Wrapper, Skill, Community, Image, Head, SkillContent } from './FifthSection';

export default function FifthSection() {
    return (
        <Wrapper>
         <div>
            <Community>Our Community</Community>
         </div> 
         <Skill>
            <div>
              <Image>
                <img alt="" src="https://andela.com/wp-content/uploads/2021/02/v3-1.png"/>
             </Image>
            </div>
            <div>
              <SkillContent>
                <Head>30,000+ Software Engineers</Head>
                <p>Who have come together to develop their skills, learn from each other, and grow their
                        careers</p>
              </SkillContent>
              <SkillContent>
                <Head>50+ Technical Skills</Head>
                  <div>
                    <p>Skills include Ruby, Python, Go, Java, JavaScript, React-Native, Postgres, MongoDB, and many
                        more.</p></div>
              </SkillContent>
              <SkillContent>
                <Head>30+ Countries</Head>
                    <div><p>With a geographic footprint that covers Africa, South America, Eastern Europe, and many
                        more.
                    </p>
                    </div>
              </SkillContent>
            </div>
         </Skill>
        </Wrapper>
    )
}