import * as React from 'react';
import { Box } from '@mui/material';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon/index.js';
import { alpha, styled } from '@mui/material/styles/index.js';
import { SimpleTreeView, TreeItem, TreeItemProps, treeItemClasses } from '@mui/x-tree-view/index.js';
import Collapse from '@mui/material/Collapse/index.js';
import { useSpring, animated } from '@react-spring/web';
import { TransitionProps } from '@mui/material/transitions';
import { v4 as uuidv4 } from 'uuid';

export interface DataTreeProps {
  // required
  data: any;
  testId: string;
  // optional
  ariaTitle?: string;
  ariaDescription?: string;
  height?: number;
  maxWidth?: number;
}

export function DataTree({
  ariaTitle = 'DataTree',
  ariaDescription = 'Produces an expandable TreeView of the data',
  data,
  height = 264,
  maxWidth = 400,
  testId = 'dataTree-testId',
}: DataTreeProps): JSX.Element {
  function MinusSquare(props: SvgIconProps) {
    return (
      <SvgIcon fontSize="inherit" style={{ width: 14, height: 14 }} {...props}>
        {/* tslint:disable-next-line: max-line-length */}
        <path
          d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 11.023h-11.826q-.375 0-.669.281t-.294.682v0q0 .401.294 .682t.669.281h11.826q.375 0 .669-.281t.294-.682v0q0-.401-.294-.682t-.669-.281z"
          role="presentation"
        />
      </SvgIcon>
    );
  }

  function PlusSquare(props: SvgIconProps) {
    return (
      <SvgIcon fontSize="inherit" style={{ width: 14, height: 14 }} {...props}>
        {/* tslint:disable-next-line: max-line-length */}
        <path
          d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 12.977h-4.923v4.896q0 .401-.281.682t-.682.281v0q-.375 0-.669-.281t-.294-.682v-4.896h-4.923q-.401 0-.682-.294t-.281-.669v0q0-.401.281-.682t.682-.281h4.923v-4.896q0-.401.294-.682t.669-.281v0q.401 0 .682.281t.281.682v4.896h4.923q.401 0 .682.281t.281.682v0q0 .375-.281.669t-.682.294z"
          role="presentation"
        />
      </SvgIcon>
    );
  }

  function CloseSquare(props: SvgIconProps) {
    return (
      <SvgIcon className="close" fontSize="inherit" style={{ width: 14, height: 14 }} {...props}>
        {/* tslint:disable-next-line: max-line-length */}
        <path
          d="M17.485 17.512q-.281.281-.682.281t-.696-.268l-4.12-4.147-4.12 4.147q-.294.268-.696.268t-.682-.281-.281-.682.294-.669l4.12-4.147-4.12-4.147q-.294-.268-.294-.669t.281-.682.682-.281.696 .268l4.12 4.147 4.12-4.147q.294-.268.696-.268t.682.281 .281.669-.294.682l-4.12 4.147 4.12 4.147q.294.268 .294.669t-.281.682zM22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0z"
          role="presentation"
        />
      </SvgIcon>
    );
  }

  function TransitionComponent(props: TransitionProps) {
    const style = useSpring({
      from: {
        opacity: 0,
        transform: 'translate3d(20px,0,0)',
      },
      to: {
        opacity: props.in ? 1 : 0,
        transform: `translate3d(${props.in ? 0 : 20}px,0,0)`,
      },
    });

    return (
      <animated.div style={style}>
        <Collapse {...props} />
      </animated.div>
    );
  }

  const StyledTreeItem = styled((props: TreeItemProps) => (
    <TreeItem {...props} slots={{ groupTransition: TransitionComponent }} />
  ))(({ theme }) => ({
    [`& .${treeItemClasses.iconContainer}`]: {
      '& .close': {
        opacity: 0.3,
      },
    },
    [`& .${treeItemClasses.groupTransition}`]: {
      marginLeft: 15,
      paddingLeft: 18,
      borderLeft: `1px dashed ${alpha(theme.palette.text.primary, 0.4)}`,
    },
  }));

  const generateContent = (treeItems: any[]) => {
    if (!treeItems || treeItems === null) {
      return null;
    }
    return Object.keys(treeItems).map((treeItemData) => {
      const keyObj: any = treeItemData;
      const el = typeof treeItems[keyObj];
      const key = uuidv4(); // Generate a unique identifier for each tree item. previously [ treeItemData ]
      return (
        <StyledTreeItem aria-label={treeItemData} key={key} itemId={key} label={treeItemData}>
          {el === 'string' && treeItems[keyObj]}
          {el === 'number' && treeItems[keyObj]}
          {el === 'boolean' && treeItems[keyObj]}
          {el === 'object' && el !== null && generateContent(treeItems[keyObj])}
        </StyledTreeItem>
      );
    });
  };

  return (
    <Box m={1}>
      <SimpleTreeView
        aria-label={ariaTitle}
        aria-describedby={ariaDescription}
        data-testid={testId}
        defaultExpandedItems={['3']}
        slots={{
          collapseIcon: MinusSquare,
          endIcon: CloseSquare,
          expandIcon: PlusSquare,
        }}
        sx={{ maxHeight: height, flexGrow: 1, maxWidth: maxWidth, overflowY: 'auto' }}
      >
        {generateContent(data)}
      </SimpleTreeView>
    </Box>
  );
}

export default DataTree;
