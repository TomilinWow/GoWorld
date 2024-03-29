// Package docs GENERATED BY SWAG; DO NOT EDIT
// This file was generated by swaggo/swag
package docs

import "github.com/swaggo/swag"

const docTemplate = `{
    "schemes": {{ marshal .Schemes }},
    "swagger": "2.0",
    "info": {
        "description": "{{escape .Description}}",
        "title": "{{.Title}}",
        "contact": {
            "name": "Zhdanov Anton",
            "email": "zhdanov447@gmail.com"
        },
        "version": "{{.Version}}"
    },
    "host": "{{.Host}}",
    "basePath": "{{.BasePath}}",
    "paths": {
        "/api/user/login": {
            "post": {
                "description": "Проверят данные входа и возвращает юзера и jwt при успехе",
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "user"
                ],
                "summary": "get and check user by ID",
                "parameters": [
                    {
                        "type": "string",
                        "description": "email",
                        "name": "email",
                        "in": "path",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "password",
                        "name": "password",
                        "in": "path",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/model.User"
                        }
                    },
                    "409": {
                        "description": "Conflict"
                    }
                }
            }
        },
        "/api/user/register": {
            "post": {
                "description": "Регистрирует юзера",
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "user"
                ],
                "summary": "register user",
                "parameters": [
                    {
                        "type": "string",
                        "description": "first_name",
                        "name": "first_name",
                        "in": "path",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "last_name",
                        "name": "last_name",
                        "in": "path",
                        "required": true
                    },
                    {
                        "type": "integer",
                        "description": "phone_number",
                        "name": "phone_number",
                        "in": "path",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "email",
                        "name": "email",
                        "in": "path",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "username",
                        "name": "username",
                        "in": "path",
                        "required": true
                    },
                    {
                        "type": "string",
                        "description": "password",
                        "name": "password",
                        "in": "path",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/model.User"
                        }
                    },
                    "403": {
                        "description": "Forbidden"
                    }
                }
            }
        }
    },
    "definitions": {
        "model.User": {
            "type": "object",
            "properties": {
                "email": {
                    "type": "string"
                },
                "exp_value": {
                    "type": "integer"
                },
                "first-name": {
                    "type": "string"
                },
                "id": {
                    "type": "string"
                },
                "last-name": {
                    "type": "string"
                },
                "password": {
                    "type": "string"
                },
                "phone-number": {
                    "type": "string"
                },
                "username": {
                    "type": "string"
                }
            }
        }
    }
}`

// SwaggerInfo holds exported Swagger Info so clients can modify it
var SwaggerInfo = &swag.Spec{
	Version:          "1.0",
	Host:             "localhost:1323",
	BasePath:         "/api/",
	Schemes:          []string{},
	Title:            "GoWorld API",
	Description:      "Api for GoWorld.",
	InfoInstanceName: "swagger",
	SwaggerTemplate:  docTemplate,
}

func init() {
	swag.Register(SwaggerInfo.InstanceName(), SwaggerInfo)
}
