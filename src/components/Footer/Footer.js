import React from 'react';
import {AiFillGithub, AiFillLinkedin, AiFillTwitterCircle, AiFillMail, AiFillPhone} from 'react-icons/ai';

import {Div3, SocialIcons} from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
      <FooterWrapper>
          <LinkList>
              <LinkColumn>
                  <LinkTitle><AiFillPhone size={"10px"} /> Telegram</LinkTitle>
                  <LinkItem href={"https://t.me/elmiado"}>t.me/elmiado</LinkItem>
              </LinkColumn>
              <LinkColumn>
                  <LinkTitle><AiFillMail size={"10px"} /> Email</LinkTitle>
                  <LinkItem href={"mailto:sayad.mahdi75@gmail.com"}>sayad.mahdi75@gmail.com</LinkItem>
              </LinkColumn>
          </LinkList>
          <SocialIconsContainer>
              <CompanyContainer>
                  <Slogan>Learn, Build and Discover Together.</Slogan>
              </CompanyContainer>
              <SocialContainer>
                  <SocialIcons href={"https://github.com/elmiado"}>
                      <AiFillGithub size={"3rem"} />
                  </SocialIcons>
                  <SocialIcons href={"https://www.linkedin.com/in/miaad-sayad-600b1b189/"}>
                      <AiFillLinkedin size={"3rem"} />
                  </SocialIcons>
                  <SocialIcons href={"https://twitter.com/elmiadoo"}>
                      <AiFillTwitterCircle size={"3rem"} />
                  </SocialIcons>
              </SocialContainer>
          </SocialIconsContainer>
      </FooterWrapper>
  );
};

export default Footer;
