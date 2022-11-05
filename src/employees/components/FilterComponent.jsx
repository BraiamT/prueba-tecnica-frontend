import { TextField } from '@mui/material';

export const FilterComponent = ({ onFilter, onClear, filterText }) => {
    return (
        <TextField
            label="Buscar por nombre"
            type="text"
            name="name"
            value={ filterText }
            placeholder="Any name..."
            fullWidth
            onChange={ onFilter }
        />
    )
}
