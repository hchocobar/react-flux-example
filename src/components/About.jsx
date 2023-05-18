import React, {useContext} from 'react';
import {Context} from "../store/appContext";

export const About = () => {
  const {store, actions} = useContext(Context);

  return (
    <div className={store.theme}>
      <h1>About</h1>
      <button onClick={actions.themeDark}>Dark</button>
      <button onClick={actions.themeLight}>Light</button>
    </div>
  )
}