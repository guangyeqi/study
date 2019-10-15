copy /b "%~dp0"\*.ts  "%~dp0"\new.mp4
timeout /t 5 /nobreak
del /f /s /q "%~dp0"\*.ts