import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button'; // Ajusta la ruta según donde esté el archivo Button.js

describe('Button Component', () => {
  it('renders the button with the correct label', () => {
    render(<Button label="Click me" />);

    // Verifica que el texto del botón sea el esperado
    const button = screen.getByText('Click me');
    expect(button).toBeInTheDocument();
  });

  it('applies the correct classes for size', () => {
    render(<Button label="Click me" size="large" />);

    // Verifica que el botón tenga la clase correspondiente al tamaño
    const button = screen.getByText('Click me');
    expect(button).toHaveClass('button--large');
  });

  it('applies the correct classes for primary and secondary button', () => {
    const { rerender } = render(<Button label="Click me" primary={true} />);
    
    // Verifica que tenga la clase para el botón primario
    let button = screen.getByText('Click me');
    expect(button).toHaveClass('button--primary');
    
    // Rerenderiza el botón como secundario
    rerender(<Button label="Click me" primary={false} />);
    button = screen.getByText('Click me');
    expect(button).toHaveClass('button--secondary');
  });

  it('calls the onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<Button label="Click me" onClick={handleClick} />);

    const button = screen.getByText('Click me');
    fireEvent.click(button);

    // Verifica que la función onClick haya sido llamada
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('does not apply a background color style when no backgroundColor is provided', () => {
    render(<Button label="Click me" />);

    const button = screen.getByText('Click me');
    expect(button.style.backgroundColor).toBe('');
  });
});
