import React from 'react';

import { 
    Container, 
    Background,
    Logo, 
    ButtonLink, 
    Feature,
    Text,
    FeatureCallOut
} from './styles/header';

import {Link as ReactRouterLink } from 'react-router-dom';

export default function Header({
    bg = true,
    children, 
    ...restProps 
}) {
  return (
      bg ? 
      <Background {...restProps} > {children} </Background> :
      children
  );
}

Header.Feature = function HeaderFeature({children, ...restProps}){
    return <Feature {...restProps}>{children}</Feature>
}

Header.Text = function HeaderText({children, ...restProps}){
    return <Text {...restProps}>{children}</Text>
}

Header.FeatureCallOut = function HeaderFeatureCallOut({children, ...restProps}){
    return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>
}

Header.Frame = function HeaderFrame({children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
    ;
};

Header.Logo = function HeaderLogo({to, ...restProps }) {
    return (
        <ReactRouterLink to={to}>
            <Logo {...restProps}/>
        </ReactRouterLink>
    )
};

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
    return <ButtonLink {...restProps}>{children}</ButtonLink>
    ;
};
