import React from 'react'
import {connect} from 'react-redux'
import actions from '../duck/actions'


const MoviesForm = ({add}) => {

    const movieInput = React.createRef()

    const addMovie = (e) => {
        e.preventDefault()
        add(movieInput.current.value)
        console.log('form', movieInput.current.value)
    }

    return <form onSubmit={addMovie}>
        <input ref={movieInput}/>
        <button type='submit'>Dodaj film</button>
    </form>
}

//obiekt ktory zawiera fukncje ktore chcemy wywolac na store
    const mapDispatchToProps = dispatch => ({
        add: movie => dispatch(actions.add(movie)) 

    })

export default connect(null, mapDispatchToProps) (MoviesForm);