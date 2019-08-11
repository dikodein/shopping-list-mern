import React from "react"

export default function TextInput (props) {
  const { type, placeholder, onChange, value } = props
  return (
    <div className="form-group">
      <input 
        className="form-control" 
        type={type} 
        placeholder={placeholder} 
        onChange={onChange} 
        value={value}
      />
    </div>
  )
}