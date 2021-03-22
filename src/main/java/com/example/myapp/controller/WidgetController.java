package com.example.myapp.controller;

import com.example.myapp.models.Widget;
import com.example.myapp.services.WidgetServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
public class WidgetController {

    @Autowired
    WidgetServices service;

    @GetMapping("/api/widgets")
    public List<Widget> findAllWidgets(){
        return service.findAllWidgets();
    }

    @GetMapping("/api/topics/{tid}/widgets")
    public List<Widget> findWidgetsForTopic(
            @PathVariable("tid")
            String topicId
    ){
        return service.findWidgetsForTopic(topicId);
    }

    @PostMapping("/api/topics/{tid}/widgets")
    public Widget creatWidget(
            @PathVariable("tid") String topicId,
            @RequestBody Widget widget){
        return service.createWidget(topicId, widget);
    }

    @DeleteMapping("/api/widgets/{widgetId}")
    public int deleteWidget(
            @PathVariable("widgetId") Long id
    ){
        return service.deleteWidget(id);
    }

    @PutMapping("/api/widgets/{widgetId}")
    public int updateWidget(
           @PathVariable("widgetId") Long id,
           @RequestBody Widget widget
    ){
        return service.updateWidget(id, widget);
    }

}
