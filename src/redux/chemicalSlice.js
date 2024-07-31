import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    chemicals: [
        { id: 1, name: "Hydrochloric Acid", formula: "HCl" },
        { id: 2, name: "Sodium Chloride", formula: "NaCl" },
        { id: 3, name: "Sulfuric Acid", formula: "H2SO4" },
        { id: 4, name: "Ammonia", formula: "NH3" },
        { id: 5, name: "Ethanol", formula: "C2H5OH" }
    ],
    flagFilter: "",
}

const chemicalSlice = createSlice({
    name: "chemicals",
    initialState,
    reducers: {
        addChemical(state, action) {
            const maxId = state.chemicals.reduce((max, chemical) => Math.max(chemical.id, max), 0);
            state.chemicals.push({ id: maxId + 1, ...action.payload});
        },
        deleteChemical(state, action) {
            state.chemicals = state.chemicals.filter(item => item.id !== action.payload);
        },
        updateChemical(state, action) {
            state.chemicals = state.chemicals.map((item) =>
              item.id === action.payload.id
                ? { ...item, name: action.payload.name, formula: action.payload.formula }
                : item
            );
          },
    }
})
export const { addChemical, deleteChemical, updateChemical } = chemicalSlice.actions;
export default chemicalSlice.reducer;