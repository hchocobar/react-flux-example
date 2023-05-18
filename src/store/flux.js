const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
      theme: 'light',
		},
		actions: {
      themeLight: () => { setStore({ theme: 'light', }) },
      themeDark: () => { setStore({ theme: 'dark', }) },
    },
	}
};

export default getState;