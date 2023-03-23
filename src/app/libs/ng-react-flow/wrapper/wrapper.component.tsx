import { Component, ViewChild, ViewEncapsulation, ElementRef, EventEmitter, Input, Output, OnInit, OnDestroy, OnChanges, AfterViewInit, SimpleChanges } from "@angular/core";

import * as React from "react";
import * as ReactDOM from "react-dom"
import * as ReactDOMClient from "react-dom";

import { ReactFlowComponent, ReactFlowComponentProps, ReactFlowEdge, ReactFlowNode } from "../react-flow/ReactFlow";

@Component({
    selector: 'ng-react-flow-wrapper',
    templateUrl: './wrapper.component.html',
    styleUrls: [],
    encapsulation: ViewEncapsulation.None
})
export class NgReactFlowLibWrapperComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit {

    @ViewChild('ngReactFlowContainer', { static: true }) containerRef: ElementRef;

    @Input('nodes') public nodes: ReactFlowNode[];
    @Input('edges') public edges: ReactFlowEdge[];

    @Output('onEdgeClicked') public onEdgeClicked = new EventEmitter<any>();
    @Output('onEdgeAdded') public onEdgeAdded = new EventEmitter<any>();

    public root: ReactDOMClient.Root;

    constructor() { }

    ngOnInit(): void {
        // this.render();
      }
    
    ngOnChanges(changes: SimpleChanges): void {

        if (changes) {
            this.render();
        }
    }

    ngAfterViewInit(): void {
        this.render();
    }

    ngOnDestroy() {
        ReactDOM.unmountComponentAtNode(this.containerRef.nativeElement);
    }
    
      private _canRender(): boolean {
        return this.nodes.length > 0 && this.edges.length > 0;
      }
    
      private render(): void {
    
        if (!this._canRender())
          return;
    
        const initialNodes: ReactFlowNode[] = [...this.nodes];
        const initialEdges: ReactFlowEdge[] = [...this.edges];
    
        const onEdgeClicked: ReactFlowComponentProps['onEdgeClick'] = (ev: any) => this.onEdgeClicked.emit(ev);
        const onEdgeAdded: ReactFlowComponentProps['onEdgeAdded'] = (ev: any) => this.onEdgeAdded.emit(ev);
    
        const template = (
          <React.StrictMode>
            <div>
                <ReactFlowComponent
                  initialNodes={initialNodes}
                  initialEdges={initialEdges}
                  onEdgeClick={onEdgeClicked}
                  onEdgeAdded={onEdgeAdded}></ReactFlowComponent>
            </div>
          </React.StrictMode>);
    
          if (!this.root) {
            this.root = ReactDOMClient.createRoot(this.containerRef.nativeElement);
          }
    
          this.root.render(template);
      }
}