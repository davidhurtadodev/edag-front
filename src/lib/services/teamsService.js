const baseUrl = 'http://localhost:3000/teams';

const getData = async () => {
  try {
    const response = await fetch(baseUrl);

    const jsonData = await response.json();

    return jsonData;
  } catch (err) {
    console.error(err);
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { getData };
