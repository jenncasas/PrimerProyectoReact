import React, { Component } from 'react'

export default class Post extends Component {

    state = {
        post:[]
    }
    async componentDidMount(){ //Se ejecuta una vez que el componente ha sido cargado en pantalla
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json();
        this.setState({post: data})
    }

    render() {
        return (
            <div>
                <h1>Posts</h1>
                {
                    this.state.post.map(post=>{
                        return <div key={post.id}>
                            <h1>{post.title}</h1>
                            <p>{post.body}</p>
                        </div>
                    })
                }
            </div>
        )
    }
}
