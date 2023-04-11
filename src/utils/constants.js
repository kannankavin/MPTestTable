const API_BASE_URLS = {
  dev: 'http://domainname',
};

const API_URLS = {
  TABLE_ADD: {
    URI: '/api/table/update',
    METHOD: 'POST',
    IS_SECURE: false,
  },
  TABLE_GET: {
    URI: '/api/table/get',
    METHOD: 'GET',
    IS_SECURE: false,
  },
};

const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export {
  API_BASE_URLS,
  API_URLS,
  capitalize,
};