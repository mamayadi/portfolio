.PHONY: dev build preview docker-dev stop clean

# Start Vite dev server (hot module reload built-in)
dev:
	npm run dev

# Build for production
build:
	npm run build

# Preview production build locally
preview:
	npm run preview

# Build and start with Docker (nginx, production-like)
docker-dev:
	docker compose up --build

# Stop Docker containers
stop:
	docker compose down

# Remove containers, images and build output
clean:
	docker compose down --rmi local --volumes
	rm -rf dist
