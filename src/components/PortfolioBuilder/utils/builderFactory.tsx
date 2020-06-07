import {BuilderItem} from "../../../types/builder";
import PortfolioTitle from "../components/PortfolioTitle";
import React from "react";
import PortfolioDescription from "../components/PortfolioDescription";
import PortfolioSkills from "../components/PortfolioSkills";
import PortfolioImage from "../components/PortfolioImage";

export function getBuilderComponent(item: BuilderItem) {
    switch(item.type) {
        case 'title':
            console.log('title');
            // @ts-ignore
            console.log(item.metadata);
            // @ts-ignore
            return (<PortfolioTitle title={item.metadata['content']} />);
        case 'description':
            console.log('description');
            // @ts-ignore
            return (<PortfolioDescription subtitle={item.metadata['subtitle']} content={item.metadata['description']} />);
        case 'skills':
            console.log('skills');
            // @ts-ignore
            return (<PortfolioSkills skills={item.metadata['skills']} title={item.metadata['title']} />);
        case 'image':
            console.log('image');
            // @ts-ignore
            return (<PortfolioImage url={item.metadata['url']} />);
        default: return undefined;
    }
}