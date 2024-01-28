declare module 'next/config' {
  type ConfigTypes = () => {
    publicRuntimeConfig: {
			NODE_ENV: string
    };
    serverRuntimeConfig: {
      mySecret: string;
    };
  };

  declare const getConfig: ConfigTypes;

  export default getConfig;
}