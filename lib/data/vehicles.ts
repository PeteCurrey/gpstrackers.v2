export interface Vehicle {
  make: string;
  model: string;
  displayName: string;
  type: 'car' | 'van' | 'motorcycle' | 'motorhome' | 'caravan' | 'plant';
  theftRisk: 'VERY HIGH' | 'HIGH' | 'MEDIUM' | 'LOW';
  thatchamRequired: boolean;
  recommended: string; // SKU of the recommended product
  fact: string;
}

export const vehicles: Vehicle[] = [
  { 
    make: 'ford', model: 'transit', displayName: 'Ford Transit', type: 'van', 
    theftRisk: 'HIGH', thatchamRequired: false, recommended: 'travio-fs100',
    fact: 'The Ford Transit is the most stolen van in the UK.' 
  },
  { 
    make: 'ford', model: 'ranger', displayName: 'Ford Ranger', type: 'van',
    theftRisk: 'HIGH', thatchamRequired: false, recommended: 'travio-fs100',
    fact: 'Ford Ranger theft has risen 340% since 2020.' 
  },
  { 
    make: 'land-rover', model: 'defender', displayName: 'Land Rover Defender', type: 'car',
    theftRisk: 'VERY HIGH', thatchamRequired: true, recommended: 'travio-s5',
    fact: 'Defender theft via relay attack is at epidemic levels. Insurers increasingly require S5+.' 
  },
  { 
    make: 'land-rover', model: 'discovery', displayName: 'Land Rover Discovery', type: 'car',
    theftRisk: 'VERY HIGH', thatchamRequired: true, recommended: 'travio-s5',
    fact: 'Land Rover Discovery is among the top 5 most stolen cars in the UK.' 
  },
  { 
    make: 'bmw', model: '3-series', displayName: 'BMW 3 Series', type: 'car',
    theftRisk: 'HIGH', thatchamRequired: false, recommended: 'travio-s7',
    fact: 'BMW keyless entry models are a primary target for relay attacks.' 
  },
  { 
    make: 'mercedes', model: 'sprinter', displayName: 'Mercedes Sprinter', type: 'van',
    theftRisk: 'HIGH', thatchamRequired: false, recommended: 'travio-fs100',
    fact: 'Sprinters are targeted for their tools and contents as much as the vehicle itself.' 
  },
  { 
    make: 'volkswagen', model: 'transporter', displayName: 'VW Transporter T6', type: 'van',
    theftRisk: 'VERY HIGH', thatchamRequired: false, recommended: 'belt-braces-bundle',
    fact: 'VW Transporter T6 is the most-stolen van in several UK police force areas.' 
  },
  { 
    make: 'toyota', model: 'hilux', displayName: 'Toyota Hilux', type: 'van',
    theftRisk: 'HIGH', thatchamRequired: false, recommended: 'travio-fs100',
    fact: 'Hilux catalytic converter theft is the highest of any vehicle in the UK.' 
  },
  { 
    make: 'range-rover', model: 'sport', displayName: 'Range Rover Sport', type: 'car',
    theftRisk: 'VERY HIGH', thatchamRequired: true, recommended: 'travio-s5plus',
    fact: 'Range Rover Sport is the single most stolen car in the UK. Many insurers now refuse cover without S5+.' 
  },
  { 
    make: 'range-rover', model: 'evoque', displayName: 'Range Rover Evoque', type: 'car',
    theftRisk: 'HIGH', thatchamRequired: true, recommended: 'travio-s5',
    fact: 'Evoque relay attacks account for over 70% of Range Rover theft claims.' 
  },
  { 
    make: 'audi', model: 'a4', displayName: 'Audi A4', type: 'car',
    theftRisk: 'MEDIUM', thatchamRequired: false, recommended: 'travio-s7',
    fact: 'Audi keyless models are a growing target for professional theft gangs.' 
  },
  { 
    make: 'tesla', model: 'model-3', displayName: 'Tesla Model 3', type: 'car',
    theftRisk: 'MEDIUM', thatchamRequired: false, recommended: 'travio-fs100',
    fact: 'Tesla theft is rising as relay attack tools become more accessible.' 
  },
  { 
    make: 'iveco', model: 'daily', displayName: 'Iveco Daily', type: 'van',
    theftRisk: 'MEDIUM', thatchamRequired: false, recommended: 'travio-fs100',
    fact: 'Iveco Daily is widely used in construction — a high-value target for tools inside.' 
  },
  { 
    make: 'nissan', model: 'navara', displayName: 'Nissan Navara', type: 'van',
    theftRisk: 'HIGH', thatchamRequired: false, recommended: 'travio-fs100',
    fact: 'Navara catalytic converter theft has risen 180% since 2022.' 
  },
  { 
    make: 'citroen', model: 'dispatch', displayName: 'Citroën Dispatch', type: 'van',
    theftRisk: 'MEDIUM', thatchamRequired: false, recommended: 'travio-fs003',
    fact: 'Panel van theft for contents is the primary risk for Dispatch owners.' 
  },
  { 
    make: 'peugeot', model: 'expert', displayName: 'Peugeot Expert', type: 'van',
    theftRisk: 'MEDIUM', thatchamRequired: false, recommended: 'travio-fs003',
    fact: 'Peugeot Expert is in the top 20 most-stolen vans in the UK.' 
  },
  { 
    make: 'honda', model: 'africa-twin', displayName: 'Honda Africa Twin', type: 'motorcycle',
    theftRisk: 'HIGH', thatchamRequired: false, recommended: 'travio-at1',
    fact: 'Adventure motorcycles are a prime target — stolen and shipped overseas.' 
  },
  { 
    make: 'harley-davidson', model: 'street-glide', displayName: 'Harley-Davidson Street Glide', type: 'motorcycle',
    theftRisk: 'HIGH', thatchamRequired: false, recommended: 'travio-at1',
    fact: 'Harley-Davidson theft is disproportionately high relative to registration numbers.' 
  },
  { 
    make: 'swift', model: 'motorhome', displayName: 'Swift Motorhome', type: 'motorhome',
    theftRisk: 'MEDIUM', thatchamRequired: false, recommended: 'caravan-shield-ct1',
    fact: 'Motorhome theft peaks in March–May as touring season begins.' 
  },
  { 
    make: 'bailey', model: 'caravan', displayName: 'Bailey Caravan', type: 'caravan',
    theftRisk: 'MEDIUM', thatchamRequired: false, recommended: 'caravan-shield-ct1',
    fact: 'Bailey is the UK\'s most popular caravan brand — and the most commonly stolen.' 
  },
  { 
    make: 'jcb', model: 'excavator', displayName: 'JCB Excavator', type: 'plant',
    theftRisk: 'HIGH', thatchamRequired: false, recommended: 'travio-pt1',
    fact: 'JCB plant theft costs the construction industry over £300M annually.' 
  },
  { 
    make: 'caterpillar', model: 'telehandler', displayName: 'CAT Telehandler', type: 'plant',
    theftRisk: 'HIGH', thatchamRequired: false, recommended: 'travio-pt1',
    fact: 'Telehandlers are among the most targeted pieces of construction equipment.' 
  },
  { 
    make: 'kawasaki', model: 'z900', displayName: 'Kawasaki Z900', type: 'motorcycle',
    theftRisk: 'HIGH', thatchamRequired: false, recommended: 'travio-at1',
    fact: 'Kawasaki naked bikes are targeted for parts as much as for the whole machine.' 
  },
  { 
    make: 'porsche', model: '911', displayName: 'Porsche 911', type: 'car',
    theftRisk: 'HIGH', thatchamRequired: true, recommended: 'travio-s5plus',
    fact: 'Porsche 911 insurers routinely require Thatcham S5 or S5+ as a policy condition.' 
  },
  { 
    make: 'ford', model: 'transit-connect', displayName: 'Ford Transit Connect', type: 'van',
    theftRisk: 'HIGH', thatchamRequired: false, recommended: 'travio-fs100',
    fact: 'Transit Connect is disproportionately targeted in urban areas — high contents value.' 
  },
];
