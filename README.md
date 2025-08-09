# HDT AI - Vietnamese AI Education Platform

A modern Vietnamese AI education website built for Vercel deployment, featuring course registration with Google Sheets integration.

## Features

- 🎯 **Modern Landing Page** - Professional Vietnamese AI education platform
- 📚 **Course Catalog** - 3-tier course structure (AI Master, AI Automation, AI Real Work)
- 👨‍🏫 **Instructor Profiles** - Real instructor photos and credentials
- 📝 **Registration System** - Complete form with course selection
- ⏰ **Countdown Timer** - Limited-time offer countdown
- 📊 **Google Sheets Integration** - Automatic data capture to spreadsheet
- 💳 **Payment Info** - Bank transfer details and instructions
- 📱 **Responsive Design** - Mobile-first approach with Tailwind CSS

## Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Backend**: Node.js + Express
- **UI**: shadcn/ui + Tailwind CSS + Radix UI
- **Forms**: React Hook Form + Zod validation
- **State**: TanStack React Query
- **Database**: Drizzle ORM (PostgreSQL ready)
- **Deployment**: Vercel optimized

## Quick Start

### Development

```bash
npm install
npm run dev
```

### Production Build

```bash
npm run build
```

### Vercel Deployment

The project is pre-configured for Vercel deployment:

1. **Push to GitHub**
2. **Connect to Vercel**
3. **Deploy automatically**

Required environment variables for Google Sheets integration:
- `GOOGLE_SHEETS_API_KEY`
- `GOOGLE_SERVICE_ACCOUNT_EMAIL`
- `GOOGLE_PRIVATE_KEY`

## Project Structure

```
├── client/          # React frontend
├── server/          # Express backend
├── shared/          # Shared TypeScript schemas
├── api/             # Vercel serverless functions
├── vercel.json      # Vercel deployment config
└── README.md
```

## Google Sheets Integration

The registration form automatically sends data to Google Sheets:
- Sheet ID: `15dd9lP2bOIPJG6t2bcwJNPSSelTwoy9hyZsnN6Z22gU`
- Captures: Name, Phone, Email, Package, Notes, Timestamp
- Requires Google Service Account credentials

## Deployment Ready

✅ Vercel configuration complete
✅ Static assets optimized
✅ API routes configured
✅ CORS headers set
✅ Environment variables ready
✅ Build scripts optimized

Ready to deploy to Vercel immediately!