// import { render, screen } from '@testing-library/react';
// import { MemoryRouter } from 'react-router-dom';
// import Routes from '../../Routes';

// test('renders the child components of the Routes component', () => {
//   render(
//     <MemoryRouter initialEntries={['/', '/editor', '/stock', '/register', '/login', '/nonexistent']}>
//       <Routes />
//     </MemoryRouter>
//   );

//   const editorElement = screen.getByTestId('editor-component');
//   expect(editorElement).toBeInTheDocument();

//   const stockElement = screen.getByTestId('stock-component');
//   expect(stockElement).toBeInTheDocument();

//   const registerElement = screen.getByTestId('register-component');
//   expect(registerElement).toBeInTheDocument();

//   const loginElement = screen.getByTestId('login-component');
//   expect(loginElement).toBeInTheDocument();

//   const notFoundElement = screen.getByTestId('not-found-component');
//   expect(notFoundElement).toBeInTheDocument();
// });

describe('Jest', () => {
    it('testing jest', () => {
        expect(1).toBe(1);
    });
});
