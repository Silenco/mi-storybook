// Input.test.js
import React from 'react'; // Agrega esta importación
import { render, screen, fireEvent } from '@testing-library/react';
import {Input} from './Input';

describe('Input component', () => {
  it('renders the input with the correct placeholder', () => {
    render(<Input placeholder="Enter text" value="" onChange={() => {}} />);
    const input = screen.getByPlaceholderText('Enter text');
    expect(input).toBeInTheDocument();
  });

  it('shows and hides password correctly when toggled', () => {
    render(<Input placeholder="Password" value="" onChange={() => {}} isPassword={true} />);
    
    const input = screen.getByPlaceholderText('Password');
    const button = screen.getByRole('button', { name: 'Show password' });
  
    // Inicialmente el tipo debería ser "password"
    expect(input.type).toBe('password');
  
    // Al hacer clic en el botón, el tipo debería cambiar a "text"
    fireEvent.click(button);
    expect(input.type).toBe('text');
  
    // Al hacer clic nuevamente, debería volver a "password"
    fireEvent.click(button);
    expect(input.type).toBe('password');
  });

  it('calls onChange when typing', () => {
    const handleChange = jest.fn();
    render(<Input placeholder="Enter text" value="" onChange={handleChange} />);
    
    const input = screen.getByPlaceholderText('Enter text');
    fireEvent.change(input, { target: { value: 'Hello' } });
    
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith('Hello'); // Verifica el valor actualizado
  });

  it('does not call onChange when typing if value is empty', () => {
    const handleChange = jest.fn();
    render(<Input placeholder="Enter text" value="" onChange={handleChange} />);
    
    const input = screen.getByPlaceholderText('Enter text');
    fireEvent.change(input, { target: { value: '' } });

    expect(handleChange).toHaveBeenCalledTimes(0); // Se debe llamar una vez, incluso con valor vacío
  });
});
