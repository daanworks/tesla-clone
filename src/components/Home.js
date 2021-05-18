import React from "react";
import styled from "styled-components";
import Section from "../components/Section";

const Home = () => {
  return(
    <Container>
      <Section title='Model S'
               description='Order Online for Touchless Delivery'
               backgroundImg='/images/model-s.jpg'
               leftBtnText='custom order'
               rightBtnText='existing inventory'
      />
      <Section title='Model 3'
               description='Order Online for Touchless Delivery'
               backgroundImg='/images/model-3.jpg'
               leftBtnText='custom order'
               rightBtnText='existing inventory'
      />
      <Section title='Model X'
               description='Order Online for Touchless Delivery'
               backgroundImg='/images/model-x.jpg'
               leftBtnText='custom order'
               rightBtnText='existing inventory'
      />
      <Section title='Model Y'
               description='Order Online for Touchless Delivery'
               backgroundImg='/images/model-y.jpg'
               leftBtnText='custom order'
               rightBtnText='existing inventory'
      />
      <Section title='Lowest Cost Solar Panels in America'
               description='Money-back guarantee'
               backgroundImg='/images/solar-panel.jpg'
               leftBtnText='order now'
               rightBtnText='learn more'
      />
      <Section title='Solar for New Roofs'
               description='Solar Roof Costs Less Than a New Roof Plus Solar Panels'
               backgroundImg='/images/solar-roof.jpg'
               leftBtnText='order now'
               rightBtnText='learn more'
      />
      <Section title='Accessories'
               description=''
               backgroundImg='/images/accessories.jpg'
               leftBtnText='shop now'
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`
