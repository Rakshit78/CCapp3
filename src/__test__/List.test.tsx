import React from 'react';
import { screen, render } from '@testing-library/react';
import List from '../components/List';

describe('render', () => {
  const page: number = 1;
  const list: any = [];
  test('render happen', () => {
    render(
      <List
        setpage={() => {}}
        navigate={() => {}}
        getjsondata={() => {}}
        list={list}
        page={page}
      />
    );
  });

  test('render happen', () => {
    render(
      <List
        setpage={() => {}}
        navigate={() => {}}
        getjsondata={() => {}}
        list={list}
        page={page}
      />
    );
    expect(screen.getByText('created at')).toBeInTheDocument();
  });

  test('render happen', () => {
    render(
      <List
        setpage={() => {}}
        navigate={() => {}}
        getjsondata={() => {}}
        list={list}
        page={page}
      />
    );
    expect(screen.getByText('url')).toBeInTheDocument();
  });

  test('render happen', () => {
    render(
      <List
        setpage={() => {}}
        navigate={() => {}}
        getjsondata={() => {}}
        list={list}
        page={page}
      />
    );
    expect(screen.getByText('title')).toBeInTheDocument();
  });

  test('render happen', () => {
    render(
      <List
        setpage={() => {}}
        navigate={() => {}}
        getjsondata={() => {}}
        list={list}
        page={page}
      />
    );
    expect(screen.getByText('author')).toBeInTheDocument();
  });
});
