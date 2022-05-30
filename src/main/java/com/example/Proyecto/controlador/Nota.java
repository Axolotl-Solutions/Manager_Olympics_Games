package com.example.Proyecto.controlador;

import lombok.Data;

@Data
public class Nota {
    private String titulo;
    private String contenido;
    private String colorTitulo;
    private String colorContenido;
    public Nota(String titulo, String contenido, String colorTitulo, String colorContenido){
        this.titulo=titulo;
        this.contenido=contenido;
        this.colorTitulo=colorTitulo;
        this.colorContenido=colorContenido;
    }
}
