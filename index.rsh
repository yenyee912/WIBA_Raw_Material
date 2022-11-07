'reach 0.1'

const BYTES_NUM = 100

const commonInteract = {
  ...hasRandom,
  informTimeout: Fun([], Null),
  reportInventory: Fun([UInt], Null), // input:warehouse/ factory (0/ 1), get stock level?
  seeOutcome: Fun([Bool,  Bytes(BYTES_NUM),  Bytes(BYTES_NUM),  Bytes(BYTES_NUM)], Null),
};

export const main = Reach.App(() => {

    const Warehouse = Participant('Warehouse', {
        //acceptApplication: Fun([Bytes(128), Bytes(128), Bytes(128), Bytes(128)], Null),
        ...commonInteract,
        deadline: UInt,
        inventoryWarehouse: UInt,
        warehouseName: Bytes(BYTES_NUM),

        // metadata which to be push to blockchain
        supplierID:  Bytes(BYTES_NUM),
        supplierName:  Bytes(BYTES_NUM),
        timestamp:  Bytes(BYTES_NUM),
        staffID:  Bytes(BYTES_NUM),
        staffName:  Bytes(BYTES_NUM),
        materialID:  Bytes(BYTES_NUM),
        materialName:  Bytes(BYTES_NUM),
        batchNumber:  Bytes(BYTES_NUM), // one batch + id= one contract  
        quantity: UInt

    })

    const Factory= Participant('Factory', {
        ...commonInteract,
        inventoryFactory: UInt,
        factoryName:  Bytes(BYTES_NUM),
        acceptMaterial: Fun([ Bytes(BYTES_NUM), Bytes(BYTES_NUM), Bytes(BYTES_NUM), Bytes(BYTES_NUM), Bytes(BYTES_NUM),UInt], Bool)
    })

    init()

    const informTimeout = () => {
        each( [Warehouse, Factory], () => {
            interact.informTimeout()
        })
    }

    Warehouse.only(() => {
        const warehouseName = declassify(interact.warehouseName)
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
    Warehouse.publish(warehouseName, inventoryWarehouse, deadline, supplierID, supplierName, timestamp, staffID, staffName, materialID, materialName, batchNumber, quantity)
    commit()

    Factory.only(() => {
        const factoryName = declassify(interact.factoryName)
        const inventoryFactory = declassify(interact.inventoryFactory)
        const result = declassify(interact.acceptMaterial(supplierID, supplierName, materialID, materialName, batchNumber, quantity));
    })
    Factory.publish(factoryName, inventoryFactory, result)
        .timeout(relativeTime(deadline), () => closeTo(Warehouse, informTimeout));
    commit()

    each([Warehouse, Factory], () => {
        interact.seeOutcome(result, factoryName, warehouseName, timestamp)
    })

    exit();
})