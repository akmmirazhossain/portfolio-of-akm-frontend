// components/Tooltip.js DISABLED
import React from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";

const Tooltip = () => {
  return (
    <>
      <a data-tooltip-id="my-tooltip" data-tooltip-content="Hello world!">
        Test tooltip
      </a>
    </>
  );
};

export default Tooltip;
