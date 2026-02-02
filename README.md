# SpriteFlip

## Getting Started

### Local Development Setup

To run a production-like local environment with auth simulation:

**Terminal 1 (Frontend)**:
```bash
cd frontend
npm install
npm run dev   
```

**Terminal 2 (SWA Emulator)**:
```bash
# Requires SWA CLI: npm install -g @azure/static-web-apps-cli
# Starts the emulator, proxying requests to frontend (port 3000) and running the API (auto-detected)
swa start http://localhost:3000 --api-location ./api
```

Access the app at `http://localhost:4280`. This provides:
- Frontend at correct URL
- API available at `/api/*`
- Authentication emulation at `/.auth/*`

### Prerequisites
*   Node.js v20+
*   Python v3.11+
*   Azure Functions Core Tools v4 (`npm install -g azure-functions-core-tools@4`)
*   SWA CLI (`npm install -g @azure/static-web-apps-cli`)
