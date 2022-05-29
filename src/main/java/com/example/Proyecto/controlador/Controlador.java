package com.example.Proyecto.controlador;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;

@Controller
public class Controlador {

    @RequestMapping("/")
    public String index() {
        return "index";
    }

    // http://localhost:8080/procesa
    @PostMapping("/procesa")
    public String procesa(HttpServletRequest request, Model model) {
       // String nombres = "Axel David García Beltrán \n Camila Alexandra Cruz Miranda \n Fernando Gerardo Flores García \n Ian Israel Garcia Vazquez";
        String titulo = request.getParameter("titulo");
        String texto = request.getParameter("texto");
        //String nombre3 = request.getParameter("nombre4");
        //String nombre4 = request.getParameter("nombre3");
        model.addAttribute("titulo", titulo);
        model.addAttribute("texto", texto);
        //model.addAttribute("nombre3", nombre3);
        //model.addAttribute("nombre4", nombre4);
        return "index";
    }

}
