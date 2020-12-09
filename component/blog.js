import React, { Component } from 'react';
import {connect} from "react-redux";
import _ from "lodash"
import {ActivityIndicator, FlatList,View} from "react-native";
import {Card,CardItem,Body,Text, Left, Right, Button, Icon} from "native-base"
import * as actions from "../actions";
class Blog extends Component {
    state={
        data:[],
        page:1,
        isLoading:true
    }

    setLoading=loading=>this.setState({isLoading:false})

     componentDidMount(){
        this.props.fetchBlogs(this.state.page).then(()=>{
            this.setState({data:this.props.blogs.data})
            this.setState({isLoading:false})
        })


    }
     loadMore=()=>{
        this.setState({page:this.state.page+1,isLoading:true});
        this.props.fetchBlogs(this.state.page).then(()=>{
            this.setState({
                data:_.uniqBy(this.state.data.concat(this.props.blogs.data),i=>i.id),
                isLoading:false})
        })
        
    }
    showSpinner=()=>(
        this.state.isLoading?
        <View style={styles.loader}>
            <ActivityIndicator size="large"/>
        </View>:null
    )
    renderBlogs=({item})=>{
        return(
            <Card>
            <CardItem header>
                <Text>{item.title}</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  {item.body}
                </Text>
              </Body>
            </CardItem>
            <CardItem>
                <Left>
                <Text>Create:  
                    <Text note>{item.created_at}</Text>
                </Text>
                </Left>
                <Right>
                    <Text>{item.id}</Text>
                </Right>
            </CardItem>
            <CardItem>
                <Body>
                <Button block onPress={()=>this.props.navigation.navigate('edit', item.id)}>
                    <Text>Edit</Text>
                </Button>
                </Body>
            </CardItem>
            <CardItem>
                <Body>
                <Button style={styles.btn} block>
                    <Text>Delete</Text>
                </Button>
                </Body>
            </CardItem>
         </Card>
        )

    }

    render() {
        return (
            <View>
            <FlatList
            data={this.state.data}
            renderItem={this.renderBlogs}
            keyExtractor={item=>item.id.toString()}
            onEndReachedThreshold={0.1}
            onEndReached={this.loadMore}
            ListFooterComponent={this.showSpinner}
            />
            <Button style={styles.add} onPress={()=>this.props.navigation.navigate('create')}>
               <Text>Add</Text>
            </Button>
            </View>
        );
    }
}
const styles={
    btn:{
        backgroundColor:'red'
    },
    loader:{
        height:50
    },
    add:{
        position:'absolute',
        bottom:20,
        right:20,
        width:70,
        height:70,
        borderRadius:70,
        backgroundColor:'purple',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
}

function mapStateToProps({blogs}){
    return {blogs}
}

export default connect(mapStateToProps,actions)(Blog);