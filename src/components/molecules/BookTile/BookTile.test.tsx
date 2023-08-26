import {render, screen} from '@testing-library/react-native';
import BookTile from '.';
import {DUMMY_IMAGE_URL} from '../../../constants/components';
import testId from '../../../constants/testId';

describe('Book Tile', () => {
  beforeEach(() => {
    render(
      <BookTile
        title="Never Do It Again!"
        description="book desc"
        price={20000}
        cover={DUMMY_IMAGE_URL}
      />,
    );
  });

  it('Display title of the book', () => {
    expect(screen.getByText('Never Do It Again!')).toBeTruthy();
  });

  it('Display description of the book', () => {
    expect(screen.getByText('book desc')).toBeTruthy();
  });

  it('Display proper price of the book', () => {
    expect(screen.getByText('$20,000'));
  });

  it('Display the cover of the book', () => {
    expect(screen.getByTestId(testId.PICTURE_ATOM).props.source.uri).toEqual(
      DUMMY_IMAGE_URL,
    );
  });
});
