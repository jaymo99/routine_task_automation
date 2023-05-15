@echo off
setlocal enabledelayedexpansion

set "inputDir=C:\Users\jmkariuki\Documents\scripts\input"
set "outputDir=C:\Users\jmkariuki\Documents\scripts\output"

for /F "tokens=1-3 delims=/ " %%A in ('date /T') do (
    set "day=%%A"
    set "month=%%B"
    set "year=%%C"
)

set "day=!day:~-2!"
set "month=!month:~-2!"
set "dateStamp=%year%%month%%day%"

if not exist "%outputDir%\%dateStamp%" mkdir "%outputDir%\%dateStamp%"

for %%F in ("%inputDir%\*") do (
    set "fileName=%%~nF"
    set "extension=%%~xF"
    set "outputFile=!fileName!_output!extension!"
    set "outputPath=%outputDir%\%dateStamp%\!outputFile!"
    
    move "%%F" "!outputPath!" > nul
    
    echo Appending text to "!outputPath!"...
    echo.>> "!outputPath!"
    echo F883F8C89CD94F541A8B19B6CD3A33405DDA11AF 0561 00015434 2305120014 PER00000345 >> "!outputPath!"
)