package controller

import (
	"GoWorld/api/model"
	"GoWorld/api/storage"
	"github.com/labstack/echo/v4"
	"net/http"
)

// TODO Доделать запросы в бд, подключение к бд проходит нормально
func GetUser(c echo.Context) error {
	user, _ := GetRepoUser()
	return c.JSON(http.StatusOK, user)
}

func GetRepoUser() (model.User, error) {
	db := storage.NewDb()
	user := model.User{}

	if err := db.Find(&user).Error; err != nil {
		return model.User{}, nil
	}
	return user, nil
}
