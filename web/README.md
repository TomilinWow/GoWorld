# client Nextjs

### Как запустить:
1. Скачать/склонировать репозиторий
2. npm install (в папке web)
3. npm run dev (в папке web) - запускает приложение на http://localhost:3000

### Поянения по коду:
- post-запрос на вход в приложение (почта / пароль) "http://localhost:1323/api/login" --> находится в services/login_service.ts
- get-запрос обращение на неограниченную/открытую конечную точку "http://localhost:1323/api/unrestricted" --> находится в pages/index.tsx
- get-запрос обращение к ограниченой конечной точке с защитой промежуточного программного обеспечения JWT (проверка) "http://localhost:1323/api/restricted" --> находится в pages/home.tsx
