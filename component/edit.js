import { Form } from 'native-base';
import React, { Component } from 'react';
import BlogForm from "./form";
import * as action from "../actions"
import { connect } from 'react-redux';
class BlogEdit extends Component {

    
    render() {
        return (
            <BlogForm
            btnName="Save"
            iconName="save"
            action={this.props.editBlog}
            id={this.props.route.params}
            />
        );
    }
}

export default connect(null,action)(BlogEdit);