import Box from '@mui/material/Box'
import Column from './Column/Column'
import Button from '@mui/material/Button'
import NoteAddIcon from '@mui/icons-material/NoteAdd'
import { SortableContext, horizontalListSortingStrategy } from '@dnd-kit/sortable'

function ListColumns({ columns }) {
  return (
    <SortableContext items={columns?.map(c => c._id)} strategy={horizontalListSortingStrategy}>
      {/**Thành phần <SortableContext> yêu cầu bạn chuyển cho nó mảng đã sắp xếp của các mã định danh duy nhất được liên kết với từng mục có thể sắp xếp thông qua items prop. Mảng này phải có dạng ["1", "2", "3"] chứ không phải [{id: "1"}, {id: "2}, {id: "3}].  */}
      <Box sx={{
        bgcolor: 'inherit',
        width: '100%',
        height: '100%',
        display: 'flex',
        overflowX: 'auto',
        overflowY: 'hidden',
        '&::-webkit-scrollbar-track': { m: 2 }
      }}>
        {columns?.map(column => <Column key={column._id} column={column} />)}
        {/** Add new column */}
        <Box sx={{
          minWidth: '200px',
          maxWidth: '200px',
          mx: 2,
          borderRadius: '6px',
          height: 'fit-content',
          bgcolor: '#ffffff3d'
        }}>
          <Button
            startIcon={<NoteAddIcon />}
            sx={{
              color: 'white',
              width: '100%',
              py: 1
            }}
          >
          Add new column
          </Button>
        </Box>
      </Box>
    </SortableContext>
  )
}

export default ListColumns