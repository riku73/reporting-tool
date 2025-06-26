module.exports = {
  ci: {
    collect: {
      url: [
        'http://localhost:3000',
        'http://localhost:3000/services',
        'http://localhost:3000/expertise',
        'http://localhost:3000/cas-etudes',
        'http://localhost:3000/contact',
      ],
      startServerCommand: 'npm run start',
      startServerReadyPattern: 'ready on',
      numberOfRuns: 3,
    },
    assert: {
      preset: 'lighthouse:no-pwa',
      assertions: {
        'categories:performance': ['error', { minScore: 0.95 }],
        'categories:accessibility': ['error', { minScore: 0.95 }],
        'categories:best-practices': ['error', { minScore: 0.95 }],
        'categories:seo': ['error', { minScore: 0.98 }],
        
        // Core Web Vitals
        'largest-contentful-paint': ['error', { maxNumericValue: 1200 }],
        'first-contentful-paint': ['error', { maxNumericValue: 800 }],
        'cumulative-layout-shift': ['error', { maxNumericValue: 0.1 }],
        'total-blocking-time': ['error', { maxNumericValue: 100 }],
        
        // Performance metrics
        'speed-index': ['error', { maxNumericValue: 1500 }],
        'interactive': ['error', { maxNumericValue: 2000 }],
        
        // SEO essentials
        'meta-description': 'error',
        'document-title': 'error',
        'hreflang': 'error',
        'canonical': 'error',
        'robots-txt': 'error',
        
        // Accessibility
        'color-contrast': 'error',
        'image-alt': 'error',
        'heading-order': 'error',
        
        // Best practices
        'is-on-https': 'error',
        'uses-responsive-images': 'error',
        'efficient-animated-content': 'error',
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};