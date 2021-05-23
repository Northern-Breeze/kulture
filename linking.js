const config = {
    screens: {
        Auth: {
        path: "welcome",
      },
      Profile: {
        path: "profile/:id",
        parse: {
          id: (id) => `${id}`,
        },
      },
      Notifications: "notifications",
      Settings: "settings",
    },
  };
  
  const linking = {
    prefixes: ["kulture://app"],
    config,
  };
  
  export default linking;