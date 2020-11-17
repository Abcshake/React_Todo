import React from 'react';
import Box from '@material-ui/core/Box';

export default function Display() {
  return (
    <div style={{ width: '100%' }}>
      <Box display="flex"
       p={9} m={2} bgcolor="#ffbaf6"
       fontSize = {{md: 'h4.fontSize'}}
       >
        {"I hope your day is better now!"}
      </Box>
    </div>
  );
}