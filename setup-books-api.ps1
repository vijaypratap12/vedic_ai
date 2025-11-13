# PowerShell Script to Setup Books API Integration
# Run this script from the vedic_ai folder

Write-Host "================================================" -ForegroundColor Cyan
Write-Host "  Vedic AI - Books API Integration Setup" -ForegroundColor Cyan
Write-Host "================================================" -ForegroundColor Cyan
Write-Host ""

# Check if .env file exists
$envFile = ".env"
if (Test-Path $envFile) {
    Write-Host "✓ .env file already exists" -ForegroundColor Green
} else {
    Write-Host "Creating .env file..." -ForegroundColor Yellow
    
    # Prompt for API URL
    $defaultUrl = "https://localhost:7000/api"
    $apiUrl = Read-Host "Enter API URL (press Enter for default: $defaultUrl)"
    
    if ([string]::IsNullOrWhiteSpace($apiUrl)) {
        $apiUrl = $defaultUrl
    }
    
    # Create .env file
    "REACT_APP_API_URL=$apiUrl" | Out-File -FilePath $envFile -Encoding UTF8
    Write-Host "✓ .env file created with API URL: $apiUrl" -ForegroundColor Green
}

Write-Host ""
Write-Host "================================================" -ForegroundColor Cyan
Write-Host "  Next Steps" -ForegroundColor Cyan
Write-Host "================================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "1. Start the .NET API:" -ForegroundColor Yellow
Write-Host "   cd ..\VedicAPI.API\VedicAPI.API" -ForegroundColor White
Write-Host "   dotnet run" -ForegroundColor White
Write-Host ""
Write-Host "2. In a new terminal, start the React app:" -ForegroundColor Yellow
Write-Host "   npm start" -ForegroundColor White
Write-Host ""
Write-Host "3. Navigate to the Books page:" -ForegroundColor Yellow
Write-Host "   http://localhost:3000/books" -ForegroundColor White
Write-Host ""
Write-Host "================================================" -ForegroundColor Cyan
Write-Host "  Database Setup" -ForegroundColor Cyan
Write-Host "================================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Make sure to run the database script first:" -ForegroundColor Yellow
Write-Host "Location: ..\VedicAPI.API\VedicAPI.API\Database\CreateDatabase.sql" -ForegroundColor White
Write-Host ""
Write-Host "You can run it using:" -ForegroundColor Yellow
Write-Host "- SQL Server Management Studio (SSMS)" -ForegroundColor White
Write-Host "- sqlcmd command line tool" -ForegroundColor White
Write-Host "- Azure Data Studio" -ForegroundColor White
Write-Host ""
Write-Host "Setup complete! 🎉" -ForegroundColor Green
Write-Host ""

