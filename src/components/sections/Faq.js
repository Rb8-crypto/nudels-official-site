import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useLayoutEffect, useRef } from 'react'
import styled from 'styled-components';
import Accordion from '../Accordion';


const Section = styled.section`
min-height: 100vh;
height: auto;
width: 100vw;
background-color: #ca8b87;
position: relative;
color: ${(props) => props.theme.body};
overflow: hidden;


display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: uppercase;
  color: ${(props) => props.theme.body};
  
  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.carouselColor};
  width: fit-content;

  @media (max-width: 48em){
  font-size: ${(props) => props.theme.fontxl};

  }
`;

const Container = styled.div`
width: 75%;
margin: 2rem auto;

display: flex;
justify-content: space-between;
align-content: center;

@media (max-width: 64em){
  width: 80%;
  }
  @media (max-width: 48em){
  width: 90%;
  flex-direction: column;

  &>*:last-child{
    &>*:first-child{

    margin-top: 0;
}

  }
  }
`
const Box = styled.div`
width: 45%;
@media (max-width: 64em){
  width: 90%;
  align-self: center;
  }

`

const Faq = () => {

const ref = useRef(null);
gsap.registerPlugin(ScrollTrigger);
useLayoutEffect(() => {
  
  let element = ref.current;

  ScrollTrigger.create({
    trigger: element,
    start:'bottom bottom',
    end:'bottom top',
    pin:true,   
    pinSpacing:false, 
    scrub:1,
    // markers:true,
  })

  return () => {
    ScrollTrigger.kill();
  };
}, [])

  return (
    <Section ref={ref} id="faq">
    <Title>Faq</Title>

    <Container>

<Box>
  <Accordion ScrollTrigger={ScrollTrigger} title="WHAT ARE NFTs" >
  An NFT is short for Non-Fungible Token. They are built using the same kind of programming as cryptocurrency, like Bitcoin or Ethereum. Nfts come in a variety of forms such as art, music, gifs, etc. These digital assets are uniquely stored encrypted on the crypto blockchain, authenticating and providing proof of ownership for each NFT. To have an NFT a crypto wallet will be needed.
  </Accordion>
  <Accordion ScrollTrigger={ScrollTrigger} title="WHAT IS THE MINT PRICE & SUPPLY?" >
  The Minting price for Nudels Official Launch is 0.04 ETH & Whitelist is 0.005 ETH for pass holders during the Whitelist Pass Sale. The Total Supply of Nudels Collection is 8,888 NFTs.
  </Accordion>
  <Accordion ScrollTrigger={ScrollTrigger} title="WHY DO WE NEED ROYALTIES?" >
  The royalty amount for Nudels are fixed at 5%. These royalties will be used to continue to grow the Nudels Team and organizing events that strengthen the Nudels community. 
  </Accordion>
</Box>
<Box>
<Accordion ScrollTrigger={ScrollTrigger} title="WHAT IS METAMASK?" >
Metamask is a digital crypto wallet that is used to hold and trade cryptocurrencies. Metamask is built to support NFT Transactions using blockchains such as ETH & Polygon. When you first create your Metamask, you will be generated a SECRET RECOVERY PHRASE keep this phrase in a secure place out of easy reach this will be the only thing you’ll have to access your account if you forget the password. (Share YOUR phrase with NO ONE).
  </Accordion>
  <Accordion ScrollTrigger={ScrollTrigger} title="WHERE CAN I VIEW MY NFTs?" >
Once minted or bought simply connect to your OpenSea account to view your NFTs.
  </Accordion>
  <Accordion ScrollTrigger={ScrollTrigger} title="How can I work with Nudels?" >
All collab, partnership, and other inquiries should be sent to nudelsnft(at)gmail.com. Our typical repsonses take place to monday-friday between the hours of 8am-8pm.
  </Accordion>
</Box>
    </Container>
    </Section>
  )
}

export default Faq
