package com.example.myapp.repositories;

import com.example.myapp.models.Widget;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface WidgetRepository extends CrudRepository<Widget, Long> {

    @Query(value = "SELECT * FROM widgets where topic_id=:tid", nativeQuery = true)
    public List<Widget> findWidgetsForTopic (@Param("tid") String TopicId);
}
