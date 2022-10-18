package config

import (
	"fmt"
)

var cfg = GetConfig()

func ConnectDB() string {
	dbConnString := fmt.Sprintf("host=%s port=%s user=%s dbname=%s password=%s sslmode=disable",
		cfg.PostgreSQL.Host,
		cfg.PostgreSQL.Port,
		cfg.PostgreSQL.Username,
		cfg.PostgreSQL.Database,
		cfg.PostgreSQL.Password)
	return dbConnString
}
