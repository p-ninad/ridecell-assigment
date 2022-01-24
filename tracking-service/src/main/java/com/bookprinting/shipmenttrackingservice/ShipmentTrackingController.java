package com.bookprinting.shipmenttrackingservice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("http://localhost:3000")
public class ShipmentTrackingController {

    @Autowired
    private ShipmentTrackingRepository repo;

    @GetMapping("/shipment-tracking/{shipmentId}")
    public Shipment getShipmentStatus(@PathVariable Long shipmentId) {
        Shipment shipment = repo.findByShipmentId(shipmentId);
        if(shipment == null) {
            return new Shipment(-1L, String.format("Shipment with ID <%s> not found", shipmentId), null, null);
        }
        return shipment;
    }
}
