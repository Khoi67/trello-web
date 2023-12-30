import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import DashboardIcon from '@mui/icons-material/Dashboard'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Tooltip from '@mui/material/Tooltip'
import Button from '@mui/material/Button'
import PersonAddIcon from '@mui/icons-material/PersonAdd'

const MENU_STYLES = {
  color: 'white',
  bgcolor: 'transparent',
  border: 'none',
  paddingX: '5px',
  borderRadius: '4px',
  '.MuiSvgIcon-root': {
    color: 'white'
  },
  '&:hover': {
    bgcolor: 'primary.50'
  }
}

function BoardBar() {
  return (
    <Box sx={{
      width: '100%',
      height: (theme) => theme.trello.boardBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 2,
      paddingX: 2,
      overflowX: 'auto',
      backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Chip
          sx={MENU_STYLES}
          icon={<DashboardIcon />}
          label="Khoi Yeu Ni Na"
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<VpnLockIcon />}
          label="Public/Private Workspace"
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<AddToDriveIcon />}
          label="Add to Google Drive"
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<BoltIcon />}
          label="Automation"
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<FilterListIcon />}
          label="Filter"
          clickable
        />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button
          variant="outlined"
          startIcon={<PersonAddIcon />}
          sx={{
            color: 'white',
            borderColor: 'white',
            '&:hover': { borderColor: 'white' }
          }}
        >Invite</Button>
        <AvatarGroup
          max={4}
          sx={{
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              fontSize: 16,
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              '&:first-of-type': { bgcolor: '#a4b0be'}
            }
          }}
        >
          <Tooltip title="NiNa">
            <Avatar
              alt="NiNa"
              src="https://scontent.fsgn2-11.fna.fbcdn.net/v/t39.30808-6/396953630_804343464793976_6848171849886945059_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=5dpwT2XqXVYAX_XX9zK&_nc_ht=scontent.fsgn2-11.fna&oh=00_AfD-OE5P2vWOUZ9Ihrt0LKIg0qih0GeKEhLjl2aI9VecXw&oe=65903804" />
          </Tooltip>
          <Tooltip title="NiNa">
            <Avatar
              alt="NiNa"
              src="https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/279791193_473805404514452_5226888435511285218_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=783fdb&_nc_ohc=bsjWnYW0wPsAX-UBZ8O&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfD7ZK-l4BshT_pl5MXryHMB1o4f7nDQ9pj1zm64u7DFjA&oe=6591EA0A" />
          </Tooltip>
          <Tooltip title="NiNa">
            <Avatar
              alt="NiNa"
              src="https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/279791193_473805404514452_5226888435511285218_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=783fdb&_nc_ohc=bsjWnYW0wPsAX-UBZ8O&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfD7ZK-l4BshT_pl5MXryHMB1o4f7nDQ9pj1zm64u7DFjA&oe=6591EA0A" />
          </Tooltip>
          <Tooltip title="NiNa">
            <Avatar
              alt="NiNa"
              src="https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/279791193_473805404514452_5226888435511285218_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=783fdb&_nc_ohc=bsjWnYW0wPsAX-UBZ8O&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfD7ZK-l4BshT_pl5MXryHMB1o4f7nDQ9pj1zm64u7DFjA&oe=6591EA0A" />
          </Tooltip>
          <Tooltip title="NiNa">
            <Avatar
              alt="NiNa"
              src="https://scontent.fsgn2-11.fna.fbcdn.net/v/t39.30808-6/396953630_804343464793976_6848171849886945059_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=5dpwT2XqXVYAX_XX9zK&_nc_ht=scontent.fsgn2-11.fna&oh=00_AfD-OE5P2vWOUZ9Ihrt0LKIg0qih0GeKEhLjl2aI9VecXw&oe=65903804" />
          </Tooltip>
          <Tooltip title="Khoi">
            <Avatar
              alt="Khoi"
              src="https://lh3.googleusercontent.com/a/ACg8ocJwH-5Ua3iHcSyJ7UsvP-7loQ0mshhpiYOn1x9IpgSh5CY=s288-c-no" />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar
