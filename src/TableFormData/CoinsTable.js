import React from 'react'
import {Table} from "react-bootstrap"
export default function CoinsTable(props) {

    console.log(props.coinsdata)



  return (
    <div>
    <Table striped bordered hover variant="dark">
    <thead>
      <tr>
        <th>#</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Username</th>
        <th>Username</th>
        <th>Username</th>
      </tr>
    </thead>
    <tbody>

{props.coinsdata.map((item)=>{
    return(

    
    item.bpi.map((item)=>{
        return(
        <tr>
        <td>{item.EUR.code}</td>
        <td>{item.EUR.Symbol}</td>
        <td>{item.EUR.rate}</td>
        <td>{item.EUR.description}</td>
        <td>{item.EUR.rate}</td>
        <td>{item.EUR.rate_float}</td>
      
      </tr>
        )
    })
    )
    

})
    
     }
    </tbody>
  </Table>

    </div>
  )
}
