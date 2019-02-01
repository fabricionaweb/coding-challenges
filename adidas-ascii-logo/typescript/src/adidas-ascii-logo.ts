const MIN_WIDTH = 2;
const CHARACTER = '@';
const SPACE = ' ';
const EOL = '\n';

type Row = Array<string>;
type Matrix = Array<Row>;

/**
 * Returns the adidas three stripes logo using `@` characters.
 * @param width - Width of a stripe.
 * @param [stripes=3] - Number of stripes.
 * @returns adidas logo.
 */
export function createAdidasAsciiLogo(width: number, stripes = 3): string {
  if (width < MIN_WIDTH) {
    throw new Error('Error, minimun width is 2');
  }

  const height = Math.round(Math.sqrt(width));
  const distance = SPACE.repeat(height);
  const body = CHARACTER.repeat(width);
  const matrix: Matrix = new Array(height * stripes).fill([ body ]);

  const fixStripesHeight = (row: Row, index: number): Row => {
    const cols = Math.floor(index / height);
    const fill: Row = new Array(cols).fill(body);

    return row.concat(fill);
  };

  const drawColumns = (row: Row, index: number): string => {
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
