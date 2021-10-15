import React, { Suspense } from 'react';
import { Navbar, FirstSection, SecondSection, ThirdSection, FouthSection, FifthSection, SixthSection, Footer, Sign, Spinner} from '../Components'
import { Switch, Route } from 'react-router-dom';

function Home() {
    return (
      <>
        <Navbar/>
          <Switch>
            <Route
              path="/"
              render={() => (            
              <Suspense fallback={<Spinner/>}>
                <FirstSection/>
                <SecondSection/>
                <ThirdSection/>
                <FouthSection/>
                <FifthSection/>
                <SixthSection/> 
              </Suspense>
              )}
            /> 
          </Switch>
          <Sign/>
        <Footer/>
      </>
    )
}

export default Home;