const fs = require('fs');
const request = require('request')
const iosPath = './iosFiles'

var iosFiles = fs.readdirSync(iosPath).filter(file => file.endsWith('.js'));
var ios = [];

// Sort by integer, not by alphabet
for (const file in iosFiles) iosFiles[file] = iosFiles[file].split('.')[0];
iosFiles.sort(function(a, b) { return a - b; });
for (const file in iosFiles) iosFiles[file] += '.js'

for (const file in iosFiles) {
  const jb = require(`${iosPath}/${iosFiles[file]}`)
  for (var i in jb) {
    ios.push(jb[i]);
  }
}

var ret = [];

console.log('Requesting ipsw.me API...')

for (var i in ios) {
  const v = ios[i];
  
  if (!v.hasOwnProperty('build')) {
    console.log(`ERROR: ${v} has no build id`)
    continue;
  }
  
  if (!v.hasOwnProperty('ver')) {
    console.log(`ERROR: ${v.ver} has no version number`)
    continue;
  }
  
  if (!v.hasOwnProperty('devices')) {
    console.log(`ERROR: ${v.build}, ${v.ver} has no devices`)
    continue;
  }
  
  if (!v.hasOwnProperty('beta')) {
    console.log(`ERROR: ${v.build}, ${v.ver} has no beta property`)
    continue;
  }
  
  if (v.beta) {
    continue;
  }
  
  const deviceList = getDeviceArr(v.devices);
  const ipswList = getDeviceIpsw(v.devices);
  
  for (const d in deviceList) {
    request(`https://api.ipsw.me/v4/ipsw/download/${deviceList[d]}/${v.build}`, function (error, response, body) {
      if (!response) {
        //console.log(`${v.build}, ${v.ver}, ${deviceList[d]}: No response`);
        return;
      }
      if (parseInt(response.statusCode) == 404) {
        if (ipswList[d] == 'none') return;
        console.log(`${v.build}, ${v.ver}, ${deviceList[d]}: Not found`)
        ret.push(`${v.build}, ${v.ver}, ${deviceList[d]}`)
        return;
      };
      if (ipswList[d] == 'none') {
        console.log(`${v.build}, ${v.ver}, ${deviceList[d]}: ${response.statusCode}`)
        return;
      }
    });
  }
}

function getDeviceArr(deviceProperty) {
  var ret = [];
  for (var i in deviceProperty) {
    if (deviceProperty[i].hasOwnProperty('identifier')) ret.push(deviceProperty[i].identifier);
    else ret.push(deviceProperty[i]);
  }
  return ret;
}

function getDeviceIpsw(deviceProperty) {
  var ret = [];
  for (var i in deviceProperty) {
    if (deviceProperty[i].hasOwnProperty('ipsw')) ret.push(deviceProperty[i].ipsw);
    else ret.push('');
  }
  return ret;
}