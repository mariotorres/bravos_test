import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';

const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'name', headerName: 'Breed name', width: 150 },
    { field: 'description', headerName: 'Description', width: 150 },
    { field: 'hypoallergenic', headerName: 'Hypoallergenic', width: 150 },
    { field: 'avg_lifespan', headerName: 'Lifespan (avg)', width: 130 },
    { field: 'avg_male_weight', headerName: 'Male weight (avg)', width: 130 },
    { field: 'avg_female_weight', headerName: 'Female weight (avg)', width: 130 },
];

const paginationModel = { page: 0, pageSize: 5 };

export default function DataTable({rows}) {

    return (
        <Paper sx={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{ pagination: { paginationModel } }}
                pageSizeOptions={[5, 10]}
                sx={{ border: 0 }}
                disableRowSelectionOnClick
                disableMultipleRowSelection
            />
        </Paper>
    );
}
