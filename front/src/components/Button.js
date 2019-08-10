import React from 'react';

export default function Button (props) {
  const { className, type, onClick, label } = props
  return (
    <button className={className} type={type} onClick={onClick}>{label}</button>
  )
}