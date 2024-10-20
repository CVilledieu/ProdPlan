package main

import (
	"html/template"
	"io"

	"github.com/labstack/echo/v4"
)

type Template struct {
	templates *template.Template
}

func (t *Template) Render(w io.Writer, name string, data interface{}, c echo.Context) error {
	return t.templates.ExecuteTemplate(w, name, data)
}

func newTemplate() *Template {
	return &Template{
		templates: template.Must(template.ParseGlob("public/*.html")),
	}
}

func main() {
	e := echo.New()
	e.Static("/static", "public/static")
	e.Renderer = newTemplate()

	e.GET("/", initHandler)

	e.Logger.Fatal(e.Start(":8080"))
}

func initHandler(c echo.Context) error {
	return c.Render(200, "index", nil)
}
