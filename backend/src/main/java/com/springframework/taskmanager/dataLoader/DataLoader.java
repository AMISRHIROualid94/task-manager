package com.springframework.taskmanager.dataLoader;

import com.springframework.taskmanager.models.Task;
import com.springframework.taskmanager.models.TaskGroup;
import com.springframework.taskmanager.repositories.TaskGroupRepository;
import com.springframework.taskmanager.repositories.TaskRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.HashSet;
import java.util.Set;

@Component
public class DataLoader implements CommandLineRunner {

    private final TaskRepository taskRepository;
    private final TaskGroupRepository taskGroupRepository;
    public DataLoader(TaskRepository taskRepository, TaskGroupRepository taskGroupRepository) {
        this.taskRepository = taskRepository;
        this.taskGroupRepository = taskGroupRepository;
    }

    @Override
    public void run(String... args) throws Exception {

        TaskGroup taskGroup1 = new TaskGroup();
        taskGroup1.setTitle("Groupe 1");

        Task task1 = new Task();
        task1.setDescription("task test");
        task1.setTaskgroup(taskGroup1);
        taskGroup1.getTasks().add(task1);

        taskGroupRepository.save(taskGroup1);



    }
}
