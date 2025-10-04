# TypeScript Package Template

[![Lint and Build](https://github.com/alphaolomi/ts-tsup-pkg-skeleton/actions/workflows/main.yml/badge.svg)](https://github.com/alphaolomi/ts-tsup-pkg-skeleton/actions/workflows/main.yml)

A minimal TypeScript package template with modern tooling.

## Features

- 📦 **tsup** - Fast bundler for TypeScript (ESM + CJS + DTS)
- ✅ **Vitest** - Fast unit testing with TypeScript support
- 🔍 **TypeScript** - Strict type checking
- 🚀 **GitHub Actions** - CI/CD workflows included

## Getting Started

```sh
# Install dependencies
npm install

# Build the package
npm run build

# Run tests
npm test

# Watch mode
npm run watch
```

## Development

```sh
npm run lint    # Type check with TypeScript
npm run test    # Run tests with Vitest
npm run build   # Build for production
```

## Package Structure

- `src/` - Source files
- `dist/` - Built files (CJS, ESM, and type declarations)
- Exports both CommonJS and ES modules with full TypeScript support

## License

MIT
