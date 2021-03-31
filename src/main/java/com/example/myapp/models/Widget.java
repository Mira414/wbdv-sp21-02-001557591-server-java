package com.example.myapp.models;

import javax.persistence.*;


@Entity
@Table(name="widgets")
public class Widget {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String topicId;
    private String name;
    private String type;
    private Integer widgetOrder;
    private Integer size;
    private Integer width;
    private Integer height;
    private String text;
    private String url;
    private String cssClass;
    private String style;
    private String value;
    private Boolean ordered;

    public Widget() {
    }

    public Widget(Long id, String topicId, String name) {
        this.id = id;
        this.topicId = topicId;
        this.name = name;
    }

    public Widget(Long id, String topicId, String type, String text) {
        this.id = id;
        this.topicId = topicId;
        this.type = type;
        this.text = text;
    }

    public Widget(String name,
                  Long id,
                  String topicId,
                  String type,
                  Integer widgetOrder,
                  Integer size,
                  Integer width,
                  Integer height,
                  String text,
                  String url,
                  String cssClass,
                  String style,
                  String value,
                  Boolean ordered) {
        this.name = name;
        this.id = id;
        this.topicId = topicId;
        this.type = type;
        this.widgetOrder = widgetOrder;
        this.size = size;
        this.width = width;
        this.height = height;
        this.text = text;
        this.url = url;
        this.cssClass = cssClass;
        this.style = style;
        this.value = value;
        this.ordered = ordered;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTopicId() {
        return topicId;
    }

    public void setTopicId(String topicId) {
        this.topicId = topicId;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Integer getWidgetOrder() {
        return widgetOrder;
    }

    public void setWidgetOrder(Integer widgetOrder) {
        this.widgetOrder = widgetOrder;
    }

    public Integer getSize() {
        return size;
    }

    public void setSize(Integer size) {
        this.size = size;
    }

    public Integer getWidth() {
        return width;
    }

    public void setWidth(Integer width) {
        this.width = width;
    }

    public Integer getHeight() {
        return height;
    }

    public void setHeight(Integer height) {
        this.height = height;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getCssClass() {
        return cssClass;
    }

    public void setCssClass(String cssClass) {
        this.cssClass = cssClass;
    }

    public String getStyle() {
        return style;
    }

    public void setStyle(String style) {
        this.style = style;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    public Boolean getOrdered() {
        return ordered;
    }

    public void setOrdered(Boolean ordered) {
        this.ordered = ordered;
    }


}
