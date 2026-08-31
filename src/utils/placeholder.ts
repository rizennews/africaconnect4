export function getPlaceholderBase64(): string {
  const svg = `
    <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f3f4f6" />
      <text x="50%" y="50%" font-family="sans-serif" font-size="28" fill="#9ca3af" text-anchor="middle" dominant-baseline="middle" font-weight="bold" letter-spacing="4">AFRICACONNECT4</text>
    </svg>
  `;
  const base64 = typeof window === 'undefined'
    ? Buffer.from(svg).toString('base64')
    : window.btoa(svg);
    
  return `data:image/svg+xml;base64,${base64}`;
}
