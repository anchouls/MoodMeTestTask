import React from 'react';
import { useSelector } from 'react-redux';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'name', headerName: 'Name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'sex',
    headerName: 'Sex',
    width: 90,
    valueFormatter: (params) => {
              if (params.value === 0) {
                return 'male'
              } else {
                return 'female'
              }
            },
  },
  {
    field: 'happy',
    headerName: 'Happy',
    type: 'number',
    width: 90,
  },
  {
    field: 'sad',
    headerName: 'Sad',
    type: 'number',
    width: 90,
  },
  {
    field: 'angry',
    headerName: 'Angry',
    type: 'number',
    width: 90,
  },
  {
    field: 'surprised',
    headerName: 'Surprised',
    type: 'number',
    width: 90,
  },
  {
    field: 'afraid',
    headerName: 'Afraid',
    type: 'number',
    width: 90,
  },
  {
    field: 'disgusted',
    headerName: 'Disgusted',
    type: 'number',
    width: 90,
  },
  {
    field: 'neutral',
    headerName: 'Neutral',
    type: 'number',
    width: 90,
  },
  {
    field: 'race',
    headerName: 'Race',
    width: 150,
    valueFormatter: (params) => {
              if (params.value === 0) {
                return 'Caucasoid'
              } else if (params.value === 1) {
                return 'Negroid'
              } else if (params.value === 2) {
                return 'Ethiopian'
              } else if (params.value === 3) {
                return 'Mongoloid'
              } else if (params.value === 4) {
                return 'Americanoid'
              } else if (params.value === 5) {
                return 'Weddo-australoid'
              }
            },
  },
];

export function DataViewer() {
    const data = useSelector((state) => state.stat.data)
    return (
      <div style={{ height: 800, width: '100%' }}>
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={13}
          rowsPerPageOptions={[13]}
        />
      </div>
    );
}
