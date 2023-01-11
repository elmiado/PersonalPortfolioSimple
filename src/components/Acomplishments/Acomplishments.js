import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 1, text: 'Entrepreneurship Experience'},
  { number: 5, text: 'Programming Language', },
];

const Acomplishments = () => (
    <Section>
        <SectionDivider/>
            <SectionTitle>Personal Achievements</SectionTitle>
            <Boxes>
                {data.map((card, index) => (
                    <Box key={index}>
                      <BoxNum>{card.number}+</BoxNum>
                      <BoxText>{card.text}</BoxText>
                    </Box>
                ))}
            </Boxes>
    </Section>
);

export default Acomplishments;
