const MIN_WIDTH = 2;
const CHARACTER = '@';
const SPACE = ' ';
const EOL = '\n';

/**
 * Returns the adidas three stripes logo using `@` characters.
 * @param {number} width - Width of a stripe.
 * @param {number} [stripes] - Number of stripes.
 * @returns {string} adidas logo.
 */
function createLogo(width, stripes = 3) {
  if (width < MIN_WIDTH) {
    throw new Error('Error, minimun width is 2');
  }

  const height = Math.round(Math.sqrt(width));
  const distance = SPACE.repeat(height);
  const body = CHARACTER.repeat(width);
  const matrix = new Array(height * stripes).fill([ body ]);

  const fixStripesHeight = (row, index) => {
    const cols = Math.floor(index / height);
    const fill = new Array(cols).fill(body);

    return row.concat(fill);
  };

  const drawColumns = (row, index) => {
    const missCols = stripes - row.length;
    const emptyCols = SPACE.repeat(width * missCols);
    const fixSpaces = SPACE.repeat(index % height);
    const content = row.join(distance);

    return emptyCols + fixSpaces + content;
  };

  return matrix
    .map(fixStripesHeight)
    .map(drawColumns)
    .join(EOL);
}

module.exports = createLogo;
