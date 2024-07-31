import React from 'react'
import ChemicalItem from './ChemicalItem'
import AddChemical from './AddChemical'
import { addChemical } from '../redux/chemicalSlice';
import { useDispatch } from 'react-redux';
import SearchBar from './SearchBar';

export default function ChemicalApp() {
  const dispatch = useDispatch()
  const handle_add = (chemical) => {
      dispatch(addChemical(chemical));
  };
  return (
    <div>
      <AddChemical handle_add={handle_add} />
      <SearchBar />
      <ChemicalItem />
    </div>
  )
}
