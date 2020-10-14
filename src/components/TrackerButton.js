import React, { useState } from "react";
import { Button } from "@dhis2/ui";

const OverviewButton = (props) => {
  return (
    <Button
      onClick={() => {
        props.setClickedTracker(true);
        {
          console.log(props.name);
        }
      }}
      dataTest="dhis2-uicore-button"
      name="Primary button"
      primary
      type="button"
      value="default"
    >
      {props.name}
    </Button>
  );
};

export default OverviewButton;
