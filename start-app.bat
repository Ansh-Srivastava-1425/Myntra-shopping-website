@echo off
echo Starting Myntra MERN Stack Application...
echo.

echo Installing Backend Dependencies...
cd backend
call npm install
echo.

echo Installing Frontend Dependencies...
cd ..\frontend
call npm install
echo.

echo Starting Backend Server (Port 5000)...
cd ..\backend
start cmd /k "npm run dev"

timeout /t 3

echo Starting Frontend Server (Port 3000)...
cd ..\frontend
start cmd /k "npm start"

timeout /t 5

echo Seeding Database with Products...
curl -X POST http://localhost:5000/api/products/seed

echo.
echo Application started successfully!
echo Backend: http://localhost:5000
echo Frontend: http://localhost:3000
echo.
pause