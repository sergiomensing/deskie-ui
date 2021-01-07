import React from 'react';
import Avatar from '../Avatar';
import { render } from '../../../tests/utils';

describe('Avatar Group', () => {
  it('should render all children', () => {
    const { getAllByText } = render(
      <Avatar.Group>
        <Avatar text="Test Value" />
        <Avatar text="Test Value" />
        <Avatar text="Test Value" />
        <Avatar text="Test Value" />
      </Avatar.Group>,
    );

    expect(getAllByText('TV').length).toBe(4);
  });

  it('should limit children', () => {
    const { getAllByText } = render(
      <Avatar.Group count={2}>
        <Avatar text="Test Value" />
        <Avatar text="Test Value" />
        <Avatar text="Test Value" />
        <Avatar text="Test Value" />
      </Avatar.Group>,
    );

    expect(getAllByText('TV').length).toBe(2);
  });

  it('should show the count of how many children are not shown', () => {
    const { getByText } = render(
      <Avatar.Group count={2}>
        <Avatar text="Test Value" />
        <Avatar text="Test Value" />
        <Avatar text="Test Value" />
        <Avatar text="Test Value" />
      </Avatar.Group>,
    );

    expect(getByText('+2')).toBeInTheDocument();
  });

  it('should can differ in direction', () => {
    const { container } = render(
      <>
        <Avatar.Group direction="horizontal">
          <Avatar text="Test Value" />
          <Avatar text="Test Value" />
        </Avatar.Group>
        <Avatar.Group direction="vertical">
          <Avatar text="Test Value" />
          <Avatar text="Test Value" />
        </Avatar.Group>
      </>,
    );

    expect(container).toMatchSnapshot();
  });
});
