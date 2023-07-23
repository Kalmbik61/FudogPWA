import { TYPE_OF_MEAL } from "@/app/useHome.control";
import { IFilter } from "@/components/Filters/useFilters.control";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

export interface IFiltersState {
  filters: IFilter[];
  activeFilter: IFilter;
}

const initialState: IFiltersState = {
  filters: [],
  activeFilter: {
    id: "",
    name: TYPE_OF_MEAL.ALL,
  },
};

export const cartSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilters(
      state: IFiltersState,
      action: PayloadAction<IFilter[]>
    ): IFiltersState {
      return {
        ...state,
        filters: action.payload,
      };
    },
    setActiveFilter(
      state: IFiltersState,
      action: PayloadAction<IFilter>
    ): IFiltersState {
      return {
        ...state,
        activeFilter: action.payload,
      };
    },
  },
  // extraReducers: {
  //   [HYDRATE]: (state, action) => {
  //     return {
  //       ...state,
  //       ...action.payload,
  //     };
  //   },
  // },
});

export const { setFilters, setActiveFilter } = cartSlice.actions;

export default cartSlice.reducer;
