import React from "react"

export default function TextInput (props) {
  const { type, placeholder, onChange } = props
  return (
    <div className="form-group">
      <input className="form-control" type={type} placeholder={placeholder} onChange={onChange} />
    </div>
  )
}