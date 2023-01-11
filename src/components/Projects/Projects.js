import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

// const ProjectsDemo = [
//     {
//                 title: 'Project 1',
//                 description: 'This is a really really long projects that we do in a half of year.'
//     },
//             {
//                 title: 'Project 2',
//                 description: 'This is a really really long projects that we do in a half of year.'
//             },
//             {
//                 title: 'Project 3',
//                 description: 'This is a really really long projects that we do in a half of year.'
//             },
//             {
//                 title: 'Project 4',
//                 description: 'This is a really really long projects that we do in a half of year.'
//             }];


const Projects = () => (
    <Section nopadding id={"projects"}>
        <SectionDivider/>
        <SectionTitle>Projects</SectionTitle>
        <GridContainer>
            {projects.map(({id, image, title, description, tags, source,
                               visit}) => (
                <BlogCard key={id}>
                    <Img src={image} />
                    <TitleContent>
                        <HeaderThree title>{title}</HeaderThree>
                        <Hr/>
                    </TitleContent>
                    <CardInfo>{description}</CardInfo>
                    <div>
                        <TitleContent>Stack</TitleContent>
                        <TagList>
                            {tags.map((tag, i) => (
                                <Tag key={i}><b>{tag}</b></Tag>
                                ))}
                        </TagList>
                    </div>
                    <UtilityList>
                        <ExternalLinks href={source}>Code</ExternalLinks>
                        <ExternalLinks href={visit}>Source</ExternalLinks>
                    </UtilityList>
                </BlogCard>
                ))}
        </GridContainer>
    </Section>
);

export default Projects;