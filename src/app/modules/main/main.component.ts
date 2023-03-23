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
      { id: '1', position: { x: 0, y: 0 }, data: { label: 'Exemplo 1', nodeId: '1', prop: 10 }, draggable: false, },
      { id: '2', position: { x: 0, y: 100 }, data: { label: 'Exemplo 2', nodeId: '2' } },
      { id: '3', position: { x: 0, y: 200 }, data: { label: 'Exemplo 3', nodeId: '3' }, type: 'custom-ng-node' }
    ];
    private _initialEdges: ReactFlowEdge[] = [
      { id: 'e1-2', source: '1', target: '2', animated: true }
    ];

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

        console.log(event);
        this._notificationService.message(`Edge created!`);
    }

    public onNodeDrag(event: any): void {

      // console.log('[DRAG]: ', event);
    }

    public onNodeEdit(nodeId: string): void {

      console.log('[NODE-ID]: ', nodeId);

      const node: { label: string } = this.nodes.find(n => n.data.nodeId == nodeId)?.data ?? { label: 'Desconhecido' };

      this._notificationService.message(`${node.label.toUpperCase()}`);
    }
}
