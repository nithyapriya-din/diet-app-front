import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { Form } from 'react-final-form'

import Submit from '../Submit'
import { fetchMeal, deleteMeal } from '../../actions/meals'

function DeleteMeal(props) {
    const navigate = useNavigate()
    const [submitted, setSubmitted] = useState(false)

    let mealId = useParams().id
    useEffect(() => {props.fetchMeal(mealId)}, [])

    function onSubmit() {
        props.deleteMeal(mealId)
        setSubmitted(true)
    }

    useEffect(() => {
        if (submitted) {
            navigate('/meals')
        }
    }, [props.fetchCount])

    return(
        <section className='section'>
            <h4 className='title is-4'>Are you sure you want to delete &#8220;{props.selectedMeal.name}&#8221;?</h4>
            <Form 
                onSubmit={onSubmit}
                render={({ handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <Submit submitText='Yes, Delete It' submitColor='is-danger' cancel='/meals'/>
                    </form>
                )}
            />

        </section>
    )
}

function mapStateToProps(state) {
    return {
        selectedMeal: state.meals.selectedMeal,
        fetchCount: state.meals.fetchCount
    }
}

export default connect(mapStateToProps, { fetchMeal, deleteMeal })(DeleteMeal)