import React, {useState} from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import {getBreeds} from "../hooks/fetchData.js";
import {Button, Box, Typography, FormControl, InputLabel, Select, MenuItem, CircularProgress} from "@mui/material";

const DogChart = () => {
    const [breeds, setBreeds] = useState([]);
    const [option, setOption] = useState("weight");
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const weightSort = (a,b ) => b.avg_male_weight - a.avg_male_weight;
    const lifespanSort = (a,b ) => b.avg_lifespan - a.avg_lifespan;

    React.useEffect(() => {
        getBreeds().then((breeds) => {
            setBreeds(breeds.sort(weightSort));
        });
    }, []);

    const handleChange = (event) => {
        const option = event.target.value;
        setOption(option);
        if (option === "weight") {
            setBreeds(breeds.sort(weightSort));
        } else {
            setBreeds(breeds.sort(lifespanSort));
        }
    };

    const handleClick = () => {
        setLoading(true);
        const new_page = page + 1;
        setPage(new_page);
        getBreeds(new_page).then((data) => {
            if (data.length > 0) {
                const all_breeds = breeds.concat(data);
                if (option === "weight") {
                    setBreeds(all_breeds.sort(weightSort));
                } else {
                    setBreeds(all_breeds.sort(lifespanSort));
                }
            } else {
                alert("No more breed data available.");
            }
            setLoading(false);
        });
    }

    return (
        <React.Fragment>
            <Box p={1}>
                <Typography variant="h5" gutterBottom>
                    Breed Attributes Chart
                </Typography>
            </Box>

            <Box sx={{ width: 150, padding: 1 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Variable</InputLabel>
                    <Select
                        variant="outlined"
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={option}
                        label="Variable"
                        onChange={handleChange}
                    >
                        <MenuItem value="weight">Weight</MenuItem>
                        <MenuItem value="lifespan">Lifespan</MenuItem>
                    </Select>
                </FormControl>
            </Box>

            <Box p={1} sx={{height: '600px'}}>
                <ResponsiveContainer width="100%" height="100%">
                    {option === "weight" ?
                        <BarChart
                            width={500}
                            height={300}
                            data={breeds}
                            margin={{
                                top: 20,
                                right: 30,
                                left: 20,
                                bottom: 60,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" angle={-15} textAnchor="end"/>
                            <YAxis />
                            <Tooltip />
                            <Legend verticalAlign="top"/>
                            <Bar dataKey="avg_male_weight"  fill="#8884d8" />
                            <Bar dataKey="avg_female_weight" fill="#82ca9d" />
                        </BarChart>
                        :
                        <BarChart
                            width={500}
                            height={300}
                            data={breeds}
                            margin={{
                                top: 20,
                                right: 30,
                                left: 20,
                                bottom: 60,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" angle={-15} textAnchor="end"/>
                            <YAxis />
                            <Tooltip />
                            <Legend verticalAlign="top"/>
                            <Bar dataKey="avg_lifespan"  fill="#8884d8" />
                        </BarChart>
                    }
                </ResponsiveContainer>
            </Box>

            <Box p={1} display="flex" flexDirection="row">
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

        </React.Fragment>

    );
}

export default DogChart;