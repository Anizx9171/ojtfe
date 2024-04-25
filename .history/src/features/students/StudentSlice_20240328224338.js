import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "/src/common/api/axiosConfig";
import { findAll, edit, add,remove,exportExcel} from "./StudentAPI";

export const fetchStudents = createAsyncThunk(
  "students/fetchStudents",
  async ({ page = 0, size = 10, keyword }, { rejectWithValue }) => {
    try {
      const response = await findAll(page, size, keyword);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const addStudentFromExcel = createAsyncThunk(
  'students/addStudentFromExcel',
  async (file, { dispatch, rejectWithValue }) => {
    try {
      const formData = new FormData();
      formData.append('excelFile', file);
      const response = await exportExcel(formData);

      // Giả sử response trả về mảng các student
      const students = response.data;
      
      // Nếu server trả về không phải là mảng, bạn có thể throw error
      if (!Array.isArray(students)) {
        throw new Error('Invalid excel format');
      }

      // Xử lý thêm từng student từ dữ liệu đã nhận
      await Promise.all(students.map(student => dispatch(addStudent(student))));

      return students;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const addStudent = createAsyncThunk(
  "students/addStudent",
  async (studentData, { rejectWithValue }) => {
    try {
      const response = await add(studentData);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const deleteStudent = createAsyncThunk(
  "students/deleteStudent",
  async (studentId, { rejectWithValue }) => {
    try {
      const res = await remove(studentId) ;
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const update = createAsyncThunk(
  "students/edit",
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const response = await edit(id, data);
      console.log("sss", update);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  students: [],
  status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
  pagination: {
    page: 0,
    size: 20,
    totalItems: 0,
    totalPages: 0,
  },
};

const studentsSlice = createSlice({
  name: "students",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.students = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchStudents.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchStudents.fulfilled, (state, action) => {
        state.status = "succeeded";
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
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(addStudent.fulfilled, (state, action) => {
        state.students.push(action.payload.data);
      })
      .addCase(addStudent.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(deleteStudent.fulfilled, (state, action) => {
        state.students = state.students.filter(
          (student) => student.id !== action.payload.data
        );
      })
      .addCase(update.fulfilled, (state, action) => {
        // Xử lý action edit
        // state.status = "succeeded";
        state.error = null;
        const index = state.students.findIndex(
          (cls) => cls.id === action.payload.id
        );
        if (index !== -1) {
          state.students[index] = action.payload;
        }
      })
      .addCase(update.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
    // Xử lý thêm error và pending states cho addStudent và deleteStudent nếu cần
  },
});

// Export các actions nếu cần custom actions
// export { fetchStudents, addStudent, deleteStudent };

// Export selector nếu bạn muốn sử dụng trong các components
export const selectAllStudents = (state) => state.students.students;

// Export reducer
export default studentsSlice.reducer;
