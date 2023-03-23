import * as React from "react";
import ReactFlow, { addEdge, Background, BackgroundVariant, Controls, Edge, MiniMap, Node, ReactFlowProvider, useEdgesState, useNodesState, useReactFlow } from 'reactflow';

import 'reactflow/dist/style.css';
import customNgNode from "./nodes/custom-ng-node";

export type ReactFlowNode<T = any> = {
  id: string;
  position: {
    x: number;
    y: number;
  };
  data: {
    label: string;
    nodeId?: string;
  };
} & Node<T, string>;

export type ReactFlowEdge = {
  id: string;
  source: string;
  target: string;
} & Edge;

export interface ReactFlowComponentProps {
  initialNodes: ReactFlowNode[];
  initialEdges: ReactFlowEdge[];

  onEdgeClick?: (ev: any) => void;
  onEdgeAdded?: (ev: any) => void;

  onNodeClick?: (ev: any) => void;
  onNodeAdded?: (ev: any) => void;
  onNodeDrag?: (ev: any) => void;

  onNodeEdit?: (nodeId: string) => void;
}

interface FlowProps {
  nodes: Node[]
  edges: Edge[]
  onEdgeClick: (ev: any) => void;
  onNodeDrag: (ev: any) => void;
  onNodesChange: (ev: any) => void;
  onEdgesChange: (ev: any) => void;
  onConnect: (p: any) => void;
  onNodeEdit: (nodeId: string) => void;
}

const nodeTypes = {
  'custom-ng-node': customNgNode
};

function Flow(props: FlowProps) {

  const reactFlowInstance = useReactFlow();

  console.log('[OBJ]:', reactFlowInstance.toObject())

  const nodes = props.nodes.map(n => ({
    ...n,
    data: {
      ...n.data,
      onNodeEdit: props.onNodeEdit
    }
  }));
  const edges = props.edges;

  const onEdgeClickHandler = props.onEdgeClick;
  const onNodeDragHandler = props.onNodeDrag;
  const onNodesChange = props.onNodesChange;
  const onEdgesChange = props.onEdgesChange;
  const onConnect = props.onConnect;

  const bgVariant: BackgroundVariant = BackgroundVariant.Dots;

  return (
    <div style={{ width: '75vw', height: '75vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onEdgeClick={onEdgeClickHandler}
        onNodeDrag={onNodeDragHandler}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView>
        <Background variant={bgVariant} gap={12} size={1} />
        <MiniMap style={{height: 120}}></MiniMap>
        <Controls></Controls>
      </ReactFlow>
    </div>);
}

export const ReactFlowComponent: React.FunctionComponent<ReactFlowComponentProps> = (props: ReactFlowComponentProps) => {

  const [nodes, setNodes, onNodesChange] = useNodesState(props.initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(props.initialEdges);

  let onEdgeAddedHandler = (ev: any) => {

    if (typeof props.onEdgeAdded == 'function') {
      props.onEdgeAdded(ev);
    }
  }

  const onEdgeClickHandler = (ev: any) => {
    if (typeof props.onEdgeClick == 'function')
      props.onEdgeClick(ev);
  };

  const onNodeAddedHandler = (ev: any) => {
    if (typeof props.onNodeAdded == 'function')
      props.onNodeAdded(ev);
  };

  const onNodeDragHandler = (ev: any) => {
    if (typeof props.onNodeDrag == 'function')
      props.onNodeDrag(ev);
  };

  const onConnect = React.useCallback((params) => setEdges((eds) => {
      const result = addEdge(params, eds);
      onEdgeAddedHandler(result);
      return result;
    }), [setEdges]);

  const onNodeEdit = (nodeId: string) => {
    if (typeof props.onNodeEdit == 'function')
      props.onNodeEdit(nodeId);
  };

  return (
    <ReactFlowProvider>
      <Flow
        nodes={nodes}
        edges={edges}
        onEdgeClick={onEdgeClickHandler}
        onNodeDrag={onNodeDragHandler}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeEdit={onNodeEdit}></Flow>
    </ReactFlowProvider>
  );
}
