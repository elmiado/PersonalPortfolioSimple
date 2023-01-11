import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
    <Section row nopadding>
        <LeftSection>
            <SectionTitle main center>
                Learn, <br/> Build and <br/>
                Discover Together.
            </SectionTitle>
            <SectionText>
                We are communicative Beings and we can build everything we want if we connect professionally together.
            </SectionText>
            <Button onClick={() => window.location = "mailto:sayad.mahdi75@gmail.com"}>Contact Me</Button>
        </LeftSection>
    </Section>
);

export default Hero;