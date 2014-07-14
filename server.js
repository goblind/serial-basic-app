var serialPort = require("serialport");

serialPort.list(function (err, ports) {
  	ports.forEach(function(port) {
   		console.log('comName' + port.comName);
    	console.log('pnpId' + port.pnpId);
		console.log('manufactures' + port.manufacturer);
  	});
});