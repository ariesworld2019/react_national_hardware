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
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';

const ItemCategoryMaster = () => {
    ///////////////**************Choose Button*******/
    const handleFileChangebutton = (event) => {
        const file = event.target.files[0];
        if (file) {
            console.log(file.name); // You can handle the file here
        }
    };

    ///////////////**************For Records All data (Start)*******/
    const columns = [
        { id: 'image', label: 'Product Image', minWidth: 170 },
        { id: 'productname', label: 'Product Name', minWidth: 170 },      
        {
            id: 'activeflag',
            label: 'Status',
            minWidth: 170,
            align: 'left'
        },
        
        { id: 'update1', label: 'Update', minWidth: 170 },  
        { id: 'delete1', label: 'Delete', minWidth: 170 },  
    ];

    function createData(image, productname, activeflag, update1, delete1) {
        return { image, productname, activeflag, update1, delete1 };
    }

    const rows = [
        createData('India', 'China', 'Active','Update', 'Delete'),
        createData('Italy', 'Canada', 'Active', 'Update', 'Delete'),
        createData('United States', 'Australia', 'Active', 'Update', 'Delete'),
        createData('Germany', 'Ireland', 'Inactive', 'Update', 'Delete'),
        createData('Germany', 'Ireland', 'Inactive', 'Update', 'Delete'),
        createData('Germany', 'Ireland', 'Inactive', 'Update', 'Delete'),
        createData('Germany', 'Ireland', 'Inactive', 'Update', 'Delete'),
        createData('Germany', 'Ireland', 'Inactive', 'Update', 'Delete'),
        createData('Germany', 'Ireland', 'Inactive', 'Update', 'Delete'),
        createData('Germany', 'Ireland', 'Inactive', 'Update', 'Delete'),
        createData('Germany', 'Ireland', 'Inactive', 'Update', 'Delete'),
        createData('Germany', 'Ireland', 'Inactive', 'Update', 'Delete'),
        createData('Germany', 'Ireland', 'Inactive', 'Update', 'Delete')
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
                {/************** Contact Form Column */}
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
                                textAlign: { sm: 'center' }, // Center (mobile) and left(medium)
                                fontFamily: 'Circular, sans-serif',
                                //marginBottom: { xs: '16px', md: 0 } // Adds margin to bottom of the heading on small screens
                                fontSize: '18px',
                                color: 'black'
                            }}
                        >
                            MAIN PRODUCT CATEGORY FORM
                        </Typography>
                        <TextField
                            label="*Product Category Name"
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
                                    height: '50px'
                                },
                                '& .MuiInputBase-input': {
                                    color: 'black'
                                }
                            }}
                        />

                        <input
                            accept="image/*"
                            style={{ display: 'none' }}
                            id="file-upload"
                            type="file"
                            onChange={handleFileChangebutton}
                        />
                        <label htmlFor="file-upload">
                            {/* <Button variant="outlined" color="secondary" startIcon={<AttachFileIcon />}>
                                *Choose Image
                            </Button> */}
                            <Button variant="outlined" component="span" color="secondary" startIcon={<AttachFileIcon />} fullWidth>
                                     *Upload Image
                            </Button>
                        </label>

                        <FormGroup>
                            <FormControlLabel
                                control={<Checkbox defaultChecked />}
                                label="Active Product Category"
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
                            startIcon={<PlaylistAddIcon />}
                        >
                            Add New Product
                        </Button>
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
                                Product Category Records
                            </Typography>
                        </Stack>
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
                        <TableContainer sx={{ maxHeight: 420 }}>
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
                                                            
                                        {column.id === 'image' ? (
                                            <Box component="img" src={`/path/to/images/${value}`} alt={row.productname} sx={{ width: 50, height: 50, objectFit: 'cover' }} />
                                        ) : column.id === 'update1' ? (
                                            <Button variant="outlined" color="primary" startIcon={<BorderColorIcon />}>U</Button> // Update button
                                        ) : column.id === 'delete1' ? (
                                            <Button variant="outlined" color="error" startIcon={<DeleteIcon />}>D</Button> // Delete button
                                        ) : (
                                            column.format && typeof value === 'number' ? column.format(value) : value
                                        )}
                                        
                                                            {/* {column.format && typeof value === 'number' ? column.format(value) : value} */}
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
    );
};

export default ItemCategoryMaster;
