package model

type User struct {
	Id          string `json:"id"`
	FirstName   string `json:"first-name"`
	LastName    string `json:"last-name"`
	PhoneNumber string `json:"phone-number"`
	Email       string `json:"email"`
	Username    string `json:"username"`
	Password    string `json:"password"`
	Exp_value   int    `json:"exp_value"`
}
