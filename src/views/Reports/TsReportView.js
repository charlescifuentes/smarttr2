import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, ListGroup, ListGroupItem } from 'reactstrap';

const TsReportView = (props) => {
  const {
    buttonLabel,
    className,
    ts
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>ORDEN DE SERVICIO # {ts.ts_id} </ModalHeader>
        <ModalBody>
            <ListGroup>
                <ListGroupItem><b>Fecha de Creación:</b> {ts.ts_date_start} </ListGroupItem>
                <ListGroupItem><b>Cliente:</b> {ts.customer_name}</ListGroupItem>
                <ListGroupItem><b>Marca:</b> {ts.ts_watch_brand}</ListGroupItem>
                <ListGroupItem><b>Modelo:</b> {ts.ts_watch_brand}</ListGroupItem>
                <ListGroupItem><b>Taller:</b> {ts.ws_name}</ListGroupItem>
                <ListGroupItem><b>Problema:</b> {ts.ts_issue_desc}</ListGroupItem>
                <ListGroupItem><b>Diagnóstico:</b> {ts.ts_diagnosis}</ListGroupItem>
                <ListGroupItem><b>Fecha de entrega:</b> {ts.ts_date_end}</ListGroupItem>
                <ListGroupItem><b>Estado:</b> {ts.status_name}</ListGroupItem>
                <ListGroupItem><b>Valor:</b> {ts.ts_total}</ListGroupItem>
                <ListGroupItem><b>Abono:</b> {ts.ts_payment}</ListGroupItem>
                <ListGroupItem><b>Saldo:</b> {ts.ts_balance}</ListGroupItem>
            </ListGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={toggle}>Cerrar</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default TsReportView;