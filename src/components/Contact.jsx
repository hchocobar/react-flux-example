import React, {useContext} from 'react';
import {Context} from "../store/appContext";

export const Contact = () => {
  const {store, actions} = useContext(Context);

  return (
    <div className={store.theme}>
      <h1>Contact</h1>
      <button onClick={actions.themeDark}>Dark</button>
      <button onClick={actions.themeLight}>Light</button>
      <span> with flux</span>
    </div>
  )
}