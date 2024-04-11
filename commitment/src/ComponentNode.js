import React, { memo } from "react";

const ComponentWrapper = memo(({ component: Component }) => {
  return <Component />;
});

export default ComponentWrapper;
