# Build the project
Write-Host "Building project..."
npm run build

# Check if build was successful
if ($LASTEXITCODE -eq 0) {
    Write-Host "Build successful! Deploying to Vercel..."
    
    # Navigate to dist folder and deploy
    cd dist
    vercel deploy --prod
    cd ..
    
    Write-Host "Deployment complete!"
} else {
    Write-Host "Build failed. Please fix errors and try again."
}
