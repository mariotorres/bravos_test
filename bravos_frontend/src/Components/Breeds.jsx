import React, {useState} from 'react';
import {Box, CircularProgress, TextField, Typography} from '@mui/material'
import {getBreeds} from "../hooks/fetchData.js";
import Button from "@mui/material/Button";
import DataTable from "./DataTable.jsx";

const ilike = (str, pattern) => {
    const regex = new RegExp(pattern.replace(/%/g, '.*').replace(/_/g, '.'), 'i');
    return str.match(regex) !== null;
};

const Breeds = () => {
    const [breeds, setBreeds] = useState([]);
    const [filteredBreeds, setFilteredBreeds] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState("");

    React.useEffect(() => {
        getBreeds(page).then((data) => {
            setBreeds(data);
            setFilteredBreeds(data);
        });

    },[])

    React.useEffect(() => {
        if (name !== ""){
            setFilteredBreeds(breeds.filter((breed) => ilike(breed.name, '%'+name+'%')));
        } else {
            setFilteredBreeds(breeds);
        }
    }, [
        name, breeds
    ])

    const handleSetName = (e) => {
        setName(e.target.value);
    }

    const handleClick = () => {
        setLoading(true);
        const new_page = page + 1;
        setPage(new_page);
        getBreeds(new_page).then((data) => {
            if (data.length > 0) {
                setBreeds(breeds.concat(data));
            } else {
                alert("No more breed data available.");
            }
            setLoading(false);
        });
    }

    return <Box p={1}>
        <Typography variant="h5" gutterBottom>
            Dog Breeds
        </Typography>

        <Typography>
            Seach by breed name
        </Typography>

        <Box sx={{paddingTop: 1, paddingBottom: 2}}>

        <TextField fullWidth value={name} onChange={handleSetName} label="Breed Name" />
        </Box>
        {breeds && breeds.length > 0 &&
            <DataTable rows={filteredBreeds} />
        }

        <Box display="flex" flexDirection="row">
            <Box p={2}>
                <Button variant="contained" onClick={handleClick}>
                    Fetch more data
                </Button>
            </Box>
            {loading &&
                <Box p={2}>
                    <CircularProgress color="secondary" />
                </Box>}
        </Box>
    </Box>
}

export default Breeds;