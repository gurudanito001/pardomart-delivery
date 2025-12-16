# PardoMart API Client Generation Script (Windows / PowerShell)
# This script generates a TypeScript Axios API client from the OpenAPI specification.
# Output structure (inside `api-client`):
#   - `endpoints/`  : Axios API classes (e.g. AuthApi, ProductApi, EarningsApi)
#   - `models/`     : TypeScript models/types (e.g. User, Product, Order)
#   - `api.ts`      : Combined export surface (re-exporting endpoints & models)
#   - `config.ts`   : Custom configuration (tokens, base URL) – preserved between runs

Write-Host "Generating PardoMart API Client..." -ForegroundColor Green

$API_SPEC_URL = "https://pardomart-node-api-vaje.onrender.com/api-docs/openapi.json"
$OUTPUT_DIR = "./api-client"

# Clean only generated files, preserve custom configuration
Write-Host "Cleaning generated API files (preserving config.ts)..." -ForegroundColor Yellow

$GENERATED_FILES = @(
    "$OUTPUT_DIR/api.ts",
    "$OUTPUT_DIR/base.ts", 
    "$OUTPUT_DIR/common.ts",
    "$OUTPUT_DIR/configuration.ts",
    "$OUTPUT_DIR/index.ts",
    "$OUTPUT_DIR/endpoints",
    "$OUTPUT_DIR/models",
    "$OUTPUT_DIR/docs",
    "$OUTPUT_DIR/git_push.sh",
    "$OUTPUT_DIR/.gitignore",
    "$OUTPUT_DIR/.npmignore",
    "$OUTPUT_DIR/.openapi-generator-ignore",
    "$OUTPUT_DIR/.openapi-generator"
)

foreach ($file in $GENERATED_FILES) {
    if (Test-Path $file) {
        Write-Host "  Removing: $file" -ForegroundColor Gray
        Remove-Item -Recurse -Force $file
    }
}

# Generate the API client
Write-Host "Downloading OpenAPI spec from: $API_SPEC_URL" -ForegroundColor Cyan
Write-Host "Generating TypeScript Axios client to: $OUTPUT_DIR" -ForegroundColor Cyan

npx @openapitools/openapi-generator-cli generate `
    -i $API_SPEC_URL `
    -g typescript-axios `
    -o $OUTPUT_DIR `
    --skip-validate-spec `
    --additional-properties="supportsES6=true,withSeparateModelsAndApi=true,prependFormOrBodyParameters=true,legacyDiscriminatorBehavior=false,apiPackage=endpoints,modelPackage=models"

# Post-process generated client to fix known issues
Write-Host "Applying post-generation fixes..." -ForegroundColor Yellow

$apiFile = Join-Path $OUTPUT_DIR "api.ts"
if (Test-Path $apiFile) {
    $content = Get-Content $apiFile -Raw

    # Remove duplicate definitions of EarningsTotalGetPeriodEnum (keep the first one)
    $pattern = "export const EarningsTotalGetPeriodEnum = {\s*Today: 'today',\s*_7days: '7days',\s*_1month: '1month',\s*_1year: '1year'\s*} as const;\s*export type EarningsTotalGetPeriodEnum = typeof EarningsTotalGetPeriodEnum\[keyof typeof EarningsTotalGetPeriodEnum];"
    $regex = [regex]$pattern
    $enumMatches = $regex.Matches($content)

    if ($enumMatches.Count -gt 1) {
        Write-Host "  Found $($enumMatches.Count) occurrences of EarningsTotalGetPeriodEnum, removing duplicates..." -ForegroundColor Gray
        # Remove from the end to keep indices valid
        for ($i = $enumMatches.Count - 1; $i -ge 1; $i--) {
            $match = $enumMatches[$i]
            $content = $content.Remove($match.Index, $match.Length)
        }

        Set-Content -Path $apiFile -Value $content -Encoding UTF8
        Write-Host "  Duplicate EarningsTotalGetPeriodEnum definitions removed." -ForegroundColor Green
    }
}

if ($LASTEXITCODE -eq 0) {
    Write-Host "API client generated successfully!" -ForegroundColor Green
    Write-Host "Generated files are located in: $OUTPUT_DIR" -ForegroundColor Green
    Write-Host ""
    Write-Host "Custom configuration preserved:" -ForegroundColor Cyan
    Write-Host "   - config.ts (API configuration & token management)" -ForegroundColor White
    Write-Host ""
    Write-Host "You can import APIs from 'api-client/endpoints' (e.g., AuthApi, ProductApi)" -ForegroundColor Cyan
    Write-Host "You can import types from 'api-client/models' (e.g., User, Product)" -ForegroundColor Cyan
}
else {
    Write-Host "API client generation failed!" -ForegroundColor Red
    exit 1
}
