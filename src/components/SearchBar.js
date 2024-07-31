import React from 'react'
import { Container, Input } from 'reactstrap'

export default function SearchBar() {
    return (
        <Container>
            <div className='searchBar'>
                <input type='text' placeholder='Find the chemical name.....'></input>
                <button>
                    <span><i class="fa-solid fa-magnifying-glass"></i></span>
                </button>
            </div>
        </Container>
    )
}
