import React, { useContext } from 'react'
import { LuMoon, LuSun } from 'react-icons/lu';
import ThemeContext from '../Providers/Theme/ThemeContext';

const ModeBtn = () => {
  const {mode, dispatch} = useContext(ThemeContext)

  const handleTheme = () => {
    dispatch({
      type : 'Change_Theme'
    })
  }
  return (
    <>
    <button onClick={handleTheme} className={mode ? 'btn bg-dark text-light ' : 'btn bg-warning'} id='themeBtn'>
        {mode ? <LuMoon /> : <LuSun />}
    </button>
    
    </>
  )
}

export default ModeBtn