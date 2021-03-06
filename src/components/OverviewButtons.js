import React from "react";
import { Button } from "@dhis2/ui";

const OverviewButton = (props) => {
  return (
    <Button
      onClick={() => {
        props.setClickedModal(props.id);
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
