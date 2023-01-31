package com.springframework.taskmanager.models;

import jakarta.persistence.*;
import lombok.*;

import java.util.Date;
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
    private Date createAt=new Date();


    @OneToMany(cascade = CascadeType.ALL,mappedBy = "taskgroup")
    @OrderBy("createAt")
    private Set<Task> tasks = new HashSet<>();
}
