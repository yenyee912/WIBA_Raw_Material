'reach 0.1';

const commonInteract = {
  ...hasRandom,
  informTimeout: Fun([], Null),

  inventory: UInt,
  reportInventory: Fun([], UInt) // input:warehouse/ factory (0/ 1), get stock level?
};

const warehouseInteract = {
  ...commonInteract,
  deadline: UInt,

  // metadata which to be push to blockchain
  supplierID: Bytes(100),
  supplierName: Bytes(100),
  timestamp: Bytes(100),
  staffID: Bytes(100),
  staffName: Bytes(100),
  materialID: Bytes(100),
  materialName: Bytes(100),
  batchNumber: Bytes(100), // one batch + id= one contract  
  quantity: UInt,

}

const factoryInteract = {
  ...commonInteract,

  acceptMaterial: Fun([UInt], Null),
  
}

export const main = Reach.App(() => {
  const Warehouse = Participant("Warehouse", warehouseInteract);
  const Factory = Participant("Factory", factoryInteract);
  init();

  const informTimeout = () => {
    each([Warehouse, Factory], () => {
      interact.informTimeout();
    });
  };

  Warehouse.only(() => {
    const deadline = declassify(interact.deadline);

    const supplierID = declassify(interact.supplierID);
    const supplierName = declassify(interact.supplierName);
    const timestamp = declassify(interact.timestamp);
    const staffID = declassify(interact.staffID);
    const staffName = declassify(interact.staffName);
    const materialID = declassify(interact.materialID);
    const materialName = declassify(interact.materialName);
    const batchNumber = declassify(interact.batchNumber);    
    const quantity = declassify(interact.quantity);

  });
  
  Warehouse.publish(deadline, supplierID, supplierName, timestamp, staffID, staffName, materialID, materialName, batchNumber, quantity)
  .pay(quantity)

  commit();

  Factory.only(() => {
    interact.acceptMaterial(quantity);
  });

  Factory.pay(quantity)
    .timeout(relativeTime(deadline), () => closeTo(Warehouse, informTimeout));

  
  // const warehouseInventory= inventory- quantity;
  // const factoryInventory = inventory + quantity;

  // each([Warehouse, Factory], () => {
  //   interact.reportInventory(inv);
  // });
  commit();

});
