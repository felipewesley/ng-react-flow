import * as React from "react";
import ReactFlow, { addEdge, Background, BackgroundVariant, Node, useEdgesState, useNodesState } from 'reactflow';

import 'reactflow/dist/style.css';

export type ReactFlowNode<T = any> = {
  id: string;
  position: {
    x: number;
    y: number;
  };
  data: {
    label: string;
  };
} & Node<T, string>;

export type ReactFlowEdge = {
  id: string;
  source: string;
  target: string;
};

export interface ReactFlowComponentProps {
  initialNodes: ReactFlowNode[];
  initialEdges: ReactFlowEdge[];

  onEdgeClick?: (ev: any) => void;
  onEdgeAdded?: (ev: any) => void;

  onNodeClick?: (ev: any) => void;
  onNodeAdded?: (ev: any) => void;
}

export const ReactFlowComponent: React.FunctionComponent<ReactFlowComponentProps> = (props: ReactFlowComponentProps) => {

  const [nodes, setNodes, onNodesChange] = useNodesState(props.initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(props.initialEdges);

  const onEdgeAddedHandler = (ev: any) => {

    if (typeof props.onEdgeAdded == 'function')
      props.onEdgeAdded(ev);
  }

  const onEdgeClickHandler = (ev: any) => {

    if (typeof props.onEdgeClick == 'function')
      props.onEdgeClick(ev);
  };

  const onNodeAddedHandler = (ev: any) => {

    if (typeof props.onNodeAdded == 'function')
      props.onNodeAdded(ev);
  };

  const onConnect = React.useCallback(
    (params) => setEdges((eds) => {

      const result = addEdge(params, eds);

      onEdgeAddedHandler(result);

      return result;
    }), [setEdges]);

  const bgVariant: BackgroundVariant = BackgroundVariant.Dots;

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onEdgeClick={onEdgeClickHandler}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        >
          <Background variant={bgVariant} gap={12} size={1} />
        </ReactFlow>
    </div>
  );
}
