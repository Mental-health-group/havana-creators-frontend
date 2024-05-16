import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FormControl, FormLabel, TextField } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Register() {
  const [open, setOpen] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    password: '',
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    // Send formData to backend
    fetch('your-backend-api-endpoint', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        setFormData({
          name: '',
          email: '',
          password: '',
        });
        handleClose(); 
        alert('Form submitted successfully!');
      })
      .catch(error => {
        console.error('There was an error submitting the form:', error);
        alert('There was an error submitting the form. Please try again later.');
      });
  };

  return (
    <div>
      <Button onClick={handleOpen} disableRipple sx={{ textTransform: 'none', color: 'white', textAlign: 'center', fontSize: '20px' }} className='bg-yellow-500'>Signup</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        
      >
        <Box sx={style} >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Sign Up
          </Typography>
          <FormControl fullWidth className='flex gap-4'>
            <FormLabel htmlFor='name'>Enter Name:</FormLabel>
            <TextField
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
              placeholder="Full Name"
              className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
            />
            <FormLabel htmlFor='email'>Enter Email:</FormLabel>
            <TextField
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              placeholder="Email"
              className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
            />
            <FormLabel htmlFor='password'>Enter Password:</FormLabel>
            <TextField
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              fullWidth
              placeholder="Password"
              type="password"
              className="py-3 px-2 bg-[#d5f2ec] rounded-lg "
            />
          </FormControl>
          <Button onClick={handleSubmit} variant="contained" color="primary">Submit</Button>
        </Box>
      </Modal>
    </div>
  );
}
