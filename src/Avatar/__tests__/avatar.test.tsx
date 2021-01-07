import React from 'react';
import Avatar from '../Avatar';
import { render } from '../../../tests/utils';

describe('Avatar', () => {
  it('should render with image when available', () => {
    const { container } = render(<Avatar text="Test Value" src="/img.jpg" />);
    expect(container.querySelectorAll('img').length).not.toBe(0);
  });

  it('should fallback on initials when image is nog available', () => {
    const { getByText, container } = render(<Avatar text="Test Value" />);
    expect(getByText('TV')).toBeInTheDocument();
    expect(container.querySelectorAll('img').length).toBe(0);
  });

  it('should render text conditionally', () => {
    const { getAllByText } = render(
      <>
        <Avatar showLabel text="test-value" />
        <Avatar text="test-value" />
      </>,
    );
    expect(getAllByText('test-value').length).toBe(1);
  });

  it('should render subText', () => {
    const { getAllByText } = render(
      <>
        <Avatar showLabel text="test-value" subText="test-value" />
        <Avatar showLabel text="test-value" />
      </>,
    );
    expect(getAllByText('test-value').length).toBe(3);
  });

  it('should highlight the current user', () => {
    const { container } = render(
      <>
        <Avatar showLabel text="test-value" isCurrentUser />
        <Avatar showLabel text="test-value" />
      </>,
    );

    expect(container).toMatchSnapshot();
  });
});
