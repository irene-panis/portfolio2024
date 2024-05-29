/* eslint-disable react/prop-types */
export const ModeButton = ({ onToggle, mode, screen }) => {
  return (
    <button type="button" className={screen} onClick={() => onToggle()}>
    { (mode === 'dark') ?
      '☀' :
      '☁'
    }
    </button>
  )
}