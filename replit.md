# J Penn Planning - Event Planning & Community Building Platform

## Overview

J Penn Planning is a modern web application showcasing an elegant event planning and community building service led by Jessica Pennington. The platform serves as a digital presence to highlight services, share portfolio work, and facilitate client connections. Built with a focus on luxury aesthetics and warm, welcoming user experience, the site emphasizes human connection through sophisticated design and thoughtful content presentation.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack:**
- **Framework:** React 18 with TypeScript
- **Routing:** Wouter (lightweight client-side routing)
- **Styling:** Tailwind CSS with custom design system
- **UI Components:** Shadcn/ui component library (Radix UI primitives)
- **State Management:** TanStack Query (React Query) for server state
- **Build Tool:** Vite for fast development and optimized production builds

**Design System:**
- Custom color palette centered around forest green, gold accents, and warm neutrals
- Typography: Playfair Display (headings), Inter (body), Cormorant Garamond (decorative)
- Spacing system using Tailwind's consistent 4px-based scale
- Component theming through CSS variables for light/dark mode support
- Luxury-focused aesthetic drawing inspiration from high-end hospitality brands

**Page Structure:**
- Home page with hero section featuring inspirational quote
- Dedicated About, Services, Events, Quiz, Book, and Contact pages
- Gallery page combines gallery images and testimonials in a single view
- Modular component architecture allowing section reuse across pages
- Responsive design with mobile-first approach
- /testimonials route redirects to /gallery for unified content experience

**Key Architectural Decisions:**
- Single Page Application (SPA) architecture for smooth navigation
- Component-based structure for maintainability and reusability
- Asset management through Vite's alias system (`@assets` for images)
- SEO optimization through dynamic meta tag updates per page

### Backend Architecture

**Technology Stack:**
- **Runtime:** Node.js with TypeScript
- **Framework:** Express.js for HTTP server
- **Database ORM:** Drizzle ORM
- **Development:** TSX for TypeScript execution in development

**API Design:**
- RESTful API structure with `/api` prefix convention
- Middleware pipeline for request logging and error handling
- Storage abstraction layer (IStorage interface) for flexible data persistence
- Currently using in-memory storage (MemStorage) with planned database migration

**Server Features:**
- Vite integration for hot module replacement in development
- Static file serving for production builds
- Centralized error handling with status code normalization
- Request/response logging with duration tracking

**Key Architectural Decisions:**
- Separation of storage interface from implementation allows easy database swapping
- Development/production environment detection for conditional Vite middleware
- Modular route registration pattern for scalability
- Type-safe schemas using Drizzle-Zod for validation

### Data Layer

**Current State:**
- In-memory storage implementation (MemStorage)
- User entity with username/password fields
- UUID-based primary keys

**Planned Architecture:**
- PostgreSQL database (via Neon serverless)
- Drizzle ORM for type-safe database queries
- Migration system using Drizzle Kit
- Schema defined in `shared/schema.ts` for frontend/backend sharing

**Design Rationale:**
- Schema sharing between client/server ensures type consistency
- Drizzle provides excellent TypeScript inference and migration tooling
- Neon serverless offers scalable PostgreSQL without infrastructure management

## External Dependencies

### Core Libraries

**Frontend:**
- `@tanstack/react-query` - Server state management and caching
- `wouter` - Lightweight routing (2KB alternative to React Router)
- `react-hook-form` with `@hookform/resolvers` - Form state and validation
- `zod` - Runtime type validation and schema definition
- `date-fns` - Date manipulation utilities
- `lucide-react` - Icon library
- `embla-carousel-react` - Carousel/slider functionality

**UI Components (Radix UI):**
- Complete set of headless, accessible UI primitives
- Dialog, Dropdown, Select, Toast, Navigation Menu, and 20+ other components
- Provides accessibility and keyboard navigation out of the box

**Backend:**
- `express` - Web application framework
- `drizzle-orm` - TypeScript ORM
- `@neondatabase/serverless` - PostgreSQL database driver
- `connect-pg-simple` - PostgreSQL session store

**Styling:**
- `tailwindcss` - Utility-first CSS framework
- `autoprefixer` - CSS vendor prefixing
- `class-variance-authority` - Type-safe variant styling
- `tailwind-merge` with `clsx` - Conditional class composition

### Development Tools

- `vite` - Build tool and dev server
- `typescript` - Type checking
- `tsx` - TypeScript execution
- `esbuild` - Server-side bundling for production
- `drizzle-kit` - Database migration tooling

### Replit-Specific Integrations

- `@replit/vite-plugin-runtime-error-modal` - Enhanced error overlay
- `@replit/vite-plugin-cartographer` - Development tooling
- `@replit/vite-plugin-dev-banner` - Development environment indicator

### Database Configuration

**Database Provider:** Neon (Serverless PostgreSQL)
- Connection via `DATABASE_URL` environment variable
- Configured for serverless/edge runtime compatibility
- Schema migrations managed through Drizzle Kit

**Design Considerations:**
- Drizzle ORM chosen for excellent TypeScript support and lightweight footprint
- Neon serverless allows zero-downtime scaling and branching workflows
- Schema-first approach with `drizzle-zod` integration for validation