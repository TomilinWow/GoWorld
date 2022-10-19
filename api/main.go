package main

import (
	"GoWorld/api/config"
	"GoWorld/api/controller"
	_ "GoWorld/api/docs"
	"GoWorld/api/storage"
	"github.com/labstack/echo/v4"
	"github.com/swaggo/echo-swagger"
	"net/http"

	"github.com/dgrijalva/jwt-go"

	"github.com/labstack/echo/v4/middleware"
)

var cfg = config.GetConfig()

// @title           GoWorld API
// @version         1.0
// @description     Api for GoWorld.

// @contact.name   Zhdanov Anton
// @contact.email  zhdanov447@gmail.com

// @host      localhost:1323
// @BasePath  /api/

func main() {
	e := echo.New()

	storage.NewDb()
	// Middleware
	e.Use(middleware.Logger())
	e.Use(middleware.Recover())

	e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
		AllowOrigins: cfg.HTTP.CORS.AllowedOrigins,
		AllowHeaders: cfg.HTTP.CORS.AllowedHeaders,
		AllowMethods: cfg.HTTP.CORS.AllowedMethods,
	}))

	e.GET("/api/swagger/*", echoSwagger.WrapHandler)

	e.POST("/api/user/login", controller.CheckLoginUser)

	e.POST("/api/user/register", controller.RegisterUser)

	// Unauthenticated route
	e.GET("/api/unrestricted", accessible)

	// Restricted group
	r := e.Group("/api/restricted")
	r.Use(middleware.JWT([]byte(cfg.AppConfig.JwtSecret)))
	r.GET("", restricted)

	e.Logger.Fatal(e.Start(":1323"))
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
