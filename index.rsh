'reach 0.1'

const commonInteract = {
  ...hasRandom,
  informTimeout: Fun([], Null),
  reportInventory: Fun([UInt], Null), // input:warehouse/ factory (0/ 1), get stock level?
  seeOutcome: Fun([Bool], Null)
};

export const main = Reach.App(() => {

    const Warehouse = Participant('Warehouse', {
        //acceptApplication: Fun([Bytes(128), Bytes(128), Bytes(128), Bytes(128)], Null),
        ...commonInteract,
        deadline: UInt,
        inventoryWarehouse: UInt,
        // metadata which to be push to blockchain
        supplierID: Bytes(100),
        supplierName: Bytes(100),
        timestamp: Bytes(100),
        staffID: Bytes(100),
        staffName: Bytes(100),
        materialID: Bytes(100),
        materialName: Bytes(100),
        batchNumber: Bytes(100), // one batch + id= one contract  
        quantity: UInt

    })

    const Factory= Participant('Factory', {
        ...commonInteract,
        inventoryFactory: UInt,
        // acceptMaterial: Fun([Bytes(100),Bytes(100),Bytes(100),Bytes(100),Bytes(100),UInt], Null)
        acceptMaterial: Fun([Bytes(100),Bytes(100),Bytes(100),Bytes(100),Bytes(100),UInt], Bool)
    })

    init()

    const informTimeout = () => {
        each( [Warehouse, Factory], () => {
            interact.informTimeout()
        })
    }

    Warehouse.only(() => {
        const inventoryWarehouse = declassify(interact.inventoryWarehouse)
        const deadline = declassify(interact.deadline)
        const supplierID = declassify(interact.supplierID);
        const supplierName = declassify(interact.supplierName);
        const timestamp = declassify(interact.timestamp);
        const staffID = declassify(interact.staffID);
        const staffName = declassify(interact.staffName);
        const materialID = declassify(interact.materialID);
        const materialName = declassify(interact.materialName);
        const batchNumber = declassify(interact.batchNumber);    
        const quantity = declassify(interact.quantity);
    })
    Warehouse.publish(inventoryWarehouse, deadline, supplierID, supplierName, timestamp, staffID, staffName, materialID, materialName, batchNumber, quantity)
    commit()

    Factory.only(() => {
        const inventoryFactory = declassify(interact.inventoryFactory)
        const result = declassify(interact.acceptMaterial(supplierID, supplierName, materialID, materialName, batchNumber, quantity));
    })
    Factory.publish(inventoryFactory, result)
    commit()

    each([Warehouse, Factory], () => {
        interact.seeOutcome(result)
    })

    exit();
})