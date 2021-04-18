import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button/Button'

const FuncButtons = ({onContentClear, onDelete, onChange}) => (
        <section className='functions'>
             <Button type="button-long-text" text = 'C' clickHandler = {onContentClear}/>
             <Button  type="button-long-text" text = 'CE' clickHandler = {onDelete}/>
             <Button type="button-long-text" text = '+/-' clickHandler = {onChange}/>
        </section>
    )

FuncButtons.propTypes = {
    onContentClear : PropTypes.func.isRequired,
    onDelete       : PropTypes.func.isRequired,
    onChange       : PropTypes.func.isRequired
}

export default FuncButtons
