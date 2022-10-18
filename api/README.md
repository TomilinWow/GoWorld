# client Go

### Как запустить:
1. go mod tidy (в папке api) установить и скачать все зависимости
2. go run main.go ( в папке api ) запускает приложение на http://localhost:1323

### Поянения по коду:
- Все endpoint описаны по адрессу  /swagger/* 
- Структуру конфига менять в config/config.go ( я думаю что это не потребуется )
- Сам конфиг в configs/config.local.yaml
