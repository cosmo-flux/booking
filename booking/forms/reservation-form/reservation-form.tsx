import React, { useState } from 'react';
import { TextField } from '@cosmo-flux/design.inputs.text-field';
import { Button } from '@cosmo-flux/design.inputs.button';
import { MenuItem } from '@cosmo-flux/design.navigation.menu';
import { Select } from '@cosmo-flux/design.inputs.select';
import { FormControl } from '@cosmo-flux/design.inputs.form';
import { InputLabel } from '@cosmo-flux/design.inputs.input';
import { Typography } from '@cosmo-flux/design.data-display.typography';
import { Box } from '@cosmo-flux/design.layout.box';

export const MarsReservationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    departureDate: '',
    class: 'Economy',
    specialRequests: '',
  });

  const handleChange = (
    event: React.ChangeEvent<{ name?: string; value: unknown }>
  ) => {
    const name = event.target.name as string;
    setFormData({
      ...formData,
      [name]: event.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    alert('Reservation submitted! See you on Mars!');
  };

  return (
    <Box
      sx={{
        mt: 4,
        p: 3,
        boxShadow: 3,
        borderRadius: 2,
        backgroundColor: 'white',
      }}
    >
      <Typography variant="h4" gutterBottom>
        Mars One-Way Ticket Reservation
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Full Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Email Address"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Age"
          name="age"
          type="number"
          value={formData.age}
          onChange={handleChange}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Preferred Departure Date"
          name="departureDate"
          type="date"
          InputLabelProps={{ shrink: true }}
          value={formData.departureDate}
          onChange={handleChange}
          margin="normal"
          required
        />
        <FormControl fullWidth margin="normal">
          <InputLabel>Class</InputLabel>
          <Select
            name="class"
            value={formData.class}
            onChange={handleChange as any}
          >
            <MenuItem value="Economy">Economy</MenuItem>
            <MenuItem value="Business">Business</MenuItem>
            <MenuItem value="First Class">First Class</MenuItem>
          </Select>
        </FormControl>
        <TextField
          fullWidth
          label="Special Requests"
          name="specialRequests"
          value={formData.specialRequests}
          onChange={handleChange}
          margin="normal"
          multiline
          rows={3}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          Submit Reservation
        </Button>
      </form>
    </Box>
  );
};
