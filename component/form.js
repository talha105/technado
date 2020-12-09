import React, { Component } from 'react';
import {Container,Item,Input, Button, Icon,Text, Body} from "native-base"
class BlogForm extends Component {
    state={
        title:'',
        body:''
    }
    render() {
    
        return (
            <Container>
                <Body>
                <Item error={this.state.title?false:true}>
                    <Input onChangeText={v=>this.setState({title:v})} placeholder="Tile"/>
                    <Text style={styles.error}>{this.state.title?null:'required'}</Text>
                </Item>
                <Item error={this.state.body?false:true}>
                    <Input onChangeText={v=>this.setState({body:v})} placeholder="body"/>
                    <Text style={styles.error}>{this.state.body?null:'required'}</Text>
                </Item>
                <Button style={{marginTop:20}} block onPress={()=>this.props.action(this.state,this.props.id)}>
                    <Icon name={this.props.iconName}/>
                    <Text>{this.props.btnName}</Text>
                </Button>
                </Body>
            </Container>
        );
    }
}
const styles={
    error:{
        color:'red'
    }
}
export default BlogForm;