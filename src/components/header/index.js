import React, {useState} from 'react';
import {Link as ReachRouterLink} from 'react-router-dom'
import { 
    Group, 
    Background, 
    Container, 
    Text, 
    Link, 
    Logo, 
    ButtonLink,
    Feature,
    FeatureCallOut,
    PlayButton,
    Search,
    SearchIcon,
    SearchInput
} from "./styles/header";

export default function Header({bg = true, children, ...restProps}) {
    return bg ? <Background {...restProps}>{children}</Background> : children
}

Header.Frame = function HeaderFrame({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

Header.Group = function HeaderGroup({children, ...restProps}) {
    return <Group {...restProps}>{children}</Group>
}

Header.Search = function HeaderSearch({searchTerm, setSearchTerm, ...restProps}) {
    const [searchActive, setSearchActive] = useState(false)
    return (
        <Search {...restProps}>
            <SearchIcon onClick={()=> setSearchActive(!searchActive)}>
                <img src='/images/icons/search.png' alt='Search'/>
            </SearchIcon>
            <SearchInput
                value={searchTerm}
                onChange={({target}) => setSearchTerm(target.value)}
                placeholder='Search files and series'
                active={searchActive}
            />
            </Search>
        )
}

Header.Logo = function HeaderLogo({to, ...restProps}) {
    return (
        <ReachRouterLink to={to}>
            <Logo {...restProps}/>
        </ReachRouterLink>
    )
}

Header.Text = function HeaderText({children, ...restProps}) {
    return <Text {...restProps}>{children}</Text>
}

Header.Link = function HeaderLink({children, ...restProps}) {
    return <Link {...restProps}>{children}</Link>
}


Header.ButtonLink = function HeaderButtonLink({children, ...restProps}) {
    return <ButtonLink {...restProps}>{children}</ButtonLink>
}

Header.Feature = function HeaderFeature({children, ...restProps}) {
    return <Feature {...restProps}>{children}</Feature>
}

Header.FeatureCallOut = function HeaderFeatureCallOut({children, ...restProps}) {
    return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>
}


Header.PlayButton = function HeaderPlayButton({children, ...restProps}) {
    return <PlayButton {...restProps}>{children}</PlayButton>
}
