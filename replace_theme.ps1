$replacements = @{
    'bg-luxury-black' = 'bg-white'
    'bg-luxury-charcoal' = 'bg-slate-50'
    'text-luxury-light' = 'text-slate-600'
    'text-luxury-gold' = 'text-teal-600'
    'bg-luxury-gold' = 'bg-teal-600'
    'text-luxury-black' = 'text-white'
    'border-luxury-gold' = 'border-teal-500'
    'border-luxury-charcoal' = 'border-slate-200'
    'border-white/5' = 'border-slate-200'
    'border-white/10' = 'border-slate-200'
    'bg-white/5' = 'bg-slate-100'
    'text-gray-300' = 'text-slate-600'
    'text-gray-400' = 'text-slate-500'
    'text-white' = 'text-slate-900'
    'bg-\[#050505\]' = 'bg-white'
    'text-gray-900 dark:text-white' = 'text-slate-900'
    'from-luxury-black' = 'from-white'
    'via-luxury-black' = 'via-white'
    'to-luxury-black' = 'to-white'
    'shadow-\[0_0_20px_rgba\(212,175,55,0\.3\)\]' = 'shadow-lg shadow-teal-500/30'
    'shadow-\[0_0_50px_rgba\(212,175,55,0\.1\)\]' = 'shadow-xl'
    'shadow-\[0_0_40px_rgba\(0,0,0,0\.5\)\]' = 'shadow-2xl'
}

$files = Get-ChildItem -Path "c:\Users\USER\Downloads\github\ConstructionDemoWebsite-main\ConstructionDemoWebsite-main\src" -Recurse -Include *.tsx,*.ts,*.css

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    $changed = $false
    
    foreach ($key in $replacements.Keys) {
        if ($content -match $key) {
            $content = $content -replace $key, $replacements[$key]
            $changed = $true
        }
    }
    
    if ($changed) {
        Set-Content -Path $file.FullName -Value $content -Encoding UTF8
        Write-Host "Updated $($file.FullName)"
    }
}
