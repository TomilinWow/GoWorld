package controller

import (
	"GoWorld/api/config"
	"GoWorld/api/model"
	"GoWorld/api/storage"
	"github.com/dgrijalva/jwt-go"
	"github.com/labstack/echo/v4"
	"golang.org/x/crypto/bcrypt"
	"net/http"
	"time"
)

var cfg = config.GetConfig()

// CheckLoginUser godoc
// @summary     get and check user by ID
// @description Проверят данные входа и возвращает юзера и jwt при успехе
// @tags        user
// @accept      json
// @produce     json
// @param       email path string true "email"
// @param 		password path string true "password"
// @success     200   {object} model.User
// @failure     409
// @router      /api/user/login [post]
func CheckLoginUser(c echo.Context) error {

	email := c.FormValue("email")

	password := c.FormValue("password")

	user, _ := GetDbUser(email)
	hashedPassword := user.Password

	if CheckPasswordHash(password, hashedPassword) {
		token := jwt.New(jwt.SigningMethodHS256)

		// Set claims
		claims := token.Claims.(jwt.MapClaims)
		claims["email"] = user.Email
		claims["admin"] = true
		claims["exp"] = time.Now().Add(time.Hour * 72).Unix()

		t, err := token.SignedString([]byte(cfg.AppConfig.JwtSecret))
		if err != nil {
			return err
		}

		err = c.JSON(http.StatusOK, map[string]string{
			"jwt": t,
		})
		if err != nil {
			return err
		}

		return c.JSON(http.StatusOK, user)
	}

	return c.JSON(http.StatusConflict, "Invalid Username or Password")
}

// RegisterUser  godoc
// @Summary     register user
// @Description Регистрирует юзера
// @Tags        user
// @Accept      json
// @Produce     json
// @Param       first_name path string true "first_name"
// @param 		last_name path string true "last_name"
// @param 		phone_number path varchar  true "phone_number"
// @param 		email path string true "email"
// @param 		username path string true "username"
// @param 		password path string true "password"
// @Success     200        {object}  model.User
// @Failure     403
// @Router      /api/user/register [post]
func RegisterUser(c echo.Context) error {

	var userS = model.User{
		FirstName:   c.FormValue("first_name"),
		LastName:    c.FormValue("last_name"),
		PhoneNumber: c.FormValue("phone_number"),
		Email:       c.FormValue("email"),
		Username:    c.FormValue("username"),
		Password:    c.FormValue("password"),
	}
	password := c.FormValue("password")
	hashedPassword, _ := HashPassword(password)
	userS.Password = hashedPassword

	user, err := InsertDBUser(userS)
	if err != nil {
		return err
	}

	return c.JSON(http.StatusOK, user)
}

func GetDbUser(emailUser string) (model.User, error) {
	db := storage.NewDb()
	user := model.User{}

	if err := db.First(&user, "email = ?", emailUser).Error; err != nil {
		return model.User{}, nil
	}
	return user, nil
}

func InsertDBUser(userS model.User) (model.User, error) {
	db := storage.NewDb()

	if err := db.Create(&userS).Error; err != nil {
		return model.User{}, nil
	}
	return userS, nil
}

func HashPassword(password string) (string, error) {
	bytes, err := bcrypt.GenerateFromPassword([]byte(password), 14)
	return string(bytes), err
}

func CheckPasswordHash(password, hash string) bool {
	err := bcrypt.CompareHashAndPassword([]byte(hash), []byte(password))
	return err == nil
}
