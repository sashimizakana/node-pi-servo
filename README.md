# node-pi-servo

A Node.js libraly for controlling servo motor using the pi-blaster.

## Requirements

[pi-blaster](https://github.com/sarfata/pi-blaster)

## Installation

```bash
npm install pib-servo
```

## Usage

```node
var PiServo = require('PiServo');

// pass the GPIO number
var sv1 = new PiServo(4); 

sv1.open().then(function(){  
  sv1.setDegree(100); // 0 - 180
});
```

## Lisence

MIT