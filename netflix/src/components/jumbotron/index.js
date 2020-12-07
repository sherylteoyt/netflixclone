import React from 'react'
import {Container, Inner, Pane, Title, SubTitle, Image} from './styles/jumbotron'

//compound components - give ability to user to pass down whatever they want, and will honour that receiving object or value (whatever it is)
// we will apply whatever is passed down to the first one passed in
export default function Jumbotron({direction = 'row', ...restProps}) {
    return(
        <Item direction = {direction}>
            <Inner>
                {children}
            </Inner>
        </Item>
    )
}

//Item has a div with a width of 100 and goes across the entire page but in inner, we lock the image to 1000px4
//Can make CSS mods to Item (i.e. a full width border)

//Create a compound component 
//While we can create the Jumbotron Container in it's own component, this is nicer and utilise one file for the component with many different use cases 
//Great thing about compound components is that a user can use what they want 
//If they don't want something with the jumbotron, can remove it 
Jumbotron.Container = function JumbotronContainer({ children, ...restProps}) {
    return <Container { ...restProps}>{children}</Container>
}

//switch out pane because using styled components 
Jumbotron.Pane = function JumbotronPane({ children, ...restProps}) {
    return <Pane { ...restProps}>{children}</Pane>
}

Jumbotron.Title = function JumbotronTitle({ children, ...restProps}) {
    return <Title { ...restProps}>{children}</Title>
}

Jumbotron.SubTitle = function JumbotronSubTitle({ children, ...restProps}) {
    return <SubTitle { ...restProps}>{children}</SubTitle>
}

Jumbotron.Image = function JumbotronImage({ ...restProps}) {
    return <Image { ...restProps}/>
}