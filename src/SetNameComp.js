import React, { useState } from "react";
import { Button, FormControl, Input } from "@material-ui/core";
import { auth } from "./firebase";

function SetNameComp() {
  const [fullname, setFullname] = useState("");

  return (
    <div style={{ alignSelf: "center" }}>
      <FormControl>
        <Input
          value={fullname}
          onChange={({ target }) => setFullname(target.value)}
          placeholder="SET Name"
        />
        <Button
          variant="outlined"
          onClick={() =>
            auth.currentUser.updateProfile({ displayName: fullname })
          }
        >
          setName
        </Button>
      </FormControl>
    </div>
  );
}

export default SetNameComp;
