import React from 'react'
import { Table } from 'reactstrap'

const TsReportTable = props => (
    <Table bordered dark>
        <thead>
            <tr>
                <th>Fecha</th>
            </tr>
        </thead>
        <tbody>
            {props.tsData.map(ts => (
                <tr>
                    <td>{ts.customer_firstname}</td>
                </tr>
            ))}
            
        </tbody>
    </Table>
)

export default TsReportTable