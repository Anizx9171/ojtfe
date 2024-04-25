import { createAsyncThunk } from "@reduxjs/toolkit";
import {findAll} from "./TeacherAPI";

export const fetchTeacher = createAsyncThunk(
    'students/fetchStudents',
    async ({ page = 0, size = 10 ,keyword}, { rejectWithValue }) => {
      try {
        const response = await findAll(page,size,keyword);
        return response.data;
      } catch (err) {
        return rejectWithValue(err.response.data);
      }
    }
  );


  const initialState = {
    students: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
    pagination: {
      page: 0,
      size: 10,
      totalItems: 0,
      totalPages: 0,
    },
  };
  

  const studentsSlice = createSlice({
    name: 'students',
    initialState,
    reducers: {},
    extraReducers: builder => {
      builder
        .addCase(fetchStudents.pending, state => {
          state.status = 'loading';
        })
        .addCase(fetchStudents.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.students = action.payload.content;
          state.pagination = {
            ...state.pagination,
            page: action.payload.number,
            size: action.payload.size,
            totalItems: action.payload.totalElements,
            totalPages: action.payload.totalPages,
          };
  
        })
        .addCase(fetchStudents.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.payload;
        })
        .addCase(addStudent.fulfilled, (state, action) => {
          state.students.push(action.payload);
        })
        .addCase(deleteStudent.fulfilled, (state, action) => {
          state.students = state.students.filter(
            student => student.id !== action.payload
          );
  
        });
      // Xử lý thêm error và pending states cho addStudent và deleteStudent nếu cần
    },
  });