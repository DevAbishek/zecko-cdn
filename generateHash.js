const crypto = require('crypto');
const hash = crypto.createHash('sha384');

function generateCSPHash(script) {
  const data = hash.update(script, 'utf-8');
  // return data;
  // return data.digest('base64');
  return (
    'sha384-' +
    data
      .digest('base64')
      .replace(/=/g, '')
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
  );
}

const shopifystr = `console.log("hi prince")`

const ans = generateCSPHash(shopifystr);

console.log(ans);

// 6Tr3pxKYt2vi99Cx70gZFTcjm1EyFOVmocp30el7sFUD6IV9zWGtqci30Gmi3FtH
// sha384-6Tr3pxKYt2vi99Cx70gZFTcjm1EyFOVmocp30el7sFUD6IV9zWGtqci30Gmi3FtH


// d22c99f9cfa50042e9657f65fee2dfd0344d14f4d6b57c87eebe153627b2b7b67ddf2383b71f1ce0fd39635c44f81825

// sha384-DuGt1NdxdR8xlYUsWkRtie7OrySiqRjUhVfC1rQI7x8vzOc3MdnEjcqLch9xIaRU

// with new line in top
// sha384-qKrtzkm2eZZce8oyDTqm9hy3QtLnrOOZPPp5IfVl9CZ0mh9gUjWdFvKu9RGg4UpU

// without new line in top
// sha384-pk4UI7TJnypiCoV19nDOKbnfoHptCR3tzpiTHqvpv2vsFfXmc5NNdqVsAJ1Ah-BE