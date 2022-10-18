package storage

import (
	"GoWorld/api/config"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"log"
)

func NewDb(params ...string) *gorm.DB {

	conString := config.ConnectDB()
	log.Print(conString)
	db, err := gorm.Open(postgres.Open(conString), &gorm.Config{})
	if err != nil {
		log.Fatal(err)
	}
	return db
}
