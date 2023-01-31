package com.springframework.taskmanager.models;

import jakarta.persistence.*;
import lombok.*;

import java.util.HashSet;
import java.util.Set;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "task-groups")
public class TaskGroup {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;
    private String title;



    @OneToMany(cascade = CascadeType.ALL,mappedBy = "taskgroup")
    @OrderBy("id")
    private Set<Task> tasks = new HashSet<>();
}
