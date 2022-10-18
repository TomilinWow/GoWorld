package main

import (
	"GoWorld/api/config"
	"github.com/labstack/echo/v4"
	"github.com/swaggo/echo-swagger"
	"net/http"
	"time"

	_ "GoWorld/api/docs"

	"github.com/dgrijalva/jwt-go"

	"github.com/labstack/echo/v4/middleware"
)

var cfg = config.GetConfig()

func main() {
	e := echo.New()

	// Middleware
	e.Use(middleware.Logger())
	e.Use(middleware.Recover())

	e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
		AllowOrigins: cfg.HTTP.CORS.AllowedOrigins,
		AllowHeaders: cfg.HTTP.CORS.AllowedHeaders,
		AllowMethods: cfg.HTTP.CORS.AllowedMethods,
	}))

	// @title Swagger Example API
	// @version 1.0

	e.GET("/swagger/*", echoSwagger.WrapHandler)

	// Login route
	e.POST("/api/login", login)

	// Unauthenticated route
	e.GET("/api/unrestricted", accessible)

	// Restricted group
	r := e.Group("/api/restricted")
	r.Use(middleware.JWT([]byte(cfg.AppConfig.JwtSecret)))
	r.GET("", restricted)

	e.Logger.Fatal(e.Start(":1323"))
}

func login(c echo.Context) error {
	email := c.FormValue("email")
	password := c.FormValue("password")

	// Throws unauthorized error
	if email != "rickety_cricket@example.com" || password != "shhh!" {
		return echo.ErrUnauthorized
	}

	// Create token
	token := jwt.New(jwt.SigningMethodHS256)

	// Set claims
	claims := token.Claims.(jwt.MapClaims)
	claims["email"] = "rickety_cricket@example.com"
	claims["admin"] = true
	claims["exp"] = time.Now().Add(time.Hour * 72).Unix()

	// Generate encoded token and send it as response.
	t, err := token.SignedString([]byte(cfg.AppConfig.JwtSecret))
	if err != nil {
		return err
	}

	return c.JSON(http.StatusOK, map[string]string{
		"token": t,
	})
}

func accessible(c echo.Context) error {
	return c.JSON(http.StatusOK, map[string]string{
		"message": "Success! The status is 200",
	})
}

func restricted(c echo.Context) error {
	user := c.Get("user").(*jwt.Token)
	claims := user.Claims.(jwt.MapClaims)
	email := claims["email"].(string)
	return c.JSON(http.StatusOK, map[string]string{
		"message": "hello email address: " + email,
	})
}
