package com.example.myapp.services;

import com.example.myapp.models.Widget;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class WidgetServices {

    public List<Widget> widgets = new ArrayList<Widget>();

    {
        Widget w1 = new Widget(123l, "topic1", "Header","new header 111");
        Widget w2 = new Widget(234l, "topic1","Paragraph","234 ppppaaaarraagraph");
        Widget w3 = new Widget(345l, "topic2", "Header", "new header 2323");
        Widget w4 = new Widget(456l, "topic2","Paragraph","123 ppppaaaarraagraph");
        Widget w5 = new Widget(567l, "topic2","Paragraph", "lkjsdflkjsldkfj");

        widgets.add(w1);
        widgets.add(w2);
        widgets.add(w3);
        widgets.add(w4);
        widgets.add(w5);
    }

    public List<Widget> findAllWidgets(){
        return widgets;
    }

    public List<Widget> findWidgetsForTopic(String topicId){
        List<Widget> widgetList = new ArrayList<Widget>();
        for(Widget w: widgets){
            if(w.getTopicId().equals(topicId))
                widgetList.add(w);
        }
        return widgetList;
    }

    public Widget createWidget(String topicId, Widget wt){
        wt.setTopicId(topicId);
        wt.setId((new Date()).getTime());
        widgets.add(wt);
        return wt;
    }

    public int deleteWidget(Long id){
        int index = -1;
        for (Widget wt : widgets) {
            if(wt.getId().equals(id)){
                widgets.remove(wt);
                return 1;
            }
        }
        return -1;
    }

    public int updateWidget(Long id, Widget widget){
        int index = -1;
        for (int i=0; i< widgets.size(); i++) {
            if(widgets.get(i).getId().equals(id)){
                widgets.set(i, widget);
                return 1;
            }
        }
        return -1;
    }




}
