import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import Json from '../components/Json';

describe('json renders', () => {
  test('render without creash', () => {
    render(<Json navigate={undefined} jsondata={undefined} />);
  });

  test('snapshot test', () => {
    const componenttree = render(
      <Json navigate={undefined} jsondata={undefined} />
    );
    expect(componenttree).toMatchSnapshot();
  });

  test('button renders', () => {
    render(<Json navigate={undefined} jsondata={undefined} />);
    expect(screen.getByRole('btn')).toBeInTheDocument();
  });

  test('function runs after click', () => {
    const mockfn = jest.fn();
    render(<Json navigate={mockfn} jsondata={undefined} />);
    fireEvent.click(screen.getByRole('btn'));
    expect(mockfn).toHaveBeenCalled();
  });

  test('back text renders', () => {
    render(<Json navigate={undefined} jsondata={undefined} />);

    expect(screen.getByText('back')).toBeInTheDocument();
  });
});
