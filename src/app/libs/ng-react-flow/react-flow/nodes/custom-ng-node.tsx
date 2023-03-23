import * as React from "react";
import { memo } from "react";

import { Handle, Position } from "reactflow";

const customNgNodeStyle: React.CSSProperties = {

  borderStyle: "none",
  padding: 10,
  borderRadius: '15px 0 15px 0',
  backgroundColor: '#3e3e3e',
  color: '#fff'

};

const primaryColor = '#3f51b5';

export default memo((props: { data: any, isConnectable: boolean }) => {
  return (
    <div style={customNgNodeStyle}>
      <Handle
        type="target"
        position={Position.Left}
        style={{ background: "#555" }}
        onConnect={(params) => console.log("handle onConnect", params)}
        isConnectable={props.isConnectable}
      />

      {/* Content */}
      <div style={{ width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 8 }}>
        <div style={{ borderWidth: '0 4px', borderColor: primaryColor, borderStyle: 'solid', padding: '8px' }}>
          Step de mensagem
        </div>
        <button
          style={{ borderStyle: 'none', borderRadius: 100, padding: '4px 6px', fontSize: 7.5, backgroundColor: primaryColor, color: '#fff', cursor: 'pointer' }}
          onClick={() => console.log('click!')}>
          Editar
        </button>
      </div>
      <hr />
      <table border={1} style={{ width: '100%', marginBottom: 10 }}>
        <tbody>
          <tr>
            <td>
              <small>00:05</small>
            </td>
            <td>
              <small>Confirmação</small>
            </td>
          </tr>
        </tbody>
      </table>
      {/* End content */}

      <Handle
        type="source"
        position={Position.Bottom}
        id="a"
        style={{ left: 25, background: primaryColor, color: '#fff', width: 'min-content', height: 'min-content', borderRadius: 7.5, fontSize: 7.5, padding: '2px 6px', borderStyle: 'none', textTransform: 'uppercase' }}
        isConnectable={true}>
        Sim
      </Handle>
      <Handle
        type="source"
        position={Position.Bottom}
        id="b"
        style={{ left: 60, background: primaryColor, color: '#fff', width: 'min-content', height: 'min-content', borderRadius: 7.5, fontSize: 7.5, padding: '2px 6px', borderStyle: 'none', textTransform: 'uppercase' }}
        isConnectable={true}>
        Não
      </Handle>
    </div>
  );
});
