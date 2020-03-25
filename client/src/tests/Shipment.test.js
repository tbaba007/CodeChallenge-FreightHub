const Shipment=require('../service/shipment.service');

describe('#get all shipments', () => {
    it('should load all shipments',()=>{
        return Shipment.fetchAllShipments()
        .then(data=>{
            expect(data).toBeDefined()
           
        })
    })
});

describe('#get shipmentById', () => {
    it('should load all shipments By Id',()=>{
        return Shipment.fetchShipmentById('S1000')
        .then(data=>{
            expect(data).not.toBe('Found')   
        })
    })
});
describe('#update shipmentById', () => {
    it('should update shipmentname by Id',()=>{
        return Shipment.updateShipment('S1000',{ name: 'test' })
        .then(data=>{
            expect(data).not.toBe('Found')   
        })
    })
});