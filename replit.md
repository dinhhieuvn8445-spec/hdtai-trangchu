# HDT AI Course Landing Page

## Overview

This is a modern web application built as a landing page for HDT AI's professional AI courses. The application features a React-based frontend with a Node.js/Express backend, specifically designed to showcase AI training courses (ChatGPT, AI Automation) and handle course registrations. The project implements a full-stack architecture with form handling, data persistence, and a responsive UI built with shadcn/ui components.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern component patterns
- **Routing**: Wouter for lightweight client-side routing
- **UI Framework**: shadcn/ui components built on Radix UI primitives for accessibility and consistency
- **Styling**: Tailwind CSS with custom design tokens and Vietnamese language support
- **State Management**: TanStack React Query for server state management and caching
- **Form Handling**: React Hook Form with Zod validation for type-safe form validation
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules for modern JavaScript features
- **API Design**: RESTful endpoints for registration management
- **Data Storage**: In-memory storage with interfaces designed for easy migration to persistent databases
- **Development**: Hot module replacement and development middleware integrated with Vite

### Data Storage Solutions
- **Current Implementation**: In-memory storage using Map data structures for development
- **Database Schema**: Drizzle ORM with PostgreSQL schema definitions ready for production
- **Migration Strategy**: Drizzle Kit configured for database migrations and schema management
- **Data Models**: Strongly typed with Zod schemas for validation and TypeScript interfaces

### External Dependencies
- **Database**: Neon Database (@neondatabase/serverless) configured for PostgreSQL hosting
- **UI Components**: Comprehensive shadcn/ui component library with Radix UI primitives
- **Styling**: Tailwind CSS with custom Vietnamese design system
- **Icons**: Font Awesome for iconography
- **Fonts**: Google Fonts (Inter) for typography
- **Development**: Replit-specific plugins for development environment integration

### Key Architectural Decisions
- **Monorepo Structure**: Organized with separate client/, server/, and shared/ directories for clear separation of concerns
- **Shared Schema**: Common TypeScript definitions and Zod schemas shared between frontend and backend
- **Type Safety**: End-to-end type safety from database to UI components
- **Responsive Design**: Mobile-first approach with Tailwind CSS breakpoints
- **Vietnamese Localization**: All UI text and content in Vietnamese for target audience
- **Development Experience**: Hot reloading, error overlays, and TypeScript checking for rapid development