import React from 'react'
import { Table } from 'reactstrap'
import TsReportView from './TsReportView'

const TsReportTable = props => (
    <Table hover responsive>
        <thead>
            <tr>
                <th>ID</th>
                <th>Fecha</th>
                <th>Cliente</th>
                <th>Marca</th>
                <th>Taller</th>
                <th>Estado</th>
                <th>Ver</th>
            </tr>
        </thead>
        <tbody>
            {Array.isArray(props.tsData) ? (
                props.tsData.map(ts => (
                    <tr key={ts.ts_id}>
                        <td>{ts.ts_id}</td>
                        <td>{ts.ts_date_start}</td>
                        <td>{ts.customer_name}</td>
                        <td>{ts.ts_watch_brand}</td>
                        <td>{ts.ws_name}</td>
                        <td>{ts.status_name}</td>
                        <td><TsReportView buttonLabel={"Ver"} ts={ts} /></td>
                    </tr>
                ))
            ): (
                <tr>
                    <td>{props.tsData}</td>
                </tr>
            )}
        </tbody>
    </Table>
)

export default TsReportTable