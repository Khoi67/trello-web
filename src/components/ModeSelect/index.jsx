import { useColorScheme } from '@mui/material/styles'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import Box from '@mui/material/Box'

function ModeSelect() {
  const { mode, setMode } = useColorScheme()
  const handleChange = ( event ) => {
    // setAge(event.target.value)
    const selectedMode = event.target.value
    setMode(selectedMode)
  }

  return (
    <FormControl size="small">
      <InputLabel id="demo-select-small-label">Mode</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={ mode }
        label="Mode"
        onChange={handleChange}
      >
        <MenuItem value="dark">
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1
          }}>
            <DarkModeOutlinedIcon fontSize='small'/> Dark
          </Box>
        </MenuItem>
        <MenuItem value="light">
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1
          }}>
            <LightModeIcon fontSize='small'/> Light
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  )
}

export default ModeSelect