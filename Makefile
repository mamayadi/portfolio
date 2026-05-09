.PHONY: dev docker-dev stop clean

# Start local dev server with live reload (requires Node.js)
dev:
	@echo "Starting dev server at http://localhost:3000"
	npx --yes browser-sync start \
		--server \
		--files "*.html, *.css, *.js, assets/**" \
		--port 3000 \
		--no-notify

# Start with Docker (production-like nginx)
docker-dev:
	docker compose up --build

# Stop Docker containers
stop:
	docker compose down

# Remove Docker containers and images
clean:
	docker compose down --rmi local --volumes
