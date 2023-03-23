import { Component, EventEmitter, Input, Output } from "@angular/core";
import { ReactFlowEdge, ReactFlowNode } from "./react-flow/ReactFlow";

@Component({
    selector: 'ng-react-flow-lib',
    templateUrl: './ng-react-flow.component.html',
    styleUrls: ['./ng-react-flow.component.scss']
})
export class NgReactFlowLibComponent {

    @Input('nodes') public nodes: ReactFlowNode[];
    @Input('edges') public edges: ReactFlowEdge[];

    @Output('onEdgeClicked') public onEdgeClicked = new EventEmitter<any>();
    @Output('onEdgeAdded') public onEdgeAdded = new EventEmitter<any>();

    constructor() { }
}