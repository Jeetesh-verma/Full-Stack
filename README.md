# NewsWave - Modern News Aggregator

A React-based news aggregator application with full CRUD operations using JSON Server as the backend.

## Project Overview

NewsWave is a modern news aggregator that allows users to:
- Browse articles across multiple categories (Technology, Sports, Business, Entertainment, Science, Health)
- Search and filter articles
- Save favorite articles
- Create, update, and delete articles (Admin panel)
- View detailed article pages

## Technologies Used

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **React Router** - Routing
- **TanStack Query (React Query)** - Data fetching and caching
- **JSON Server** - REST API backend
- **shadcn/ui** - UI component library
- **Tailwind CSS** - Styling
- **date-fns** - Date formatting
- **Sonner** - Toast notifications

## Project Requirements Met

✅ React application  
✅ JSON Server for backend  
✅ CRUD operations (Create, Read, Update, Delete)  
✅ Data stored in `db.json`  
✅ API service layer for data management  

## Setup Instructions

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <YOUR_GIT_URL>
cd restaurant-manager-hub-main
```

2. Install dependencies:
```bash
npm install
```

### Running the Application

The project requires two servers to run:
1. **JSON Server** - Backend API (port 4000)
2. **Vite Dev Server** - Frontend (port 3000)

#### Option 1: Run Both Servers Simultaneously (Recommended)

```bash
npm run dev:all
```

This command uses `concurrently` to run both servers at once.

#### Option 2: Run Servers Separately

**Terminal 1 - Start JSON Server:**
```bash
npm run server
```
This starts JSON Server on `http://localhost:3001`

**Terminal 2 - Start React App:**
```bash
npm run dev
```
This starts the Vite dev server on `http://localhost:8080`

### Accessing the Application

- **Frontend**: http://localhost:3000
- **JSON Server API**: http://localhost:4000
- **API Endpoints**:
  - `GET /articles` - Get all articles
  - `GET /articles/:id` - Get article by ID
  - `GET /articles?category=:category` - Get articles by category
  - `POST /articles` - Create new article
  - `PATCH /articles/:id` - Update article
  - `DELETE /articles/:id` - Delete article
  - `GET /categories` - Get all categories

## Project Structure

```
restaurant-manager-hub-main/
├── db.json                 # JSON Server database
├── src/
│   ├── components/        # React components
│   │   ├── ui/           # shadcn/ui components
│   │   ├── ArticleCard.tsx
│   │   ├── ArticleForm.tsx
│   │   └── ...
│   ├── hooks/            # Custom React hooks
│   │   ├── useArticles.ts
│   │   ├── useFavorites.ts
│   │   └── ...
│   ├── pages/            # Page components
│   │   ├── Home.tsx
│   │   ├── ArticlePage.tsx
│   │   ├── Admin.tsx      # CRUD operations page
│   │   └── ...
│   ├── services/          # API service layer
│   │   └── api.ts
│   └── utils/            # Utility functions
│       └── mockData.ts
└── package.json
```

## Features

### User Features
- **Home Page**: Browse all articles with category filtering
- **Category Pages**: View articles by specific category
- **Article Details**: Full article view with related articles
- **Favorites**: Save and manage favorite articles
- **Search**: Search articles by title, description, or category

### Admin Features
- **Article Management**: Access via `/admin` route
- **Create Articles**: Add new articles with full details
- **Update Articles**: Edit existing articles
- **Delete Articles**: Remove articles with confirmation dialog

## CRUD Operations

All CRUD operations are implemented in the Admin panel (`/admin`):

1. **Create**: Click "Create Article" button, fill the form, and submit
2. **Read**: All articles are displayed on the admin page and throughout the app
3. **Update**: Click the edit icon on any article card in the admin page
4. **Delete**: Click the delete icon and confirm the action

## Data Storage

- **Articles**: Stored in `db.json` under the `articles` key
- **Categories**: Stored in `db.json` under the `categories` key
- **Favorites**: Stored in browser `localStorage` (client-side only)

## Development

### Available Scripts

- `npm run dev` - Start Vite dev server
- `npm run server` - Start JSON Server
- `npm run dev:all` - Start both servers concurrently
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Adding New Articles

You can add articles in two ways:

1. **Via Admin Panel**: Navigate to `/admin` and use the "Create Article" button
2. **Via db.json**: Manually add entries to `db.json` (requires server restart)

## Important Notes

⚠️ **Make sure JSON Server is running before using the application**

If you see errors about failed API requests, ensure:
1. JSON Server is running on port 3001
2. No other application is using port 3001
3. The `db.json` file exists in the root directory

## Troubleshooting

### Port Already in Use
If port 3001 or 8080 is already in use:
- Change the port in `package.json` scripts for JSON Server
- Change the port in `vite.config.ts` for Vite
- Update `API_BASE_URL` in `src/services/api.ts` if JSON Server port changes

### API Connection Errors
- Verify JSON Server is running: `curl http://localhost:3001/articles`
- Check browser console for CORS errors
- Ensure `db.json` is properly formatted JSON

## License

This project is for educational purposes.

## Author

Created as part of a React project requirement demonstrating CRUD operations with JSON Server.
