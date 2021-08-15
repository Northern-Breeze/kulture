import dynamicLinks from '@react-native-firebase/dynamic-links';

const generateLink = async (param, value) => {
  const link = await dynamicLinks().buildShortLink({
    link: `https://northernbreeze.page.link/?${param}=${value}`,
    android: {
      packageName: 'com.northernbreeze.kulture',
    },
    domainUriPrefix: 'https://northernbreeze.page.link',
  });

  return link;
};

export default generateLink;
