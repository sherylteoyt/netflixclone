import React from 'react';
import { Container, Title, SubTitle } from './styles/feature';


Feature.Title = function FeatureTitle({ children, ...restProps }) {
    return <Title { ...restProps}>{children}</Title>;
};

Feature.SubTitle = function FeatureSubTitle({ children, ...restProps }) {
    return <SubTitle {...restProps}>{children}</SubTitle>;
};

export default function Feature ({ children, ...restProps }) {
    return<Container { ...restProps}>{children}</Container>;
}