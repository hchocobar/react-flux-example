import React, {useContext} from 'react';
import {Context} from "../store/appContext";

export const Services = () => {
  const {store, actions} = useContext(Context);

  return (
    <div className={store.theme}>
      <h1>Services</h1>
      <button onClick={actions.themeDark}>Dark</button>
      <button onClick={actions.themeLight}>Light</button>
    </div>
  )
}