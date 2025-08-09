#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('Building for Vercel deployment...');

// Build the client
console.log('Building client...');
execSync('vite build --outDir dist', { stdio: 'inherit' });

// Copy API files to api directory
console.log('Setting up API directory...');
if (!fs.existsSync('api')) {
  fs.mkdirSync('api');
}

// Copy essential server files for Vercel functions
const serverFiles = ['server', 'shared'];
serverFiles.forEach(dir => {
  if (fs.existsSync(dir)) {
    execSync(`cp -r ${dir} api/`, { stdio: 'inherit' });
  }
});

console.log('Vercel build completed!');