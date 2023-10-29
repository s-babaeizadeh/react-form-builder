import React from "react";

import { Panel, Placeholder } from "rsuite";

const DraggablePanel = () => {
  return (
    <Panel header="Panel title" shaded bordered>
      <Placeholder.Paragraph />
    </Panel>
  );
};

export default DraggablePanel;
