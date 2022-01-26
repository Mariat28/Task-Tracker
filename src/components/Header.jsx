import PropTypes from 'prop-types'
import Button from './Button';
const Header = ({ title, onAdd, showAdd }) => {

  return (
    <header className='container mr-auto p-2 flex justify-between'>
      <p className='text-lg font-bold text-slate-600'>{title}</p>
      <Button text= {showAdd ? 'Cancel' : 'Add Task'}
      onAdd={onAdd} showAdd ={showAdd}/>
    </header>
  )
}
Header.propTypes = {
  title : PropTypes.string.isRequired,
}
export default Header
