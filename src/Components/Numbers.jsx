import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button/Button'

const nums = ['7','8','9','4','5','6','1','2','3','0','.'];

const Numbers = ({onClickNumber}) => (
        <section className='numbers'>
            {
                nums.map((num, index) => (
                    <Button key={`btn-number-${index}`} text = {num} clickHandler = {onClickNumber}/>
                ))
            }
        </section>
)


Numbers.propTypes = {
    onClickNumber : PropTypes.func.isRequired
}

export default Numbers
