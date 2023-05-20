import React, { Component } from 'react'
import axios from 'axios';

export default class Studentlistcomponent extends Component {
    constructor(props) {
        super(props)
        this.state={
            students : []
        }
      
    }

    deleteStudent(id){
        axios.delete("http://localhost:3000/students/"+id)
        this.showItems()
    }

    showItems(){
        axios.get("http://localhost:3000/students")
        .then(res =>(
            this.setState({students:res.data})
        ))
    }

    componentDidMount(){
        this.showItems()
    }

    render() {
        return (
            <div>
                <h1>Students List</h1>
           
        <table className='table table-border'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>EMAIL</th>
                    <th>ACTIONS</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                { this.state.students.map((student)=> 

                    <tr key={student.id}>
                        <td>{student.id}</td>
                        <td>{student.name}</td>
                        <td>{student.email}</td>
                        <td><button className='btn btn-danger' onClick={()=>this.deleteStudent(student.id)}>Delete</button></td>
                        <td><button className='btn btn-primary'>Edit</button></td>
                        <td><button className='btn btn-info'>Info</button></td>

                    </tr>

                
             ) }
            </tbody>
        </table>
        </div>
        
        );
}
}

