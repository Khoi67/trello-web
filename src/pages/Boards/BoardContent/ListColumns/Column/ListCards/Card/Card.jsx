import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Card as MuiCard } from '@mui/material'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import GroupIcon from '@mui/icons-material/Group'
import CommentIcon from '@mui/icons-material/Comment'
import AttachmentIcon from '@mui/icons-material/Attachment'

function Card({ temporaryHideMedia }) {
  if (temporaryHideMedia) {
    return (
      <MuiCard sx={{
        cursor: 'pointer',
        boxShadow: '0 1px 1px rgba(0,0,0,0.2)',
        overflow: 'unset'
      }}>
        <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
          <Typography>Dinh Hi Phe Ni Na</Typography>
        </CardContent>
      </MuiCard>
    )
  }
  return (
    <MuiCard sx={{
      cursor: 'pointer',
      boxShadow: '0 1px 1px rgba(0,0,0,0.2)',
      overflow: 'unset'
    }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/279791193_473805404514452_5226888435511285218_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=783fdb&_nc_ohc=bsjWnYW0wPsAX-UBZ8O&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfD7ZK-l4BshT_pl5MXryHMB1o4f7nDQ9pj1zm64u7DFjA&oe=6591EA0A"
        title="NiNa"
      />
      <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
        <Typography>Dinh Hi Phe Ni Na</Typography>
      </CardContent>
      <CardActions sx={{ p: '0 4px 8px 4px' }}>
        <Button size="small" startIcon={<GroupIcon />}>100</Button>
        <Button size="small" startIcon={<CommentIcon />}>50</Button>
        <Button size="small" startIcon={<AttachmentIcon />}>60</Button>
      </CardActions>
    </MuiCard>
  )
}

export default Card