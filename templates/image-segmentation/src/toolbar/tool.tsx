// tslint:disable
import * as React from 'react';
import { Circle } from './circle';
import Icon from 'material-ui/Icon';

export function Tool(
  { color, name, count, onClick, selected, visible }: {
    color: string,
    name: string,
    count: number,
    onClick: Function,
    selected: boolean,
    visible: boolean,
  }
) {
  return (
    <div
      style={{
        display: 'flex',
        flexGrow: '1',
        alignItems: 'center',
        width: '100%',
        borderBottom: '1px solid #c1c1c1',
        padding: '10px 0px',
        cursor: 'pointer',
        backgroundColor: selected ? '#e4e4e4ad' : 'inherit'
        // tslint:disable-next-line
      } as any}
      onClick={() => onClick()}
    >
      {/* tslint:disable-next-line */}
      <div style={{display: 'flex', flexGrow: '1', alignItems: 'center', margin: '0px 15px'} as any}>
        <Circle color={color}/>
        <div style={{marginLeft: '15px'}}>{name}</div>
        <div style={{marginLeft: '5px'}}>({count})</div>
        {/* tslint:disable-next-line */}
        <div style={{display: 'flex', flexGrow: '1'} as any}></div>
        <Icon
          style={{
            color: 'grey',
            marginRight: '10px'
          }}
          onClick={() => console.log('Visbility change')}
        >visibility</Icon>
      </div>
    </div>
  );
}
