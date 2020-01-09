import React from 'react'
import { Table, Card, CardBody } from 'reactstrap'
import TsReportView from './TsReportView'

const TsReportTable = props => {

    let initialValue = 0
    let sum = 0
    if(Array.isArray(props.tsData)) {
        sum = props.tsData.reduce(function (total, currentValue) {
            return Number(total) + Number(currentValue.ts_total);
        }, initialValue);
    }
    let totalSales = Number(sum).toLocaleString("es-CO");
    
    return (
    <div>
        <Table hover responsive>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Fecha</th>
                    <th>Cliente</th>
                    <th>Marca</th>
                    <th>Taller</th>
                    <th>Estado</th>
                    <th>Valor</th>
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
                            <td>{ts.ts_total}</td>
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
        <Card>
            <CardBody className="totalSum">Total de Venta: {totalSales} </CardBody>
        </Card>
    </div>
    )
}

export default TsReportTable