import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import About from '../About';

describe('About component', () => {
  it('renders main headings and intro text', () => {
    render(<About />);

    expect(screen.getByRole('heading', { name: /À propos de moi/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Parcours académique/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Parcours professionnel/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Qualités personnelles/i })).toBeInTheDocument();

    expect(screen.getByText(/Développeur passionné/i)).toBeInTheDocument();
  });

  it('lists education entries', () => {
    render(<About />);

    expect(screen.getByText('Master ESI')).toBeInTheDocument();
    expect(screen.getByText('Bachelor RPI')).toBeInTheDocument();
    expect(screen.getByText('Epitech Digital')).toBeInTheDocument();
    expect(screen.getByText('Bac STI2D')).toBeInTheDocument();
  });

  it('lists professional experiences', () => {
    render(<About />);

    expect(screen.getByText('Alternant Développeur Power Platform')).toBeInTheDocument();
    expect(screen.getByText('Chef de projet Power Platform')).toBeInTheDocument();
    expect(screen.getByText('Manager & Logistique')).toBeInTheDocument();

    expect(screen.getByText('EDF')).toBeInTheDocument();
    expect(screen.getByText('Digiuz')).toBeInTheDocument();
    expect(screen.getByText('Carrefour Drive')).toBeInTheDocument();
  });

  it('shows personal qualities', () => {
    render(<About />);

    ['Rigoureux', 'Curieux', 'Écologique', "Esprit d'équipe"].forEach((label) => {
      expect(screen.getByText(label)).toBeInTheDocument();
    });
  });
});
