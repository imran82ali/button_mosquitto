
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import { NavLink } from "react-router-dom";

function connect_mqtt() {

var mqtt = require('mqtt');
var options = {
	protocol: 'mqtts',
	clientId: 'YourCliendID' 	
};
var client  = mqtt.connect('mqtt://test.mosquitto.org:8081', options);

client.on('message', function(topic, message) {
  console.log(message.toString());
});

client.subscribe('karachi/millis');
client.subscribe('karachi/light4');

return client;
}

let client = connect_mqtt();

export default function New_button() {
  
  
  return (
    <Stack spacing={2} direction="row">
      {/* <NavLink to="/Newform" style={{ textDecoration: 'none' }} > */}
      < Button variant="contained"
      onClick={() => { 
        client.publish('karachi/light4', 'on');
        console.log('click button');
          }
         } >
    ON
    </Button>

  </Stack>
  );
}
