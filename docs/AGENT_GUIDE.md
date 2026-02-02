# AGENT_GUIDE.md

> **CRITICAL**: This file is the Source of Truth for all coding agents working on this project.
> **RULE**: Always read this file before starting complex tasks.

## 1. Tech Stack & Style
- **Framework**: Next.js (App Router) - **Mode**: Static Export (`output: 'export'`)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Azure Static Web Apps (Free Tier Compatible)
- **API**: SWA-managed Azure Functions (Python 3.11 - Model V2) in `api/` folder
  - **Important**: This is NOT a separate Azure Functions resource. The API is deployed as part of the Static Web App via `api_location`.
- **Database**: Azure SQL Database (Serverless Free Tier)
- **Config**: Revenue-neutral: Designed for <$1/month running costs

### Free Tier Constraints
- **SQL Database**: 100K vCore-seconds/month, 32GB storage
- **Auto-Pause**: Database auto-pauses after 60 min inactivity (First request may timeout).
- **Functions**: Consumption plan. Minimize cold starts.

### Style Rules
- **Formatting**: Adhere to ESLint and Prettier.
- **Comments**: MANDATORY JSDoc/TSDoc for exported functions.
- **Cost Efficiency**: Always consider vCore-second usage. Use indexed queries.

## 2. Architecture

### Repository Structure
- `/` - Root (Azure SWA config, Docs)
- `/frontend` - Next.js Application (Client). Builds to `out/`.
- `/api` - SWA-managed Azure Functions (Python).
- `/docs` - Documentation.

### Deployment Flow
GitHub Actions deploys both frontend and API in a single step via the Azure Static Web Apps workflow.
- `app_location`: "/frontend"
- `api_location`: "/api"
- `output_location`: "out"

## 3. Testing Requirements
- **Frontend**: Jest + React Testing Library.
- **API**: Pytest.
- **Rule**: All Logic in API layer MUST have unit tests.

## 4. Database Schema
> **RULE**: Always verify schema changes via migration scripts.

### Query Performance Tips
- Use indexed columns in WHERE clauses.
- Limit results (TOP/OFFSET-FETCH).
- Avoid `SELECT *`.

## 5. Local Development
- **Frontend**: `cd frontend && npm run dev`
- **Backend**: `cd api && func start`
- **Full Stack**: Use SWA CLI `swa start` or run independently.

## 6. Environment Variables
| Variable | Description |
|----------|-------------|
| `SQL_CONNECTION_STRING` | ODBC connection string for Azure SQL |
