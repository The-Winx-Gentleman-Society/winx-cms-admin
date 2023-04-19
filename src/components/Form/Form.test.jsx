import React from 'react';
import { render } from '@testing-library/react';
import Form from './Form';

test('renders a form with children', () => {
    const handleSubmit = jest.fn();

    const { getByTestId, getByText } = render(
        <Form formSubmitFunction={handleSubmit}>
            <input type="text" name="name" placeholder="Name" />
            <button type="submit">Submit</button>
        </Form>
    );

    const form = getByTestId('form');
    const nameInput = getByPlaceholderText('Name');
    const submitButton = getByText('Submit');

    expect(form).toBeInTheDocument();
    expect(nameInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();

    // Simulate form submission
    fireEvent.submit(form);

    expect(handleSubmit).toHaveBeenCalled();
});

describe('Jest', () => {
    it('testing jest', () => {
        expect(1).toBe(1);
    });
});


import { render } from '@testing-library/react';
import Form from './Form';

test('renders a form with the "form" class', () => {
    const formSubmitFunction = (e) => {
        e.preventDefault();
        return;
    }

    const { getByTestId } = render(
        <Form formSubmitFunction={formSubmitFunction}>
            <p>coe</p>
            <Submit text="SALVAR" />
        </Form>
    );

    const formElement = getByTestId('form');
    expect(formElement).toHaveClass('form'); // ele não esta encontrando a class form, se pa não renderiza a class como form
});