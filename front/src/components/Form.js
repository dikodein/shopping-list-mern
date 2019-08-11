import React from "react"

export default function Form (props) {

  return (
    <div className="d-flex flex-column justify-content-center align-items-center col-4 mt-5 border rounded p-5 mx-auto">
      {props.children}
    </div>
  )
}