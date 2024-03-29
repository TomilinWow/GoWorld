package main

import (
	"GoWorld/api/config"
	"GoWorld/api/controller"
	_ "GoWorld/api/docs"
	"GoWorld/api/storage"
	"github.com/golang-jwt/jwt"
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
	echoSwagger "github.com/swaggo/echo-swagger"
	"net/http"
)

// @title           GoWorld API
// @version         1.0
// @description     Api for GoWorld.

// @contact.name   Zhdanov Anton
// @contact.email  zhdanov447@gmail.com

// @host      localhost:1323
// @BasePath  /api/

var cfg = config.GetConfig()

func restricted(c echo.Context) error {
	user := c.Get("user").(*jwt.Token)
	claims := user.Claims.(jwt.MapClaims)
	email := claims["email"].(string)
	return c.JSON(http.StatusOK, map[string]string{
		"message": "jwt is valid \n" + email,
	})
}

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

	e.POST("/api/user/login", controller.CheckLoginUser)

	e.POST("/api/user/register", controller.RegisterUser)

	// Restricted group
	r := e.Group("/api/auth")
	r.Use(middleware.JWT([]byte(cfg.AppConfig.JwtSecret)))
	r.GET("", restricted)
	r.GET("/swagger/*", echoSwagger.WrapHandler)

	e.Logger.Fatal(e.Start(":1323"))
}
