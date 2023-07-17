import React from 'react'
import ReactDom from "react-dom"

const modal_style = {
  position: "fixed",
  top: "50%",
  bottom: "50%",
  translate: "translate(-50%, -50%)",
  backgroundcolor: "#FFF",
  padding: "50px",
  zIndex: 1000
}

const overlay_style = {
  position: "fixed",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundcolor: "rgba(0, 0, 0, 0.7)",
  zIndex: 1000
}

export default function Modal({ open, children, onClose }) {
  if (!open) return null;
  return ReactDom.createPortal(
    <>
      <div style={overlay_style} />
        <div style={modal_style}>
        <button onClick={onClose}>Close Me</button>
        <div>{children}</div>
      </div>
    </>,
    document.getElementById("portal")
  )
}
