import { Form } from 'native-base';
import React, { Component } from 'react';
import BlogForm from "./form"
class BlogCreate extends Component {
    render() {
        return (
            <BlogForm
            btnName="Create"
            iconName="create"
            />
        );
    }
}

export default BlogCreate;