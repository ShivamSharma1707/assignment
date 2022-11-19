import { Button, Card, CardContent, CardHeader } from "@mui/material";
import { color } from "@mui/system";
import React, { useState } from "react";

function Child(props) {
  return (
    <div style={{ marginLeft: "45%" }}>
      <Button
        variant="contained"
        onClick={() => props.subtract(-1)}
        style={{ background: "red" }}>
        -
      </Button>
      <Button
        variant="contained"
        onClick={() => props.reset(0)}
        style={{ background: "#adadad", margin: "3%" }}>
        RESET
      </Button>
      <Button
        variant="contained"
        onClick={() => props.add(+1)}
        style={{ background: "green" }}>
        +
      </Button>
    </div>
  );
}
function Counter() {
  const [counterB, setCounterB] = useState(0);

  return (
    <>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <CardHeader
            title="Counter Application"
            style={{ background: "#000", color: "#FFF" }}
          />
          <h1 style={{ marginLeft: "51%" }}>{counterB}</h1>
          <Child
            add={(diff) => setCounterB(counterB + diff)}
            reset={(diff) => setCounterB(0)}
            subtract={(diff) => setCounterB(counterB + diff)}
          />
        </CardContent>
      </Card>
    </>
  );
}

export default Counter;
