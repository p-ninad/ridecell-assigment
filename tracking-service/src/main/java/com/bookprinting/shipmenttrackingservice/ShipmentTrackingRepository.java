package com.bookprinting.shipmenttrackingservice;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ShipmentTrackingRepository extends JpaRepository<Shipment, Long> {

    Shipment findByShipmentId(Long id);
}
