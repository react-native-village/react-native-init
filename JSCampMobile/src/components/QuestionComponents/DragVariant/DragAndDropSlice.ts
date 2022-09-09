import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: initT = {
  points: [],
  blocks: [],
  responseOrder: [],
  removeId: undefined,
  removeAll: false
}

export const DragAndDropSlice = createSlice({
  name: 'DragAndDrop',
  initialState,
  reducers: {
    reset: (state, action: PayloadAction<boolean | undefined>) => {
      const isUnmount = action?.payload
      state.removeId = initialState.removeId
      state.responseOrder = initialState.responseOrder
      if (!isUnmount) {
        state.removeAll = true
      }
    },
    removeAllEnd: state => {
      state.removeAll = false
    },
    update: (state, action: PayloadAction<positionsT>) => {
      const pos = action.payload
      const { id } = pos
      if (state.points.length >= id + 1) {
        state.points = state.points.map(a => (a.id === id ? pos : a))
      } else {
        state.points.push(pos)
      }
    },
    updateBlocks: (state, action: PayloadAction<blockSizeT>) => {
      const size = action.payload
      const { id } = size
      if (state.blocks.length >= id + 1) {
        state.blocks = state.blocks.map(a => (a.id === id ? size : a))
      } else {
        state.blocks.push(size)
      }
    },
    updateOrder: (state, action: PayloadAction<responseOrderT>) => {
      const item = action.payload
      const { id, blockId } = item
      const isExist = state.responseOrder.find(a => a.id === id)
      if (!isExist) {
        state.responseOrder = state.responseOrder.filter(a => a.blockId !== blockId)
        state.responseOrder.push(item)
      }
    },
    removeFromOrder: (state, action: PayloadAction<number>) => {
      const id = action.payload
      state.removeId = state.responseOrder.find(a => a.id === id)?.blockId
      state.responseOrder = state.responseOrder.filter(a => a.id !== id)
    },
    removeFromOrderIfExist: (state, action: PayloadAction<number>) => {
      const id = action.payload
      state.responseOrder = state.responseOrder.filter(a => a.blockId !== id)
    }
  }
})

export const {
  reset,
  update,
  updateBlocks,
  updateOrder,
  removeFromOrder,
  removeFromOrderIfExist,
  removeAllEnd
} = DragAndDropSlice.actions

export const DragAndDropReducer = DragAndDropSlice.reducer

interface initT {
  points: positionsT[]
  blocks: blockSizeT[]
  responseOrder: responseOrderT[]
  removeId: number | undefined
  removeAll: boolean
}

interface responseOrderT {
  id: number
  text: string
  blockId: number
  width: number
}

interface blockSizeT {
  width: number
  height: number
  id: number
}

export interface positionsT {
  width: number
  height: number
  px: number
  py: number
  id: number
}
