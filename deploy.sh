 #!/bin/bash

# Stock Assistant frontend deployment script

echo "🚀 Starting Stock Assistant frontend deployment..."

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build project
echo "🔨 Building project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo "📁 Build files located in dist/ directory"
    echo "🌐 You can deploy the dist/ directory to any static hosting service"
else
    echo "❌ Build failed!"
    exit 1
fi