import { Component } from "@angular/core";
import { NotificationService } from "src/app/core/notification/notification.service";

import { ReactFlowEdge, ReactFlowNode } from "src/app/libs/ng-react-flow/react-flow/ReactFlow";

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent {

    public nodes: ReactFlowNode[] = [];
    public edges: ReactFlowEdge[] = [];
  
    private _initialNodes: ReactFlowNode[] = [
      { id: '1', position: { x: 0, y: 0 }, data: { label: '1', }, draggable: false },
      { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
    ];
    private _initialEdges: ReactFlowEdge[] = [{ id: 'e1-2', source: '1', target: '2' }];

    constructor(
        private _notificationService: NotificationService
    ) { }

    public start(): void {

        this.nodes = this._initialNodes;
        this.edges = this._initialEdges;
    }

    public onEdgeClicked(event: any): void {

        console.log('click!');
    }

    public onEdgeAdded(event: any): void {

        this._notificationService.message(`Edge created!`);
    }
}