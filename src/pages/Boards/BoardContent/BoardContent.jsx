import Box from '@mui/material/Box'
import ListColumns from './ListColumns/ListColumns'
import { mapOrder } from '~/utils/sorts'
import {
  DndContext,
  PointerSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors
} from '@dnd-kit/core'
import { useEffect, useState } from 'react'
import { arrayMove } from '@dnd-kit/sortable'

function BoardContent({ board }) {

  const pointerSensor = useSensor(PointerSensor, {
    activationConstraint: {
      distance: 10
    }
  })
  // Require the mouse to move by 10 pixels before activating
  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: 10
    }
  })
  // Nhấn giữ 250ms và dung sai của cảm ứng 500px thì mới kích hoạt event
  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: {
      delay: 250,
      tolerance: 500
    }
  })
  const sensors = useSensors(mouseSensor, touchSensor)
  // Trải nghiệm tốt nhất kh bị bug

  const [orderredColumns, setOrderredColumns] = useState([])

  useEffect(() => {
    setOrderredColumns(mapOrder(board?.columns, board?.columnOrderIds, '_id'))
  }, [board])

  const handleDragEnd = (event) => {
    console.log('handleDragEnd ', event)
    const { active, over } = event

    //Neu click vao ma khong kéo thi return tránh lỗi
    if (!over) return

    if (active.id !== over.id) {
      // Lay vi tri cu tu thang active
      const oldIndex = orderredColumns.findIndex(c => c._id === active.id)
      // Lay vi tri moi tu thang over
      const newIndex = orderredColumns.findIndex(c => c._id === over.id)

      // Dung arrayMove de sap xep mang
      const dndOrderredColumn = arrayMove(orderredColumns, oldIndex, newIndex)
      // Xu ly API
      // const dndOrderredColumnIds = dndOrderredColumn.map(c => c._id)
      // console.log('dndOrderredColumn: ', dndOrderredColumn)
      // console.log('dndOrderredColumnIds: ', dndOrderredColumnIds)


      // Cap nhat lai state column sau khi keo tha
      setOrderredColumns(dndOrderredColumn)
    }
  }
  return (
    <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
      <Box
        sx={{
          backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
          width: '100%',
          height: (theme) => theme.trello.boardContentHeight,
          p: '10px 0'
        }}
      >
        <ListColumns columns={orderredColumns}/>
      </Box>
    </DndContext>
  )
}

export default BoardContent
