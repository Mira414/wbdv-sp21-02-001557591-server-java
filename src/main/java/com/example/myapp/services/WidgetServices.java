package com.example.myapp.services;

import com.example.myapp.models.Widget;
import com.example.myapp.repositories.WidgetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class WidgetServices {

    @Autowired
    WidgetRepository repository;

//    public List<Widget> widgets = new ArrayList<Widget>();

//    {
//        Widget w1 = new Widget(123l, "topic1", "Header","new header 111");
//        Widget w2 = new Widget(234l, "topic1","Paragraph","234 ppppaaaarraagraph");
//        Widget w3 = new Widget(345l, "topic2", "Header", "new header 2323");
//        Widget w4 = new Widget(456l, "topic2","Paragraph","123 ppppaaaarraagraph");
//        Widget w5 = new Widget(567l, "topic2","Paragraph", "lkjsdflkjsldkfj");
//
//        widgets.add(w1);
//        widgets.add(w2);
//        widgets.add(w3);
//        widgets.add(w4);
//        widgets.add(w5);
//    }

    public List<Widget> findAllWidgets(){
        return (List<Widget>) repository.findAll();
    }


    public List<Widget> findWidgetsForTopic(String topicId){
        return repository.findWidgetsForTopic(topicId);
//        List<Widget> widgetList = new ArrayList<Widget>();
//        for(Widget w: widgets){
//            if(w.getTopicId().equals(topicId))
//                widgetList.add(w);
//        }
//        return widgetList;
    }

    public Widget createWidget(String topicId, Widget wt){
        wt.setTopicId(topicId);
        return repository.save(wt);

//        wt.setId((new Date()).getTime());
//        widgets.add(wt);
//        return wt;
    }

    public int deleteWidget(Long id){
        if(repository.findById(id).isPresent()){
            repository.delete(repository.findById(id).get());
            return 1;
        }
        else{
            System.out.println("couldn't delete id= " + id + " cause cannot find it");
            return -1;
        }
//        int index = -1;
//        for (Widget wt : widgets) {
//            if(wt.getId().equals(id)){
//                widgets.remove(wt);
//                return 1;
//            }
//        }
//        return 1;
    }

    public int updateWidget(Long id, Widget widget){
        if(repository.findById(id).isPresent()){
            Widget oldWigdet = repository.findById(id).get();
            oldWigdet.setText(widget.getText());
            oldWigdet.setCssClass(widget.getCssClass());
            oldWigdet.setHeight(widget.getHeight());
            oldWigdet.setName(widget.getName());
            oldWigdet.setSize(widget.getSize());
            oldWigdet.setWidth(widget.getWidth());
            oldWigdet.setStyle(widget.getStyle());
            oldWigdet.setType(widget.getType());
            oldWigdet.setUrl(widget.getUrl());
            oldWigdet.setValue(widget.getValue());
            oldWigdet.setOrdered(widget.getOrdered());
            repository.save(oldWigdet);
            return 1;
        }else{
            System.out.println("couldn't update id= " + id + " cause cannot find it");
            return -1;
        }

//        int index = -1;
//        for (int i=0; i< widgets.size(); i++) {
//            if(widgets.get(i).getId().equals(id)){
//                widgets.set(i, widget);
//                return 1;
//            }
//        }
//        return -1;
    }

}
