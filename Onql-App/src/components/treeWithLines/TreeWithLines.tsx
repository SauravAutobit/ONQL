import { SimpleTreeView } from "@mui/x-tree-view/SimpleTreeView";

import { TreeItem } from "@mui/x-tree-view/TreeItem";
import { ExpandMore, ChevronRight } from "@mui/icons-material";

export default function TreeWithLines() {
  return (
    <SimpleTreeView
      aria-label="tree with lines"
      slots={{
        expandIcon: ChevronRight,
        collapseIcon: ExpandMore,
      }}
      sx={{
        height: 240,
        flexGrow: 1,
        maxWidth: 400,
        overflowY: "auto",
        "& .MuiTreeItem-group": {
          marginLeft: 15,
          paddingLeft: 18,
          borderLeft: "1px dashed rgba(0,0,0,0.4)",
        },
      }}
    >
      <TreeItem itemId="1" label="Applications">
        <TreeItem itemId="2" label="Calendar" />
        <TreeItem itemId="3" label="Chrome" />
        <TreeItem itemId="4" label="WebStorm" />
      </TreeItem>
      <TreeItem itemId="5" label="Documents">
        <TreeItem itemId="6" label="MUI">
          <TreeItem itemId="7" label="index.js" />
        </TreeItem>
      </TreeItem>
    </SimpleTreeView>
  );
}
