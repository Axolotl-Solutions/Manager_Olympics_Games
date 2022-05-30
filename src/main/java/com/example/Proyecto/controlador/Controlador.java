package com.example.Proyecto.controlador;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import java.util.LinkedList;

@Controller
public class Controlador {
    private LinkedList<Nota> notas = new LinkedList<>();
    @RequestMapping("/")
    public String index(Model model) {
        model.addAttribute("notas",notas);
        return "notas";
    }

    // http://localhost:8080/procesa
    @PostMapping("/procesa")
    public String procesa(HttpServletRequest request, Model model) {
        String titulo = request.getParameter("titulo");
        String texto = request.getParameter("contenido");
        String colorTitulo = request.getParameter("color-titulo");
        String colorContenido= request.getParameter("color-contenido");
        Nota nota = new Nota(titulo,texto,colorTitulo,colorContenido);
        notas.add(nota);
        System.out.println(colorTitulo);
        model.addAttribute("notas",notas);
        return "notas";
    }

}
