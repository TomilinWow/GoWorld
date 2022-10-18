package config

import (
	"flag"
	"github.com/ilyakaznacheev/cleanenv"
	"log"
	"sync"
	"time"
)

// Config TODO Сделать нормальный конфиг yaml
type Config struct {
	HTTP struct {
		IP           string        `yaml:"ip" env:"HTTP-IP"`
		PORT         int           `yaml:"port" env:"HTTP-PORT"`
		ReadTimeout  time.Duration `yaml:"readTimeout" env:"HTTP-READ-TIMEOUT"`
		WriteTimeout time.Duration `yaml:"writeTimeout" env:"HTTP-WRITE-TIMEOUT"`
		CORS         struct {
			AllowedMethods     []string `yaml:"allowed-methods" env:"HTTP-CORS-ALLOWEDMETHODS"`
			AllowedOrigins     []string `yaml:"allowed-origins" env:"HTTP-CORS-ALLOWEDORIGINS"`
			AllowCredentials   bool     `yaml:"allow-credentials" env:"HTTP-CORS-ALLOWCREDENTIALS"`
			AllowedHeaders     []string `yaml:"allowed-headers" env:"HTTP-CORS-ALLOWEHEADERS"`
			OptionsPassthrough bool     `yaml:"options-passthrough" env:"HTTP-CORS-OPTIONSPASSTHROUGH"`
			ExposedHeaders     []string `yaml:"exposed-headers" env:"HTTP-CORS-EXPOSEDHEADERS"`
			Debug              bool     `yaml:"debug" env:"HTTP-CORS-DEBUG"`
		} `yaml:"cors"`
	} `yaml:"http"`
	AppConfig struct {
		IsDebug   bool   `yaml:"is-debug" env:"IS_DEBUG" env-default:"false"`
		LogLevel  string `yaml:"log-level" env:"LOG_LEVEL" env-default:"warning"`
		AdminUser struct {
			Email    string `yaml:"email" env:"ADMIN_EMAIL" env-default:"admin"`
			Password string `yaml:"password" env:"ADMIN_PWD" env-default:"admin"`
		} `yaml:"admin"`
		JwtSecret string `yaml:"jwt-secret" env:"JWT_SECRET"`
	} `yaml:"app"`
	PostgreSQL struct {
		Username string `yaml:"username" env:"PSQL_USERNAME" env-required:"true"`
		Password string `yaml:"password" env:"PSQL_PASSWORD" env-required:"true"`
		Host     string `yaml:"host" env:"PSQL_HOST" env-required:"true"`
		Port     string `yaml:"port" env:"PSQL_PORT" env-required:"true"`
		Database string `yaml:"database" env:"PSQL_DATABASE" env-required:"true"`
	} `yaml:"postgresql"`
}

const (
	EnvConfigPathName  = ".env"
	FlagConfigPathName = "config"
)

var configPath string
var instance *Config
var once sync.Once

func GetConfig() *Config {
	once.Do(func() {
		flag.StringVar(&configPath, FlagConfigPathName, "configs/config.local.yaml", "this is app config file")
		flag.Parse()
		log.Print("config init...")

		instance = &Config{}
		if err := cleanenv.ReadConfig(configPath, instance); err != nil {
			var helpText = "Go world system"
			help, _ := cleanenv.GetDescription(instance, &helpText)
			log.Print(help)
			log.Fatal(err)
		}
	})
	return instance
}
