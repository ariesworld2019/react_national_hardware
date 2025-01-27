import React, { useState } from 'react';
import Navbar from './Navbar';
import {
    Box,
    TextField,
    Button,
    Stack,
    Typography,
    MenuItem,
    Select,
    FormControl,
    InputLabel,
    FormGroup,
    FormControlLabel,
    Checkbox,
    Radio,
    RadioGroup
} from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import PersonAddAltSharpIcon from '@mui/icons-material/PersonAddAltSharp';

const SubItemMaster = () => {
     ///////////////**************For Records All data (Start)*******/
        const columns = [
            { id: 'name', label: 'Name', minWidth: 170 },
            { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
            {
                id: 'population',
                label: 'Population',
                minWidth: 170,
                align: 'right'
            },
            {
                id: 'size',
                label: 'Size\u00a0(km\u00b2)',
                minWidth: 170,
                align: 'right'
            },
            {
                id: 'density',
                label: 'Density',
                minWidth: 170,
                align: 'right'
            },
            {
                id: 'density1',
                label: 'Density1',
                minWidth: 100,
                align: 'right'
            },
            {
                id: 'density2',
                label: 'Density2',
                minWidth: 100,
                align: 'right'
            },
            {
                id: 'density3',
                label: 'Density3',
                minWidth: 500,
                align: 'center'
            },
            {
                id: 'density4',
                label: 'Density4',
                minWidth: 500,
                align: 'center'
            }
        ];
    
        function createData(name, code, population, size) {
            return { name, code, population, size };
        }
    
        const rows = [
            createData('India', 'IN', 1324171354, 3287263),
            createData('China', 'CN', 1403500365, 9596961),
            createData('Italy', 'IT', 60483973, 301340),
            createData('United States', 'US', 327167434, 9833520),
            createData('Canada', 'CA', 37602103, 9984670),
            createData('Australia', 'AU', 25475400, 7692024),
            createData('Germany', 'DE', 83019200, 357578),
            createData('Ireland', 'IE', 4857000, 70273),
            createData('Mexico', 'MX', 126577691, 1972550),
            createData('Japan', 'JP', 126317000, 377973),
            createData('France', 'FR', 67022000, 640679),
            createData('United Kingdom', 'GB', 67545757, 242495),
            createData('Russia', 'RU', 146793744, 17098246),
            createData('Nigeria', 'NG', 200962417, 923768),
            createData('Brazil', 'BR', 210147125, 8515767)
        ];
    
        const [page, setPage] = React.useState(0);
        const [rowsPerPage, setRowsPerPage] = React.useState(10);
    
        const handleChangePage = (event, newPage) => {
            setPage(newPage);
        };
    
        const handleChangeRowsPerPage = (event) => {
            setRowsPerPage(+event.target.value);
            setPage(0);
        };
        ///////////////**************For Records All data (End)*******/

  return (
    <div>
         <Navbar></Navbar>

         <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' }, // Stack on mobile, row on large screens
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    //minHeight: '100vh',
                    padding: 2
                }}
            >
                {/************** Item Master Form */}
                <Box
                    component="form"
                    sx={{
                        flex: 1,
                        maxWidth: 350,
                        margin: '0 auto',
                        padding: 1,
                        backgroundColor: 'white',
                        borderRadius: 2,
                        marginTop: { xs: 4, sm: 0 }, // Add top margin on mobile for spacing
                        width: { xs: '90%', sm: '100%' } // 90% width on mobile, 100% on larger screens
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <Stack spacing={1}>
                        
                            <Typography
                                variant="h7"
                                sx={{
                                    margin: 0,
                                    padding: 0,
                                    textAlign: {sm: 'center' }, // Center (mobile) and left(medium)
                                    fontFamily: "Circular, sans-serif",
                                    //marginBottom: { xs: '16px', md: 0 } // Adds margin to bottom of the heading on small screens
                                    fontSize: '18px',
                                    color : 'black',
                                }}
                            >
                               ITEM MASTER FORM
                            </Typography>

                            <FormControl fullWidth>
                                <InputLabel id="select-label">*Select Product Name</InputLabel>
                                <Select
                                    labelId="select-label"
                                    id="select" 
                                    label="*Select Product Name"
                                    sx={{
                                        height: '50px',
                                    }}
                                >
                                    <MenuItem value={'Mobile No'}>Kheti na ojaro</MenuItem>
                                    <MenuItem value={'User Name'}>User Name</MenuItem>
                                    <MenuItem value={'City'}>City</MenuItem>
                                </Select>
                            </FormControl>

                        <TextField
                            label="*Mobile No"
                            variant="outlined"
                            fullWidth
                            type="tel"
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: 'blue'
                                    },
                                    '&:hover fieldset': {
                                        borderColor: 'green'
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: 'black'
                                    },
                                    height: '50px',
                                },
                                '& .MuiInputBase-input': {
                                    color: 'black'
                                }
                            }}
                        />

                        <TextField
                            label="*Password"
                            variant="outlined"
                            fullWidth
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: 'blue'
                                    },
                                    '&:hover fieldset': {
                                        borderColor: 'green'
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: 'black'
                                    },
                                    height: '50px',
                                },
                                '& .MuiInputBase-input': {
                                    color: 'black'
                                }
                            }}
                        />

                        <TextField
                            label="Email Id"
                            variant="outlined"
                            fullWidth
                            type="email"                           
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: 'blue'
                                    },
                                    '&:hover fieldset': {
                                        borderColor: 'green'
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: 'black'
                                    },
                                    height: '50px',
                                },
                                '& .MuiInputBase-input': {
                                    color: 'black'
                                }
                            }}
                        />

                        <TextField
                            label="Address"
                            variant="outlined"
                            fullWidth
                            multiline
                            rows={2}
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: 'blue'
                                    },
                                    '&:hover fieldset': {
                                        borderColor: 'green'
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: 'black'
                                    },
                                },
                                '& .MuiInputBase-input': {
                                    color: 'black'
                                }
                            }}
                        />

                        <TextField
                            label="City"
                            variant="outlined"
                            fullWidth
                            type="tel"
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: 'blue'
                                    },
                                    '&:hover fieldset': {
                                        borderColor: 'green'
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: 'black'
                                    },
                                    height: '50px',
                                },
                                '& .MuiInputBase-input': {
                                    color: 'black'
                                }
                            }}
                        />

                        <TextField
                            label="Pincode"
                            variant="outlined"
                            fullWidth
                            type="tel"
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: 'blue'
                                    },
                                    '&:hover fieldset': {
                                        borderColor: 'green'
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: 'black'
                                    },
                                    height: '50px',
                                },
                                '& .MuiInputBase-input': {
                                    color: 'black'
                                }
                            }}
                        />

                        <Box display="flex" alignItems="center" gap={2}>
                            <FormGroup>
                                <FormControlLabel
                                    control={<Checkbox defaultChecked />}
                                    label="Active User"
                                    sx={{
                                        color: 'black',
                                        fontSize: '30px'
                                    }}
                                    style={{ fontSize: '25px' }}
                                />
                            </FormGroup>

                            <Button
                                variant="contained"
                                color="primary"
                                fullWidth
                                sx={{
                                    backgroundColor: 'green',
                                    '&:hover': {
                                        backgroundColor: '#ff9800',
                                        color: 'black'
                                    }
                                }}
                                // disabled = {(contactNo !=='' ?contactNoError : '') && (email !=='' ?emailError : '')}
                                startIcon={<PersonAddAltSharpIcon />}
                            >
                                Add New User
                            </Button>
                        </Box>
                    </Stack>
                </Box>

                {/********************* Records column */}
                <Box
                    sx={{
                        flex: 1,
                        //height: '100vh',
                        margin: '0 auto',
                        padding: 1,
                        borderRadius: 2,
                        //backgroundColor: 'black',
                        display: { sm: 'block' }, // Hide on mobile
                        //marginTop: { xs: 4, sm: 0 }, // Add top margin on mobile for spacing
                        width: { xs: '90%', sm: '100%' }, // 90% width on mobile, 100% on larger screens
                        '@media (min-width: 1400px) and (max-width: 3500px)': {
                            maxWidth: '80%' // Custom range between lg and xl
                        }
                    }}
                >
                    {/****** User master Heading (Start)*******/}
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'left',
                            justifyContent: 'space-between',
                            width: '100%',
                            flexDirection: { xs: 'column', md: 'row', sm: 'row' }, // Change to column on small screens, row on medium and larger screens
                            //gap: 1, // Adds space between the elements
                            paddingRight: 2,
                            paddingBottom: 1,
                            marginBottom: { xs: 1, md: 0, sm: 0 }
                        }}
                    >
                        <Stack spacing={1}>
                            {/* Heading */}
                            <Typography
                                variant="h5"
                                sx={{
                                    margin: 0,
                                    padding: 0,
                                    textAlign: { xs: 'center', sm: 'left' }, // Center (mobile) and left(medium)
                                    fontFamily: "'Poppins', sans-serif",
                                    width: '100%', // Ensures the heading takes full width when stacked
                                    //marginBottom: { xs: '16px', md: 0 } // Adds margin to bottom of the heading on small screens
                                    fontSize: '30px'
                                }}
                            >
                                User Master Records
                            </Typography>

                            {/* Select the data select method */}
                            <FormControl> 
                                <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group"
                                //value="Active" // Set the default value here 
                                >
                                    <FormControlLabel value="Active" control={<Radio 
                                    sx={{ '&.Mui-checked': { color: 'greenyellow' } }} />} 
                                    label="Active" 
                                    sx={{ '& .MuiFormControlLabel-label': { fontSize: '12px' } }} />
                                    
                                    <FormControlLabel value="Deactive" control={<Radio 
                                    sx={{ '&.Mui-checked': { color: 'salmon' } }} />} label="Deactive" 
                                     sx={{ '& .MuiFormControlLabel-label': { fontSize: '12px' } }} />
                                    
                                    <FormControlLabel value="New User" control={<Radio 
                                    sx={{ '&.Mui-checked': { color: 'purple' } }} />} label="New User Request" 
                                    sx={{ '& .MuiFormControlLabel-label': { fontSize: '12px' } }} />
                                </RadioGroup>
                            </FormControl>

                        </Stack>
                        
                        {/* Textboxes and Button */}
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: { xs: 'column', md: 'row' }, // Stack the textboxes and button on small screens
                                gap: 1, // Adds space between the textboxes and button
                                width: { xs: '95%', sm : '95%', md: '60%' }, // Ensures all elements fit well within the container
                                alignItems: 'center', // Centers items vertically
                                paddingTop: 1,
                                paddingLeft: 1,
                                paddingRight: 1,
                                paddingBottom: 1,
                                justifyContent: 'right', // Center the items horizontally if in column mode
                                backgroundColor: 'white',
                                borderRadius: 2
                            }}
                        >
                            {/* <FormControl fullWidth>
                                <InputLabel id="select-label">Sorting By</InputLabel>
                                <Select
                                    labelId="select-label"
                                    id="select"
                                    value={selectedSortMathod}
                                    onChange={selectSortChange}
                                    label="Sorting By"
                                    sx={{
                                        height: '50px',
                                    }}
                                >
                                    <MenuItem value={'Mobile No'}>Mobile No</MenuItem>
                                    <MenuItem value={'User Name'}>User Name</MenuItem>
                                    <MenuItem value={'City'}>City</MenuItem>
                                </Select>
                            </FormControl> */}

                            <TextField
                                label="Value"
                                variant="outlined"
                                fullWidth
                                sx={{
                                    minWidth: { xs: '100%', sm: '150px' }, // Same as TextBox 1
                                    '& .MuiOutlinedInput-root': {
                                        height: '50px', // Set the height of the input field
                                    },
                                    '& .MuiInputBase-input': {
                                        padding: '4px 10px', // Reduce padding to make the input height smaller
                                        fontSize: '14px', // Optional: Smaller font size for a more compact input
                                    },
                                }}
                            />
                            <Button
                                variant="contained"
                                color="primary"
                                sx={{
                                    minWidth: { xs: '100%', sm: 'auto' } // Full width button on small screens, auto on larger screens
                                }}
                                startIcon={<SearchSharpIcon />}
                            >
                                Search
                            </Button>
                        </Box>
                    </Box>
                    {/****** User master Heading (end)*******/}

                    <Paper
                        sx={{
                            width: '100%',
                            overflow: 'hidden',
                            maxWidth: {
                                xs: 960, // For extra small screens (up to 600px)
                                sm: 960, // For small screens (600px to 960px)
                                md: 960, // For medium screens (960px to 1280px)
                                lg: 960, // For large screens (1280px and above)
                                xl: '100%',
                                xxl: '100%'
                            },
                            '@media (min-width: 1400px) and (max-width: 3500px)': {
                                maxWidth: '100%' // Custom range between lg and xl
                            }
                        }}
                    >
                        <TableContainer sx={{ maxHeight: 390 }}>
                            <Table stickyHeader aria-label="sticky table">
                                <TableHead>
                                    <TableRow>
                                        {columns.map((column) => (
                                            <TableCell
                                                key={column.id}
                                                align={column.align}
                                                style={{
                                                    minWidth: column.minWidth,
                                                    backgroundColor: '#1976d282', // Black background for header
                                                    color: 'black', // White text color for header
                                                    fontWeight: 'bold',
                                                    fontSize: '16px',
                                                    padding: 7
                                                }}
                                            >
                                                {column.label}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
                                        return (
                                            <TableRow
                                                hover
                                                role="checkbox"
                                                tabIndex={-1}
                                                key={row.code}
                                                sx={{
                                                    backgroundColor: index % 2 === 0 ? '#f2f2f2' : '#fff' // Alternate row striping
                                                }}
                                            >
                                                {columns.map((column) => {
                                                    const value = row[column.id];
                                                    return (
                                                        <TableCell
                                                            key={column.id}
                                                            align={column.align}
                                                            sx={{
                                                                padding: '5px 8px' // Decrease padding for cells (vertical and horizontal)
                                                                //fontSize: '16px', // Optional: Adjust font size if needed
                                                            }}
                                                        >
                                                            {column.format && typeof value === 'number' ? column.format(value) : value}
                                                        </TableCell>
                                                    );
                                                })}
                                            </TableRow>
                                        );
                                    })}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <TablePagination
                            rowsPerPageOptions={[10, 25, 100]}
                            component="div"
                            count={rows.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </Paper>
                </Box>
            </Box>
      
    </div>
  )
}

export default SubItemMaster
