import { CSSProperties } from 'react';

export const styles = {
  pageWrapper: {
    minHeight: '100vh',
    background: '#F8FAFC',
    padding: '40px 0',
  } as CSSProperties,
  
  container: {
    maxWidth: 1400,
    margin: '0 auto',
    width: '100%',
    padding: '0 24px',
  } as CSSProperties,

  headerSection: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 40,
  } as CSSProperties,

  bannerImage: {
    maxWidth: '450px',
    height: 'auto',
    display: 'block',
  } as CSSProperties,

  searchCard: {
    background: 'white',
    padding: '24px',
    borderRadius: 24,
    boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
    marginBottom: 40,
    border: 'none',
  } as CSSProperties,

  searchInput: {
    borderRadius: 12,
    background: '#F8FAFC',
    border: 'none',
    height: 48,
  } as CSSProperties,

  findButton: {
    height: 48,
    padding: '0 32px',
    borderRadius: 12,
    fontWeight: 700,
  } as CSSProperties,

  filterSidebar: {
    background: 'transparent',
  } as CSSProperties,

  filterTitle: {
    fontSize: 10,
    color: '#94A3B8',
    textTransform: 'uppercase' as const,
    letterSpacing: 1,
    display: 'block',
    marginBottom: 16,
  } as CSSProperties,

  applyButton: {
    borderRadius: 12,
    height: 48,
    fontWeight: 700,
    marginTop: 24,
  } as CSSProperties,
};