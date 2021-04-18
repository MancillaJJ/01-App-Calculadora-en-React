import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button/Button'

const operators = ['☓','/','-','+']

const MathOperations = ({onClickOperation, onClickEqual}) =>(
        <section className='math-operations'>
            {
                operators.map((operator, index) => (
                    <Button key = {`btn-oper-${index}`} text = {operator}  clickHandler={onClickOperation} />  
                ))
            }
            <Button text = '='  clickHandler={onClickEqual} />
        </section>
    );


MathOperations.propTypes = {
    onClickOperation : PropTypes.func.isRequired,
    onClickEqual : PropTypes.func.isRequired
}

export default MathOperations
