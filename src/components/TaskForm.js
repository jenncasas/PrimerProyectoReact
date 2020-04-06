import React, {Component} from 'react';

export default class TaskForm extends Component {


    state = {
        title: '',
        description: ''
    }

    onSubmit = e => {
        console.log('Enviando...');
        e.preventDefault(); //Cambia comportamiento por defecto de refrescar la pantalla
        this.props.addTask(this.state.title, this.state.description)
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value //interpreta el valor
        })
        // console.log(e.target.name,':', e.target.value);
        // console.log(e.target.value); //datos del evento (escrito)
    }

    render(){
        return(
            <form onSubmit={this.onSubmit}>
                <input name="title" type="text" placeholder="write a task" onChange={this.onChange} value={this.state.title}/>
                <br/>
                <textarea name="description" placeholder="escriba una descripcion" onChange={this.onChange} value={this.state.description}></textarea>
                <input type="submit"/>
            </form>
        )
    }
}