package com.bookprinting.shipmenttrackingservice;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Shipment {

    @Id
    private Long shipmentId;

    @Column(name = "status")
    private String shipmentStatus;

    @Column
    private String source;

    @Column
    private String destination;

    public Shipment() {
    }

    public Shipment(Long id, String shipmentStatus, String source, String destination) {
        this.shipmentId = id;
        this.shipmentStatus = shipmentStatus;
        this.source = source;
        this.destination = destination;
    }

    public Long getShipmentId() {
        return shipmentId;
    }

    public void setShipmentId(Long shipmentId) {
        this.shipmentId = shipmentId;
    }

    public String getShipmentStatus() {
        return shipmentStatus;
    }

    public void setShipmentStatus(String shipmentStatus) {
        this.shipmentStatus = shipmentStatus;
    }

    public String getSource() {
        return source;
    }

    public void setSource(String source) {
        this.source = source;
    }

    public String getDestination() {
        return destination;
    }

    public void setDestination(String destination) {
        this.destination = destination;
    }
}
