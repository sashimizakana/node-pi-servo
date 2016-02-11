'use strict';
const fs = require('fs');
const PIBLASTER = "/dev/pi-blaster"; 
class PiServo{
  constructor(pin,options){
    options = options || {};
    this.pin = pin;
    this.minPulse = options.minPulse || 0.05;
    this.maxPulse = options.maxPulse || 0.2;
    this.currentDegree = options.currentDegree || 0;   
  }
  
  open(){
    return new Promise((resolve,reject)=>{
      this.stream = fs.createWriteStream(PIBLASTER);
      this.stream.on('open',()=>resolve(this));
      this.stream.on('error',()=>reject(this));          
    });
  }
  
  close(){
    this.stream.end();
  }
  
  calcPulse(degree){
    return this.minPulse + (this.maxPulse * (degree / 180));
  }
  
  setDegree(degree){
    const pulse = this.calcPulse(degree);
    this.currentDegree = degree;
    this.stream.write(`${this.pin}=${pulse}\n`);
  }  
}

module.exports = PiServo;