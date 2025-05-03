import { createSlice } from "@reduxjs/toolkit";

const connectionSlice = createSlice({
  name: "connection",
  initialState: null,
  reducers: {
    addConnections: (state, action) => action.payload,
    updateConnectionStatus: (state, action) => {
      const { userId, isOnline } = action.payload;
      const connection = state.find((conn) => conn._id === userId);
      if (connection) {
        connection.isOnline = isOnline;
      }
    },
    removeConnections: () => null,
  },
});

export const { addConnections, removeConnections, updateConnectionStatus } = connectionSlice.actions;
export default connectionSlice.reducer;
