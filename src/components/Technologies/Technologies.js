import React from 'react';
import { DiFirebase, DiReact , DiPython} from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id={"tech"}>
      <SectionDivider/>
      <br/>
      <SectionTitle>Technologies</SectionTitle>
      <SectionText>
          I've worked with a range of technologies in the back-end development from Designing complicated project to
          optimizing them for better efficiency.
      </SectionText>
      <List>
          <ListItem>
              <DiReact size={"3rem"} />
              <ListContainer>
                  <ListTitle>Front-End</ListTitle>
                  <ListParagraph>
                      Experienced with <br/>
                      Javascript <br/>
                      worked with React, Next.js
                  </ListParagraph>
              </ListContainer>
          </ListItem>
          <ListItem>
              <DiPython size={"3rem"} />
              <ListContainer>
                  <ListTitle>Back-End</ListTitle>
                  <ListParagraph>
                      Fully Experienced with <br/>
                      Python Development, Design Algorithms and Flask
                  </ListParagraph>
              </ListContainer>
          </ListItem>
          <ListItem>
              <DiFirebase size={"3rem"} />
              <ListContainer>
                  <ListTitle>DataBase</ListTitle>
                  <ListParagraph>
                      Worked with <br/>
                      MongoDb, Sqlite, Redis. <br/>
                      Rabbitmq, Streaming, Kafka ...
                  </ListParagraph>
              </ListContainer>
          </ListItem>
      </List>
  </Section>
);

export default Technologies;
