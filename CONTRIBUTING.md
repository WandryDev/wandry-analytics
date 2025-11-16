# Contributing to Wandry Analytics

Thank you for your interest in contributing to Wandry Analytics! This document provides guidelines and instructions for setting up the development environment and contributing to the project.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **PHP** 8.2 or higher (or **Laravel Herd** for macOS)
- **Composer** (PHP dependency manager, included with Herd)
- **Node.js** 18.x or higher (with npm, yarn, or pnpm)
- **PostgreSQL** 16 or higher (or use Docker)
- **Redis** (optional, for queues and caching)
- **Docker** and **Docker Compose** (optional, but recommended for consistent development environment)

## Getting Started

### Option 1: Using Docker (Recommended)

The easiest way to set up the development environment is using Docker Compose:

1. Clone the repository:

    ```bash
    git clone <repository-url>
    cd wandry-analytics
    ```

2. Start Docker containers:

    ```bash
    docker-compose up -d
    ```

3. Install PHP dependencies:

    ```bash
    docker-compose exec app composer install
    ```

4. Install Node.js dependencies:

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

5. Copy environment file and configure:

    ```bash
    cp .env.example .env
    ```

6. Generate application key:

    ```bash
    docker-compose exec app php artisan key:generate
    ```

7. Run database migrations:

    ```bash
    docker-compose exec app php artisan migrate
    ```

8. Build frontend assets:
    ```bash
    npm run build
    ```

The application will be available at `http://localhost:8000`.

**Docker Services:**

- Application: `laravel-app` (PHP container)
- Web Server: `laravel-nginx` on port 8000
- PostgreSQL: `laravel-postgres` on port 5432
- PostgreSQL (Test): `laravel-postgres-test` on port 5433
- Redis: on port 10004
- pgAdmin: available at `http://localhost:8081` (admin@admin.com / admin)

### Option 2: Local Development

1. Clone the repository:

    ```bash
    git clone <repository-url>
    cd wandry-analytics
    ```

2. Install PHP dependencies:

    ```bash
    composer install
    ```

3. Install Node.js dependencies:

    ```bash
    npm install
    ```

4. Set up environment:

    ```bash
    cp .env.example .env
    php artisan key:generate
    ```

5. Configure database connection in `.env` file:

    ```
    DB_CONNECTION=pgsql
    DB_HOST=127.0.0.1
    DB_PORT=5432
    DB_DATABASE=laravel
    DB_USERNAME=your_username
    DB_PASSWORD=your_password
    ```

6. Run migrations:

    ```bash
    php artisan migrate
    ```

7. Start development servers:
    ```bash
    composer run dev
    ```

This command starts:

- Laravel development server (PHP)
- Queue worker
- Log viewer (Pail)
- Vite development server (frontend)

The application will be available at `http://localhost:8000` (Laravel server) with hot module replacement for frontend assets.

### Option 3: Using Laravel Herd (macOS)

Laravel Herd is a native macOS application that provides a simple way to develop Laravel applications. It automatically configures PHP, Composer, and provides automatic domain configuration.

**Prerequisites:**

- macOS operating system
- [Laravel Herd](https://herd.laravel.com) installed
- PostgreSQL 16 or higher
- Node.js 18.x or higher

1. Install Laravel Herd:

    Download and install Laravel Herd from [herd.laravel.com](https://herd.laravel.com)

2. Clone the repository:

    ```bash
    git clone <repository-url>
    cd wandry-analytics
    ```

3. Link the project to Herd:

    ```bash
    herd link wandry-analytics
    ```

    This creates a local domain: `http://wandry-analytics.test`

    Alternatively, you can use a custom domain:

    ```bash
    herd link wandry-analytics --domain=wandry.test
    ```

4. Install PHP dependencies:

    ```bash
    composer install
    ```

5. Install Node.js dependencies:

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

6. Set up environment:

    ```bash
    cp .env.example .env
    php artisan key:generate
    ```

7. Configure database connection in `.env` file:

    ```
    DB_CONNECTION=pgsql
    DB_HOST=127.0.0.1
    DB_PORT=5432
    DB_DATABASE=laravel
    DB_USERNAME=your_username
    DB_PASSWORD=your_password
    ```

8. Run migrations:

    ```bash
    php artisan migrate
    ```

9. Build frontend assets:

    ```bash
    npm run build
    ```

10. Start development servers:

    In a separate terminal, start the queue worker and Vite dev server:

    ```bash
    composer run dev
    ```

    Or run them separately:

    ```bash
    # Queue worker
    php artisan queue:listen

    # Vite dev server (in another terminal)
    npm run dev
    ```

The application will be available at `http://wandry-analytics.test` (or your custom domain).

**Herd Benefits:**

- Automatic PHP and Composer management
- Zero configuration required for PHP
- Automatic SSL certificates for `.test` domains
- Built-in Valet-like functionality
- Easy database management through Herd's interface

**Useful Herd Commands:**

```bash
# Link a project
herd link project-name

# Unlink a project
herd unlink project-name

# List all linked projects
herd links

# Restart Herd services
herd restart

# View Herd status
herd status
```

### Quick Setup Script

Alternatively, use the automated setup script:

```bash
composer run setup
```

This command automatically:

- Installs Composer dependencies
- Creates `.env` file if it doesn't exist
- Generates application key
- Runs database migrations
- Installs Node.js dependencies
- Builds frontend assets

## Project Structure

```
wandry-analytics/
├── app/                          # Laravel application core
│   ├── Actions/                  # Action classes for events and authentication
│   │   ├── Events/               # Event-related actions
│   │   └── Fortify/              # Laravel Fortify authentication actions
│   ├── Console/                  # Artisan commands
│   │   └── Commands/
│   ├── Data/                     # Data Transfer Objects (DTOs)
│   │   ├── EventData.php
│   │   └── RegistryData.php
│   ├── Http/                     # HTTP layer
│   │   ├── Controllers/          # Application controllers
│   │   │   └── Settings/         # Settings-related controllers
│   │   ├── Middleware/           # HTTP middleware
│   │   └── Requests/             # Form request validation
│   ├── Models/                   # Eloquent models
│   │   ├── Event.php             # Analytics events model
│   │   ├── Registry.php          # Component registries model
│   │   ├── User.php              # User model
│   │   └── DownloadEvent.php     # Download events model
│   ├── Policies/                 # Authorization policies
│   ├── Providers/                # Service providers
│   └── Services/                 # Business logic services
│       ├── EventService.php      # Event tracking service
│       └── RegistryService.php   # Registry management service
├── bootstrap/                    # Laravel bootstrap files
├── config/                       # Configuration files
├── database/                     # Database-related files
│   ├── factories/                # Model factories
│   ├── migrations/               # Database migrations
│   └── seeders/                  # Database seeders
├── docker/                       # Docker configuration
│   ├── nginx/                    # Nginx configuration
│   └── php/                      # PHP Dockerfile
├── public/                       # Public web root
├── resources/                    # Frontend resources
│   ├── css/                      # Stylesheets
│   ├── js/                       # JavaScript/TypeScript source
│   │   ├── actions/              # Action creators
│   │   ├── assets/               # Static assets (images, etc.)
│   │   ├── components/           # React components
│   │   ├── hooks/                # React hooks
│   │   ├── layouts/              # Page layouts
│   │   ├── lib/                  # Utility libraries
│   │   ├── modules/              # Feature modules
│   │   │   └── analytics/        # Analytics module
│   │   ├── pages/                # Inertia.js pages
│   │   ├── routes/               # Route definitions
│   │   ├── types/                # TypeScript type definitions
│   │   └── wayfinder/            # Wayfinder routes
│   └── views/                    # Blade templates
├── routes/                       # Route definitions
│   ├── api_v1.php                # API v1 routes
│   ├── console.php               # Console routes
│   ├── settings.php              # Settings routes
│   └── web.php                   # Web routes
├── storage/                      # Storage directory (logs, cache, etc.)
├── tests/                        # Test files
│   ├── Feature/                  # Feature tests
│   │   ├── Auth/                 # Authentication tests
│   │   └── Settings/             # Settings tests
│   └── Unit/                     # Unit tests
└── vendor/                       # Composer dependencies (gitignored)
```

## Development Workflow

### Database Management

**Run migrations:**

```bash
php artisan migrate
# or with Docker
docker-compose exec app php artisan migrate
```

**Rollback migrations:**

```bash
php artisan migrate:rollback
```

**Seed database:**

```bash
php artisan db:seed
```

### Frontend Development

**Start Vite dev server:**

```bash
npm run dev
```

**Build production assets:**

```bash
npm run build
```

**Build SSR assets:**

```bash
npm run build:ssr
```

**Run type checking:**

```bash
npm run types
```

**Format code:**

```bash
npm run format
```

**Check formatting:**

```bash
npm run format:check
```

**Lint code:**

```bash
npm run lint
```

### Testing

**Run all tests:**

```bash
composer run test
# or
php artisan test
```

**Run specific test suite:**

```bash
php artisan test --testsuite=Feature
php artisan test --testsuite=Unit
```

The project uses PHPUnit for testing with SQLite in-memory database for test isolation.

### Code Quality

**Format PHP code (Laravel Pint):**

```bash
./vendor/bin/pint
```

**Check TypeScript types:**

```bash
npm run types
```

**Lint JavaScript/TypeScript:**

```bash
npm run lint
```

## Architecture Overview

### Backend Architecture

- **Framework:** Laravel 12 with Inertia.js for server-driven React
- **Database:** PostgreSQL (with SQLite for testing)
- **Authentication:** Laravel Fortify with two-factor authentication support
- **API Authentication:** Laravel Sanctum for token-based API authentication
- **Data Layer:** Spatie Laravel Data for Data Transfer Objects

**Key Patterns:**

- **Service Layer:** Business logic is encapsulated in service classes (`EventService`, `RegistryService`)
- **Data Objects:** Request/response data is handled through DTOs (`EventData`, `RegistryData`)
- **Policy-Based Authorization:** Authorization logic is in policies (`RegistryPolicy`)

### Frontend Architecture

- **Framework:** React 19 with TypeScript
- **State Management:** Inertia.js (server-driven state)
- **UI Components:** shadcn/ui components built on Radix UI
- **Styling:** Tailwind CSS 4
- **Build Tool:** Vite
- **Form Handling:** @wandry/inertia-form

**Key Patterns:**

- **Module-Based Structure:** Features are organized in modules (`resources/js/modules/`)
- **Component Composition:** Reusable components in `resources/js/components/`

## Contributing Guidelines

### Code Style

- **PHP:** Follow PSR-12 coding standards (enforced by Laravel Pint)
- **JavaScript/TypeScript:** Follow ESLint and Prettier configurations
- **Naming Conventions:**
    - Controllers: PascalCase (e.g., `RegistryController`)
    - Models: PascalCase (e.g., `Event`)
    - Services: PascalCase with "Service" suffix (e.g., `EventService`)
    - Components: PascalCase (e.g., `AnalyticsCard`)
    - Functions/Methods: camelCase

### Git Workflow

1. Create a branch from `main`:

    ```bash
    git checkout -b feature/your-feature-name
    ```

2. Make your changes and commit:

    ```bash
    git add .
    git commit -m "feat: add your feature description"
    ```

3. Push your branch:

    ```bash
    git push origin feature/your-feature-name
    ```

4. Create a Pull Request

**Commit Message Convention:**

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

### Pull Request Process

1. Ensure all tests pass
2. Ensure code follows style guidelines
3. Write clear commit messages
4. Reference any related issues in the PR description

### Testing Requirements

- New features should include appropriate tests
- Ensure all existing tests pass
- Feature tests should cover the happy path and edge cases
- Unit tests should cover service methods and utilities

## Getting Help

If you encounter any issues or have questions:

1. Check existing issues in the repository
2. Review the Laravel documentation for framework-specific questions
3. Review the Inertia.js documentation for frontend integration questions
4. Create a new issue with detailed information about your problem
