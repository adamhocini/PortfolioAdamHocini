import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import About from '../About';

describe('About component', () => {
  it('renders each experience highlight exactly once', () => {
    render(<About />);

    const highlightTitles = [
      'Analyse & Résolution de Problèmes',
      'Gestion de Projet & Organisation',
      'Adaptabilité & Polyvalence',
      'Communication & Leadership',
    ];

    highlightTitles.forEach(title => {
      const headings = screen.getAllByRole('heading', { level: 4, name: title });
      expect(headings).toHaveLength(1);
    });
  });
});
